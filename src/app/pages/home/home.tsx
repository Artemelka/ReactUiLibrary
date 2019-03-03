import * as React from 'react';

import { connect } from 'react-redux';
import { request } from '../../../services';

interface ActionType {
    type: string;
}
interface CounterType {
    value: number;
}
interface AppPropsType {
    counter: CounterType;
    routing: any;
    dispatch: (action: ActionType) => void;
}
interface MapStateType {
    counter: CounterType;
}

const TEST_URL = '/api/getUsername';
const concatUrl = (url: string, queryParams?: string): string => queryParams ? `${url}?${queryParams}` : url;
const wrapperStyle = {
    padding: '15px'
};

@(connect(({counter}: MapStateType, routing) => ({counter, routing})) as any)
export class TestHomePage extends React.Component<AppPropsType, {}> {
    handleRequestClick = () =>
        request(concatUrl(TEST_URL, 'name=tim'))
            .then(data => console.log('persons', data))
            .catch(requestError => console.log(requestError));

    handleRequestErrorClick = () =>
        request(concatUrl(TEST_URL))
            .then(data => console.log('persons', data))
            .catch(requestError => console.log(requestError));

    handleRequestPostClick = () => {
        request(TEST_URL, {method: 'POST', data: {userName: 'Tim'}})
            .then(response => console.log('response', response))
            .catch(requestError => console.log(requestError));
    };

    handleRequestErrorPostClick = () => {
        request(TEST_URL, {method: 'POST', data: {userName: ''}})
            .then(response => console.log('response', response))
            .catch(requestError => console.log(requestError));
    };

    handleCounterClick = (dir: boolean) => () => this.props.dispatch({type: dir ? 'INCREMENT' : 'DECREMENT'});

    handleLinkClick = () => this.props.routing.history.push('/app?filter=123');

    handleLinkBackClick = () => this.props.routing.history.goBack();

    handleLinkLibraryClick = () => this.props.routing.history.push('/library');

    render() {
        const { counter, routing } = this.props;
        const { pathname, search } = routing.history.location;
        console.log('routing', routing);
        return (
            <React.Fragment>
                <div style={wrapperStyle}>
                    <button onClick={this.handleRequestClick}>REQUEST GET</button>
                    <button onClick={this.handleRequestErrorClick}>REQUEST GET ERROR</button>
                </div>
                <div style={wrapperStyle}>
                    <button onClick={this.handleRequestPostClick}>REQUEST POST</button>
                    <button onClick={this.handleRequestErrorPostClick}>REQUEST POST</button>
                </div>
                <h2>counter : {counter.value}</h2>
                <div>
                    <button onClick={this.handleCounterClick(true)}>counter +</button>
                    <button onClick={this.handleCounterClick(false)}>counter -</button>
                </div>
                <h3>pathname: {pathname || 'no'}</h3>
                <h3>search: {search || 'no search'}</h3>
                <div style={wrapperStyle}>
                    <button onClick={this.handleLinkClick}>link</button>
                    <button onClick={this.handleLinkBackClick}>link back</button>
                </div>
                <div style={wrapperStyle}>
                    <button onClick={this.handleLinkLibraryClick}>library</button>
                </div>
            </React.Fragment>
        );
    }
}