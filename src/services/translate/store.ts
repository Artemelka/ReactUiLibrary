let reduxStore: any;

export const getTranslateState = () => {
    if (!reduxStore) {
        throw Error('services/translate: You must integrate translateMiddleware with redux-store using');
    }
    return reduxStore.getState().translateDictionary;
};

export const translateMiddleware = (store: {[key: string]: any}) => {
    reduxStore = store;
    return (next: any) => (action: any) => next(action);
};
