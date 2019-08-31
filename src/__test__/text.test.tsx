import React from 'react';
import { shallow, mount } from 'enzyme';
import { Text } from '../app/elements';

const TEST_TEXT = 'test text';

describe('Test TextParagraph element', () => {
    test('Rendering snapshot H1', () => {
        const output = shallow(<Text.H1>{TEST_TEXT}</Text.H1>);

        expect(output.dive().dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H2', () => {
        const output = shallow(<Text.H2>{TEST_TEXT}</Text.H2>);

        expect(output.dive().dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H3', () => {
        const output = shallow(<Text.H3>{TEST_TEXT}</Text.H3>);

        expect(output.dive().dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H4', () => {
        const output = shallow(<Text.H4>{TEST_TEXT}</Text.H4>);

        expect(output.dive().dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H5', () => {
        const output = shallow(<Text.H5>{TEST_TEXT}</Text.H5>);

        expect(output.dive().dive()).toMatchSnapshot();
    });
    test('Rendering snapshot H6', () => {
        const output = shallow(<Text.H6>{TEST_TEXT}</Text.H6>);

        expect(output.dive().dive()).toMatchSnapshot();
    });
    test('Rendering snapshot Paragraph', () => {
        const output = shallow(<Text.Paragraph>{TEST_TEXT}</Text.Paragraph>);

        expect(output.dive().dive()).toMatchSnapshot();
    });
    test('Rendering snapshot Span', () => {
        const output = shallow(<Text.Span>{TEST_TEXT}</Text.Span>);

        expect(output.dive().dive()).toMatchSnapshot();
    });
    test('Expect className modifier --upper', () => {
        const output = shallow(<Text.Paragraph upper>{TEST_TEXT}</Text.Paragraph>);

        expect(output.dive().hasClass('Text--upper')).toBe(true);
    });
    test('Expect className modifier --bold', () => {
        const output = shallow(<Text.Paragraph bold>{TEST_TEXT}</Text.Paragraph>);

        expect(output.dive().hasClass('Text--bold')).toBe(true);
    });
    test('Expect className modifier --light', () => {
        const output = shallow(<Text.Paragraph light>{TEST_TEXT}</Text.Paragraph>);

        expect(output.dive().hasClass('Text--light')).toBe(true);
    });
    test('Expect console.warn with bold and light props', () => {
        const testMock = jest.fn();
        console.warn = testMock;
        mount(<Text.Paragraph light bold>{TEST_TEXT}</Text.Paragraph>);

        expect(testMock).toHaveBeenCalled();

    });
    test('Expect light modifier with bold and light props', () => {
        const output = shallow(<Text.Paragraph light bold>{TEST_TEXT}</Text.Paragraph>);

        expect(output.dive().hasClass('Text--light')).toBe(true);
    });
});
