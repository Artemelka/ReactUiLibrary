import { RunSagaOptions, Saga, Task } from 'redux-saga';

export type Store = Record<string, any>;
export type BaseAction<P = any> = {
    type: string;
    payload?: P;
};
export type Action<N = string> = BaseAction & {
    reducerName: N;
};
export type SubscribeAction = (store: Store) => void;
export type Reducer<S = Store> = (store?: S, action?: BaseAction) => S;
export type GetStorePartFromReducer = {
    action: BaseAction;
    name: string;
    prevStore?: Store;
    reducer: Reducer;
};
export type AsyncSagasMap = Record<string, Task>;
export type InjectReducerParams<S = Store> = {
    name: string;
    reducer: Reducer<S>;
};
export type InjectSagaParams = {
    args?: RunSagaOptions<string, Store>;
    name: string;
    saga: Saga;
};
export type ArtStoreConfig = {
    reducers?: Record<string, Reducer>;
    middlewares?: Array<any>;
    runSaga?: any;
};
export type ArtStore = {
    batchDispatch: (actions: Array<Action>) => void;
    dispatch: (action: Action) => void;
    getState: () => Store;
    injectReducers: (asyncReducers: Array<InjectReducerParams>) => void;
    injectSagas: (asyncSagas: Array<InjectSagaParams>) => void;
    removeReducers: (asyncReducers: Array<InjectReducerParams>) => void;
    removeSagas: (asyncSagas: Array<InjectSagaParams>) => void;
    subscribe: (cb: SubscribeAction) => void;
    unsubscribe: (cb: SubscribeAction) => void;
};
