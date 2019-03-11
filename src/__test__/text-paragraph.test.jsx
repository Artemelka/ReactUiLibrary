import React from 'react';
import { shallow } from 'enzyme';
import { TextParagraph } from "../app/elements";

const TEST_TEXT = 'test text';

describe('Test TextParagraph element', () => {
    test('Rendering snapshot', () => {
        const output = shallow(<TextParagraph>{TEST_TEXT}</TextParagraph>);

        expect(output).toMatchSnapshot();
    });
    test('Expect className modifier --upper', () => {
        const output = shallow(<TextParagraph upper >{TEST_TEXT}</TextParagraph>);

        expect(output.find('.Text-paragraph--upper').exists()).toBe(true);
    });
    test('Expect className modifier --bold', () => {
        const output = shallow(<TextParagraph bold >{TEST_TEXT}</TextParagraph>);

        expect(output.find('.Text-paragraph--bold').exists()).toBe(true);
    });
    test('Expect className modifier --light', () => {
        const output = shallow(<TextParagraph light >{TEST_TEXT}</TextParagraph>);

        expect(output.find('.Text-paragraph--light').exists()).toBe(true);
    });
    test('Expect console.warn with bold and light props', () => {
        const testMock = jest.fn();
        console.warn = testMock;
        const output = shallow(<TextParagraph light bold >{TEST_TEXT}</TextParagraph>);

        expect(testMock).toHaveBeenCalled();

    });
    test('Expect light modifier with bold and light props', () => {
        const output = shallow(<TextParagraph light bold >{TEST_TEXT}</TextParagraph>);

        expect(output.find('.Text-paragraph--light').exists()).toBe(true);
    });
});