import { CreateEnhancer, CreateEnhancerParams } from './types';

export const createInjectorEnhancer = ({ createReducer, runSaga }: CreateEnhancerParams): CreateEnhancer =>
    (createStore) =>
        (...args) => ({
            ...createStore(...args),
            appReducer: createReducer,
            injectedSagas: {},
            injectedReducers: {},
            runSaga
        });
