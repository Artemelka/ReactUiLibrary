const enzyme = require('enzyme');
const SetupTest = require('enzyme-adapter-react-16');
enzyme.configure({adapter: new SetupTest()});
