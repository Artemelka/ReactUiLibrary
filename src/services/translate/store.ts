import { ErrorMessages } from './constants';
import { translateStoreSelector } from './selectors';

let reduxStore: any;

export const getTranslateState = () => {
    if (!reduxStore) {
        throw Error(ErrorMessages.MIDDLEWARE_ERROR);
    }
    return translateStoreSelector(reduxStore.getState());
};

export const translateMiddleware = (store: any) => {
    reduxStore = store;
    return (next: any) => (action: any) => next(action);
};
