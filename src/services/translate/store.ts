import { ErrorMessages } from './constants';
import { translateStoreSelector } from './selectors';
import { TranslateState } from './types';

let reduxStore: any;

export const getTranslateState = (): TranslateState => {
    if (!reduxStore) {
        throw Error(ErrorMessages.MIDDLEWARE_ERROR);
    }
    return translateStoreSelector(reduxStore.getState());
};

export const translateMiddleware = (store: any) => {
    reduxStore = store;
    return (next: any) => (action: any) => next(action);
};
