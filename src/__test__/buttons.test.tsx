import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../app/elements';

describe('Test Buttons', () => {
    test('Rendering snapshot', () => {
        const output = shallow(<Button label="test button" />);

        expect(output).toMatchSnapshot();
    });
    test('Expect classNames modifier --disabled', () => {
        const output = shallow(<Button label="test button" disabled />);

        expect(output.hasClass('Button--disabled')).toBe(true);
    });
    test('Expect call onClick', () => {
        const mockOnClick = jest.fn();
        const output = shallow(<Button label="test button" onClick={mockOnClick} />);

        output.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });
    test('onClick dont call with button disabled', () => {
        const mockOnClick = jest.fn();
        const output = shallow(<Button label="test button" disabled onClick={mockOnClick} />);

        output.simulate('click');

        expect(mockOnClick).not.toHaveBeenCalled();
    });
});
