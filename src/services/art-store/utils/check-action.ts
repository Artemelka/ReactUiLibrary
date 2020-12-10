import { Action } from '../types';

export const checkAction = (action: Action<string | Symbol>): boolean => {
    if (typeof action !== 'object' || typeof action === 'function') {
        console.error('Action must be a plain object');
        return false;
    }

    if (!action.type) {
        console.error('Action must contain field "type"');
        return false;
    }

    if (!action.reducerName) {
        console.error('Action must contain field "reducerName"');
        return false;
    }

    return true;
};
