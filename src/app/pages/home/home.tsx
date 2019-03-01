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
const TITLE = ['hello', 'world'];
const concatUrl = (url: string, queryParams?: string): string => queryParams ? `${url}?${queryParams}` : url;

@(connect(({counter}: MapStateType, routing) => ({counter, routing})) as any)
export class TestHomePage extends React.Component<AppPropsType, {}> {
    handleRequestClick = (): any =>
        request(concatUrl(TEST_URL, 'name=tim'))
            .then(data => console.log('persons', data))
            .catch(requestError => console.log(requestError));

    handleRequestErrorClick = (): any =>
        request(concatUrl(TEST_URL))
            .then(data => console.log('persons', data))
            .catch(requestError => console.log(requestError));

    handleCounterClick = (dir: boolean) => () => this.props.dispatch({type: dir ? 'INCREMENT' : 'DECREMENT'});

    handleLinkClick = () => this.props.routing.history.push('/app?filter=123');

    render() {
        const { counter, routing } = this.props;
        console.log('routing', routing);
        return (
            <React.Fragment>
                {TITLE.map((item, index) => <h1 key={index}>{item}</h1>)}
                <div>
                    <button onClick={this.handleRequestClick}>REQUEST</button>
                    <button onClick={this.handleRequestErrorClick}>REQUEST error</button>
                </div>
                <h2>counter : {counter.value}</h2>
                <div>
                    <button onClick={this.handleCounterClick(true)}>counter +</button>
                    <button onClick={this.handleCounterClick(false)}>counter -</button>
                </div>
                <h3>{routing.history.location.pathname}</h3>
                <h3>{routing.history.location.search}</h3>
                <div>
                    <button onClick={this.handleLinkClick}>link</button>
                </div>
            </React.Fragment>
        );
    }
}