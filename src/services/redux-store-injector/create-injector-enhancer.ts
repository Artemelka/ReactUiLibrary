import { CreateEnhancer, CreateEnhancerParams } from './types';

export const createInjectorEnhancer = ({ createReducer, runSaga }: CreateEnhancerParams): CreateEnhancer =>
    (createStore: any) =>
        (...args: any) => ({
            ...createStore(...args),
            appReducer: createReducer,
            injectedSagas: {},
            injectedReducers: {},
            runSaga
        });
