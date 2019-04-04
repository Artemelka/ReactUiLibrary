import React from 'react';
import { shallow } from 'enzyme';
import { SandBox } from '../app/pages/sand-box/sand-box';

const items = [
    'test item'
];

describe('Test SandBox', () => {
    test('Rendering snapshot', () => {
        const wrapper = shallow(<SandBox items={items}/>);

        expect(wrapper).toMatchSnapshot();
    });
    test('Expect className modifier bg-white with prop bgWhite', () => {
        const wrapper = shallow(<SandBox bgWhite items={items}/>);

        expect(wrapper.find('.Sandbox__item')
            .hasClass('Sandbox__item--bg-white'))
            .toBe(true);
    });
});
