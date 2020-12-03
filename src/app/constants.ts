// ROOT ID
export const APP_ROOT = 'app-root';
export const MODAL_ROOT = 'modal-root';
export const NOTIFICATION_ROOT = 'notification-root';

// ROOT CLASS NAME
export const PAGE_MODAL_CONTAINER_CLASS_NAME = 'Page__modal-container';
export const PAGE_NOTIFICATION_CONTAINER_CLASS_NAME = 'Page__notification-container';
export const TAG_NAME_DIV = 'div';

// URL
export const PROJECT_LINK = 'https://github.com/Artemelka/ReactUiLibrary';
export const HOME_URL = '/';
export const LIBRARY_URL = '/library';
export const INPUT_SUB_URL = '/inputs';

// Store keys
export enum APP_STORE_KEY {
    ROUTER = 'router'
}

// HTTP
export const DEFAULT_TIMEOUT = 60000;
export enum REQUEST_METHOD {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT'
}

export const HTTP_STATUSES = {
    PROCESSING: 102,
    OK: 200,
    ACCEPTED: 202,
    NON_AUTHORITATIVE: 203,
    PARTIAL_CONTENT: 206,
    MOVED: 301,
    NOT_MODIFIED: 304,
    BAD_REQUEST: 400,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    TIMEOUT: 408,
    EXPECTATION_FAILED: 417,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    TOO_MANY_REQUESTS: 429,
    RETRY_WITH: 449,
    ILLEGAL: 451,
    INTERNAL_ERROR: 500,
    UNAVAILABLE: 503,
    INSUFFICIENT_STORAGE: 507
};

// Key code
export const keyCodes = {
    ALT: 18,
    BACKSPACE: 8,
    CTRL: 17,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    RIGHT: 39,
    SHIFT: 16,
    SPACE: 32,
    TAB: 9,
    UP: 38
};
