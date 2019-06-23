interface ActionType {
    type: string;
    payload?: any;
}
export interface TranslateState {
    locale: string;
}

const INITIAL_STATE = {
    locale: 'en'
};

const changeLang = (state: TranslateState, payload: string) => ({
    ...state,
    locale: payload
});

export const TranslateActions = {
    CHANGE_LANG: 'CHANGE_LANG'
};

export const translateReducer = (state = INITIAL_STATE, {type, payload}: ActionType) => {
    switch (type) {
        case TranslateActions.CHANGE_LANG:
            return changeLang(state, payload);
        default: return state;
    }
};
