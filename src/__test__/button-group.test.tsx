import React from 'react';
import { shallow, mount } from 'enzyme';
import { ButtonGroup } from '../app/elements';

const testMockFirstButton = jest.fn();
const testMockSecondtButton = jest.fn();
const testMockThirdButton = jest.fn();
const buttonsProps = [
    {
        label: 'test 1',
        onClick: testMockFirstButton
    }, {
        label: 'test 2',
        onClick: testMockSecondtButton
    }, {
        label: 'test 2',
        onClick: testMockThirdButton
    }
];

describe('Test ButtonGroup', () => {
    test('Rendering Snapshot', () => {
        const wrapper = shallow(<ButtonGroup.Component buttons={buttonsProps} />);

        expect(wrapper).toMatchSnapshot();
    });
    test('Rendering Snapshot with separator', () => {
        const wrapper = shallow(
            <ButtonGroup.Component
                buttons={buttonsProps}
                separatorSize={ButtonGroup.SeparatorSize.MEDIUM}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
    test('expect round style in Button with prop round', () => {
        const wrapper = shallow(<ButtonGroup.Component buttons={buttonsProps} round/>);
        const buttonCollection = wrapper.find('Button');

        expect(buttonCollection.at(0).prop('roundLeft')).toBe(true);
        expect(buttonCollection.at(1).prop('roundLeft')).toBe(false);
        expect(buttonCollection.at(1).prop('roundRight')).toBe(false);
        expect(buttonCollection.at(2).prop('roundRight')).toBe(true);
    });
});
