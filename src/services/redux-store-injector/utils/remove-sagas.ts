import { AsyncSagaItem, InjectSagasParams } from '../types';

export const removeSagas = ({ asyncSagas, store }: InjectSagasParams) => {
    if (store.runSaga) {
        const removedSagaNames: Array<string> = [];

        asyncSagas.forEach(({ name }: AsyncSagaItem) => {
            if (store.injectedSagas[name]) {
                store.injectedSagas[name].cancel();
                delete store.injectedSagas[name];
                removedSagaNames.push(name);
            } else {
                console.warn(`The saga ${name} is not found in asyncSagas`);
            }
        });

        if (removedSagaNames.length) {
            store.dispatch({ type: '@@injectSaga/REMOVE_ASYNC_SAGAS', payload: removedSagaNames.join('; ') });
            removedSagaNames.length = 0;
        }
    }
};
