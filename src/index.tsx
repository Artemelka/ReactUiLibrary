import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { App } from './app';
import './index.less';

interface ActionType {
    type: string;
}

const ELEMENT_NAME = 'App';
const ROOT = document.getElementById(ELEMENT_NAME);
const rootReducers = (state = {value: 0}, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
};
const reducers = combineReducers({
    counter: rootReducers,
    routing: routerReducer
});
const history = createHistory();
const middleware = routerMiddleware(history);
const composeMiddleware = composeWithDevTools(applyMiddleware(middleware));
const store = createStore(reducers, composeMiddleware);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    ROOT
);
