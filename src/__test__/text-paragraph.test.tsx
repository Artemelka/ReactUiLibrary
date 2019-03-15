import React from 'react';
import { shallow } from 'enzyme';
import { Text } from "../app/elements";

const TEST_TEXT = 'test text';

describe('Test TextParagraph element', () => {
    xtest('Rendering snapshot', () => {
        const output = shallow(<Text>{TEST_TEXT}</Text>);

        expect(output).toMatchSnapshot();
    });

    xtest('Expect className modifier --upper', () => {
        const output = shallow(<Text upper >{TEST_TEXT}</Text>);

        expect(output.find('.Text-paragraph--upper').exists()).toBe(true);
    });

    xtest('Expect className modifier --bold', () => {
        const output = shallow(<Text bold >{TEST_TEXT}</Text>);

        expect(output.find('.Text-paragraph--bold').exists()).toBe(true);
    });

    xtest('Expect className modifier --light', () => {
        const output = shallow(<Text light >{TEST_TEXT}</Text>);

        expect(output.find('.Text-paragraph--light').exists()).toBe(true);
    });

    xtest('Expect console.warn with bold and light props', () => {
        const testMock = jest.fn();
        console.warn = testMock;
        const output = shallow(<Text light bold >{TEST_TEXT}</Text>);

        expect(testMock).toHaveBeenCalled();

    });

    xtest('Expect light modifier with bold and light props', () => {
        const output = shallow(<Text light bold >{TEST_TEXT}</Text>);

        expect(output.find('.Text-paragraph--light').exists()).toBe(true);
    });
});