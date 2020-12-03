import { Action } from 'redux';

export const INIT_LOCALIZATION_ACTION_SAGA = 'INIT_LOCALIZATION_ACTION_SAGA';
export const initLocalizationActionSaga = (): Action<string> => ({
    type: INIT_LOCALIZATION_ACTION_SAGA
});
