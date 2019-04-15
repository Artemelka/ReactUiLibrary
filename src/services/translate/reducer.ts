interface ActionType {
    type: string;
    payload?: any;
}
interface StringObject {
    [key: string]: string;
}
export interface TranslateState {
    dictionary: StringObject;
    locale: string;
}

const INITIAL_STATE = {
    dictionary: {},
    locale: 'en'
};

const addDictionary = (state: TranslateState, payload: StringObject) => ({
    ...state,
    dictionary: payload
});
const changeLang = (state: TranslateState, payload: string) => ({
    ...state,
    locale: payload
});

export const TranslateActions = {
    ADD_DICTIONARY: 'ADD_DICTIONARY',
    CHANGE_LANG: 'CHANGE_LANG'
};

export const translateReducer = (state = INITIAL_STATE, {type, payload}: ActionType) => {
    switch (type) {
        case TranslateActions.CHANGE_LANG:
            return changeLang(state, payload);
        case TranslateActions.ADD_DICTIONARY:
            return addDictionary(state, payload);
        default: return state;
    }
};
