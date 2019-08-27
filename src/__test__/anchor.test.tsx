import React from 'react';
import { shallow, mount } from 'enzyme';
import { Anchor } from '../app/elements';

describe('Anchor test', () => {
    test('Render snapshot anchor', () => {
        const output = shallow(<Anchor href="test">test</Anchor>);

        expect(output).toMatchSnapshot();
    });

    test('Render snapshot pseudoLink', () => {
        const output = shallow(<Anchor>test</Anchor>);

        expect(output).toMatchSnapshot();
    });

    test('Expect call onClick', () => {
        const testMock = jest.fn();
        const output = mount(<Anchor onClick={testMock}>test</Anchor>);

        output.simulate('click');

        expect(testMock).toHaveBeenCalled();
    });

    test('Expect style active with prop active', () => {
        const output = mount(<Anchor active>test</Anchor>);


        expect(output.find('.Anchor').hasClass('Anchor--active')).toEqual(true);
    });

    test('Expect style disabled with prop disabled', () => {
        const output = mount(<Anchor disabled>test</Anchor>);


        expect(output.find('.Anchor').hasClass('Anchor--disabled')).toEqual(true);
    });

    test('Expect attr target with prop newPage', () => {
        const output = mount(<Anchor href="test" newPage>test</Anchor>);


        expect(output.find('.Anchor').props().target).toEqual('_blank');
    });

    test('Expect tag name "a" with prop href', () => {
        const output = mount(<Anchor href="test">test</Anchor>);


        expect(output.find('.Anchor').type()).toEqual('a');
    });

    test('Expect tag name "span" without prop href', () => {
        const output = mount(<Anchor >test</Anchor>);


        expect(output.find('.Anchor').type()).toEqual('span');
    });
});
