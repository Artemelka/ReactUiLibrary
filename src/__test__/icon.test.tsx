import React from 'react';
import { shallow } from 'enzyme';
import { IconModule } from '../app/elements';

const { Icon, IconNames} = IconModule;

describe('Test Icon', () => {
    test('Render snapshot', () => {
        const output = shallow(<Icon name="rocket" />);

        expect(output).toMatchSnapshot();
    });
    test('Expected className fas with props stack', () => {
        const output = shallow(<Icon name={IconNames.ROCKET} stack="fas" />);

        expect(output.hasClass('fas')).toBe(true);
    });
    test('Expected className fa without props stack', () => {
        const output = shallow(<Icon name={IconNames.ROCKET} />);

        expect(output.hasClass('fas')).toBe(false);
        expect(output.hasClass('fa')).toBe(true);
    });
    xtest('Render snapshot', () => {});
});
