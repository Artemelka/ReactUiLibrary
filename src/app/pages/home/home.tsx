import React from 'react';
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
interface Buttons {
    onClick: () => void;
    label: string;
}

const TEST_URL = '/api/getUsername';
const USER_PARAMS = 'name=tim';
const wrapperStyle = { padding: '15px' };
const requestGetParams = { url: TEST_URL };

const concatUrl = (url: string, queryParams?: string): string =>
    queryParams
        ? `${url}?${queryParams}`
        : url;

const getPostConfig = (userName: string) => ({
    ...requestGetParams,
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

    buttonsExample = {
        request: [
            {
                onClick: this.handleRequestClick,
                label: 'REQUEST GET'
            },
            {
                onClick: this.handleRequestErrorClick,
                label: 'REQUEST GET ERROR'
            },
            {
                onClick: this.handleRequestPostClick,
                label: 'REQUEST POST'
            },
            {
                onClick: this.handleRequestErrorPostClick,
                label: 'REQUEST POST ERROR'
            }
        ],
        counter: [
            {
                onClick: this.handleCounterClick(true),
                label: 'counter +'
            },
            {
                onClick: this.handleCounterClick(false),
                label: 'counter -'
            }
        ]
    };

    renderButtons = (buttons: Array<Buttons>) => buttons.map(({onClick, label}: Buttons) => (
        <div style={wrapperStyle}>
            <button onClick={onClick}>{label}</button>
        </div>
    ));

    renderCounter = () => {
        const { counter } = this.props;

        return (
            <React.Fragment>
                <h2>counter : {counter.value}</h2>
                <div>
                    {this.renderButtons(this.buttonsExample.counter)}
                </div>
            </React.Fragment>
        );
    };

    renderLink = () => {
        const { routing } = this.props;
        const { pathname, search } = routing.history.location;

        return (
            <React.Fragment>
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
    };

    render() {
        return (
            <React.Fragment>
                {this.renderCounter()}
                {this.renderButtons(this.buttonsExample.request)}
                {this.renderLink()}
            </React.Fragment>
        );
    }
}