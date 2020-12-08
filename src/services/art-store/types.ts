export type Store = Record<string, any>;
export type BaseAction<P = any> = {
    type: string;
    payload?: P;
};
export type Action = BaseAction & {
    reducerName: string;
};
export type SubscribeAction = (store: Store) => void;
export type Reducer<S = Store> = (store?: S, action?: BaseAction) => S;
export type InjectReducerParams = {
    name: string;
    reducer: Reducer;
};
export type ArtStoreConfig = {
    reducers: Record<string, Reducer>;
};
export type ArtStore = {
    getState: () => Store;
    dispatch: (action: Action) => void;
    subscribe: (cb: SubscribeAction) => void;
    unsubscribe: (cb: SubscribeAction) => void;
    injectReducers: (asyncReducers: Array<InjectReducerParams>) => void;
};
