import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../app/elements';

describe('Test Icon', () => {
    test('Render snapshot', () => {
        const output = shallow(<Icon name="rocket" />);

        expect(output).toMatchSnapshot();
    });
    test('Expected className fas with props stack', () => {
        const output = shallow(<Icon name="rocket" stack="fas" />);

        expect(output.hasClass('fas')).toBe(true);
    });
    test('Expected className fa without props stack', () => {
        const output = shallow(<Icon name="rocket" />);

        expect(output.hasClass('fas')).toBe(false);
        expect(output.hasClass('fa')).toBe(true);
    });
    xtest('Render snapshot', () => {});
});
