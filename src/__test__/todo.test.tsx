import * as React from 'react';
import { shallow } from 'enzyme';

import { ToDo } from '../app';

describe('Test ToDo component', () => {
    test('Rendering snapshot', () => {
        const testTitle = ['test', 'test2'];
        const output = shallow(<ToDo title={testTitle} />);

        expect(output).toMatchSnapshot();
    });
});
