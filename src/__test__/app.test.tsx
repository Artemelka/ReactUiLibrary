import React from 'react';
import { Router} from 'react-router';
import { createBrowserHistory } from 'history';
import { shallow } from 'enzyme';
import { App } from '../app';

describe('Test App component', () => {
    test('Rendering snapshot', () => {
        const output = shallow(<Router history={createBrowserHistory()}><App /></Router>);

        expect(output.dive().dive().dive()).toMatchSnapshot();
    });
});
