import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router'

import './app.less';


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
interface mapStateType {
    counter: CounterType;
}

const TEST_URL = '/api/getUsername';
const TITLE = ['hello', 'world'];
const requestTestServer = (url: string, queryParams?: string): void => {
    const finalUrl = queryParams ? `${url}?${queryParams}` : url;

    axios.get(finalUrl)
        .then(res => {
            console.log('persons', res.data);

            return res.data;
        }).catch(requestError => console.log(requestError));
};

@(connect(({counter}: mapStateType, routing) => ({counter, routing})) as any)
class Index extends React.Component<AppPropsType, {}> {
    handleClick = (): void => requestTestServer(TEST_URL);

    handleCounterClick = (dir: boolean) => () => this.props.dispatch({type: dir ? 'INCREMENT' : 'DECREMENT'});

    handleLinkClick = () => this.props.routing.history.push('/app?filter=123');

    render() {
        const { counter, routing } = this.props;
        console.log('routing', routing);
        return (
            <React.Fragment>
                {TITLE.map((item, index) => <h1 key={index}>{item}</h1>)}
                <div>
                    <button onClick={this.handleClick}>REQUEST</button>
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

export class App extends React.Component<{}, {}> {
    componentDidMount(): void {
        requestTestServer(TEST_URL, 'name=tim');
    }

    render() {
        return (
            <div className='App'>
                <Route path="/" component={Index} />
            </div>
        );
    }
}

