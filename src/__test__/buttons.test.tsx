import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../app/elements';

const BUTTON_TEXT = 'test button';

describe('Test Buttons', () => {
    test('Rendering snapshot', () => {
        const output = shallow(<Button>{BUTTON_TEXT}</Button>);

        expect(output).toMatchSnapshot();
    });
    test('Expect classNames modifier --disabled', () => {
        const output = shallow(<Button disabled>{BUTTON_TEXT}</Button>);

        expect(output.hasClass('Button--disabled')).toBe(true);
    });
    test('Expect call onClick', () => {
        const mockOnClick = jest.fn();
        const output = shallow(<Button onClick={mockOnClick}>{BUTTON_TEXT}</Button>);

        output.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });
    test('onClick dont call with button disabled', () => {
        const mockOnClick = jest.fn();
        const output = shallow(<Button disabled onClick={mockOnClick}>{BUTTON_TEXT}</Button>);

        output.simulate('click');

        expect(mockOnClick).not.toHaveBeenCalled();
    });
});
