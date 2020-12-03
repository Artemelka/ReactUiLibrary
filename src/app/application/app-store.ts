import { applyMiddleware, createStore, Middleware, Reducer, Store } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware, { RunSagaOptions, Saga, Task } from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { createInjectReducerAndSagas } from 'services';
import { appReducer } from './app-reducers';
import { history } from './app-history';

type AsyncReducerMap = Record<string, Reducer>;
type AppStore = Store & {
    appReducer?: (asyncReducers?: AsyncReducerMap) => Reducer;
    runSaga?: (saga: Saga, options: RunSagaOptions<string, Store>) => Task;
};

const sagaMiddleware = createSagaMiddleware();
const middlewares: Array<Middleware> = [
    sagaMiddleware,
    routerMiddleware(history),
    thunk,
    logger
];
const store: AppStore = createStore(appReducer(), composeWithDevTools(applyMiddleware(...middlewares)));

store.runSaga = sagaMiddleware.run;
store.appReducer = appReducer;

export const appStore = store;
export const injectReducersAndSagas = createInjectReducerAndSagas({ store, withEjectReducers: true });

