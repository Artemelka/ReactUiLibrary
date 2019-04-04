import React from 'react';
import { shallow, mount } from 'enzyme';
import { Text } from '../app/elements';
import { ComponentType, HeadingType } from '../app/elements/text/constants';

const TEST_TEXT = 'test text';

describe('Test TextParagraph element', () => {
    test('Rendering snapshot H1', () => {
        const output = shallow(<Text type={ComponentType.HEADING} headingType={HeadingType.H1}>{TEST_TEXT}</Text>);

        expect(output.dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H2', () => {
        const output = shallow(<Text type={ComponentType.HEADING} headingType={HeadingType.H2}>{TEST_TEXT}</Text>);

        expect(output.dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H3', () => {
        const output = shallow(<Text type={ComponentType.HEADING} headingType={HeadingType.H3}>{TEST_TEXT}</Text>);

        expect(output.dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H4', () => {
        const output = shallow(<Text type={ComponentType.HEADING} headingType={HeadingType.H4}>{TEST_TEXT}</Text>);

        expect(output.dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H5', () => {
        const output = shallow(<Text type={ComponentType.HEADING} headingType={HeadingType.H5}>{TEST_TEXT}</Text>);

        expect(output.dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H6', () => {
        const output = shallow(<Text type={ComponentType.HEADING} headingType={HeadingType.H6}>{TEST_TEXT}</Text>);

        expect(output.dive()).toMatchSnapshot();
    });
    test('Rendering snapshot Paragraph', () => {
        const output = shallow(<Text type={ComponentType.PARAGRAPH}>{TEST_TEXT}</Text>);

        expect(output.dive()).toMatchSnapshot();
    });
    test('Rendering snapshot Span', () => {
        const output = shallow(<Text type={ComponentType.SPAN}>{TEST_TEXT}</Text>);

        expect(output.dive()).toMatchSnapshot();
    });
    test('Expect className modifier --upper', () => {
        const output = shallow(<Text upper type={ComponentType.PARAGRAPH}>{TEST_TEXT}</Text>);

        expect(output.dive().hasClass('Text--upper')).toBe(true);
    });
    test('Expect className modifier --bold', () => {
        const output = shallow(<Text bold type={ComponentType.PARAGRAPH}>{TEST_TEXT}</Text>);

        expect(output.dive().hasClass('Text--bold')).toBe(true);
    });
    test('Expect className modifier --light', () => {
        const output = shallow(<Text light type={ComponentType.PARAGRAPH}>{TEST_TEXT}</Text>);

        expect(output.dive().hasClass('Text--light')).toBe(true);
    });
    test('Expect console.warn with bold and light props', () => {
        const testMock = jest.fn();
        console.warn = testMock;
        const output = shallow(<Text light bold type={ComponentType.PARAGRAPH}>{TEST_TEXT}</Text>);

        expect(testMock).toHaveBeenCalled();

    });
    test('Expect light modifier with bold and light props', () => {
        const output = shallow(<Text light bold type={ComponentType.PARAGRAPH}>{TEST_TEXT}</Text>);

        expect(output.dive().hasClass('Text--light')).toBe(true);
    });
    test('Expect type paragraph without prop type', () => {
        const output = shallow(<Text>{TEST_TEXT}</Text>);

        expect(output.dive().hasClass('Text--paragraph')).toBe(true);
    });
});
