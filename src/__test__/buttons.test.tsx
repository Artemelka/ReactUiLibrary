import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../app/elements';
import { keyCodes } from '../app/constants';

const BUTTON_TEXT = 'test button';

describe('Test Buttons', () => {
    describe('Default', () => {
        test('Rendering snapshot', () => {
            const output = shallow(<Button label={BUTTON_TEXT} />);

            expect(output).toMatchSnapshot();
        });
        test('Expect classNames modifier --disabled', () => {
            const output = shallow(<Button label={BUTTON_TEXT} disabled />);

            expect(output.hasClass('Button--disabled')).toBe(true);
        });
        test('Expect call onClick', () => {
            const mockOnClick = jest.fn();
            const output = shallow(<Button label={BUTTON_TEXT} onClick={mockOnClick} />);

            output.simulate('click');
            expect(mockOnClick).toHaveBeenCalled();
        });
        test('Prop onClick dont call with button disabled', () => {
            const mockOnClick = jest.fn();
            const output = shallow(<Button label={BUTTON_TEXT} disabled onClick={mockOnClick} />);

            output.simulate('click');

            expect(mockOnClick).not.toHaveBeenCalled();
        });
        test('Expect active class after event keydown with keyCode enter', () => {
            const mockOnClick = jest.fn();
            const output = shallow(<Button label={BUTTON_TEXT} onClick={mockOnClick} />);

            output.simulate('keydown', {keyCode: keyCodes.ENTER});
            expect(output.hasClass('Button--active')).toBe(true);
        });
        test('Expect call onClick after event keypress with code enter', () => {
            const mockOnClick = jest.fn();
            const output = shallow(<Button label={BUTTON_TEXT} onClick={mockOnClick} />);

            output.simulate('keypress', {keyCode: keyCodes.ENTER});
            expect(mockOnClick).toHaveBeenCalled();
        });
        test('Expect render children with prop icon', () => {
            const FAKE_TEXT = 'fake text';
            const output = shallow(<Button icon label={BUTTON_TEXT}>{FAKE_TEXT}</Button>);

            expect(output.find('.Button__content').text()).toEqual(FAKE_TEXT);
        });
    });
    describe('Icon', () => {
        test('Rendering snapshot', () => {
            const output = shallow(<Button.Icon iconName="plus" />);

            expect(output).toMatchSnapshot();
        });
    });
    describe('IconLabel', () => {
        test('Rendering snapshot', () => {
            const output = shallow(<Button.IconLabel iconName="plus" label={BUTTON_TEXT} />);

            expect(output).toMatchSnapshot();
        });
    });
});
