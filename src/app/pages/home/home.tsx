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
interface RequestData {
    userName: string;
}
interface Config {
    method: string;
    data: RequestData;
}
interface RequestParams {
    url: string;
    config?: Config;
}

const TEST_URL = '/api/getUsername';
const USER_PARAMS = 'name=tim';
const wrapperStyle = { padding: '15px' };
const requestGetParams = { url: TEST_URL };

const concatUrl = (url: string, queryParams?: string): string => queryParams ? `${url}?${queryParams}` : url;

const getPostConfig = (userName: string) => ({
    url: TEST_URL,
    config: {
        method: 'POST',
        data: { userName }
    }
});

const requestWrapper = ({ url, config }: RequestParams, params?: string) =>
    request(concatUrl(url, params), config)
        .then(data => console.log('persons', data))
        .catch(requestError => console.log(requestError));

@(connect(({counter}: MapStateType, routing) => ({counter, routing})) as any)
export class TestHomePage extends React.Component<AppPropsType, {}> {
    handleRequestClick = () => requestWrapper(requestGetParams, USER_PARAMS);

    handleRequestErrorClick = () => requestWrapper(requestGetParams);

    handleRequestPostClick = () => requestWrapper(getPostConfig('Tim'));

    handleRequestErrorPostClick = () => requestWrapper(getPostConfig(''));

    handleCounterClick = (dir: boolean) => () => this.props.dispatch({type: dir ? 'INCREMENT' : 'DECREMENT'});

    handleLinkClick = () => this.props.routing.history.push('/app?filter=123');

    handleLinkBackClick = () => this.props.routing.history.goBack();

    handleLinkLibraryClick = () => this.props.routing.history.push('/library');

    render() {
        const { counter, routing } = this.props;
        const { pathname, search } = routing.history.location;

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