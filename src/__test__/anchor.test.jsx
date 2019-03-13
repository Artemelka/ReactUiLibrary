import React from 'react';
import { shallow, mount } from 'enzyme';
import { Anchor } from '../app/elements';

describe('Anchor test', () => {
    test('Render snapshot anchor', () => {
        const output = shallow(<Anchor href="test" label="test"/>);

        expect(output).toMatchSnapshot();
    });

    test('Render snapshot pseudoLink', () => {
        const output = shallow(<Anchor label="test"/>);

        expect(output).toMatchSnapshot();
    });

    test('Expect call onClick', () => {
        const testMock = jest.fn();
        const output = mount(<Anchor label="test" onClick={testMock}/>);

        output.simulate('click');

        expect(testMock).toHaveBeenCalled();
    });

    test('Expect style active with prop active', () => {
        const output = mount(<Anchor label="test" active/>);


        expect(output.find('.Anchor').hasClass('Anchor--active')).toEqual(true);
    });

    test('Expect style disabled with prop disabled', () => {
        const output = mount(<Anchor label="test" disabled/>);


        expect(output.find('.Anchor').hasClass('Anchor--disabled')).toEqual(true);
    });

    test('Expect attr target with prop newPage', () => {
        const output = mount(<Anchor href="test" label="test" newPage/>);


        expect(output.find('.Anchor').props().target).toEqual('_blank');
    });

    test('Expect tag name "a" with prop href', () => {
        const output = mount(<Anchor href="test" label="test" />);


        expect(output.find('.Anchor').type()).toEqual('a');
    });

    test('Expect tag name "span" without prop href', () => {
        const output = mount(<Anchor label="test" />);


        expect(output.find('.Anchor').type()).toEqual('span');
    });
});