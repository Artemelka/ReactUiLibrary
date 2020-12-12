import { InjectReducersParams } from '../types';

export const removeReducers = ({ asyncReducers, store }: InjectReducersParams) => {
    const replacedReducerNames: Array<string> = [];

    asyncReducers.forEach(({ name }) => {
        if (store.injectedReducers[name]) {
            delete store.injectedReducers[name];
            replacedReducerNames.push(name);
        } else {
            console.warn(`The reducer ${name} is not found in asyncReducers`);
        }
    });

    if (replacedReducerNames.length) {
        store.replaceReducer(store.appReducer(store.injectedReducers));
        store.dispatch({ type: '@@injectReducer/REMOVE_ASYNC_REDUCER', payload: replacedReducerNames.join('; ') });
        replacedReducerNames.length = 0;
    }
};
