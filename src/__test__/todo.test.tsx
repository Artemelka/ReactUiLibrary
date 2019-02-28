import * as React from 'react';
import { shallow } from 'enzyme';

import { App } from '../app';

describe('Test ToDo component', () => {
    test('Rendering snapshot', () => {
        const testTitle = ['test', 'test2'];
        const output = shallow(<App title={testTitle} />);

        expect(output).toMatchSnapshot();
    });
});
