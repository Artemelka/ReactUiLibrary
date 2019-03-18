import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../app';

describe('Test App component', () => {
    test('Rendering snapshot', () => {
        const output = shallow(<App />);

        expect(output).toMatchSnapshot();
    });
});
