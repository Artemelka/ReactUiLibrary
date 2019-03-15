const enzyme = require('enzyme');
const SetupTest = require('enzyme-adapter-react-16');
const JSDOM = require('jsdom').JSDOM;

enzyme.configure({adapter: new SetupTest()});

global.document = new JSDOM('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
    }
});

global.MouseEvent = window.MouseEvent;

// class LocalStorageMock {
//     constructor() {
//         this.store = {};
//     }
//
//     clear() {
//         this.store = {};
//     }
//
//     getItem(key) {
//         return this.store[key];
//     }
//
//     setItem(key, value) {
//         this.store[key] = value.toString();
//     }
//
//     removeItem(key) {
//         delete this.store[key];
//     }
// }
//
// global.localStorage = global.sessionStorage = new LocalStorageMock();

global.requestAnimationFrame = function (cb) {
    return setTimeout(cb, 0);
};
