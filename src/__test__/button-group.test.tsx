import React from 'react';
import { shallow } from 'enzyme';
import { ButtonsGroup, Button } from '../app/elements';

const GROUP_ITEM_MODIFIER = 'Button-group__item--separator-medium';
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
        label: 'test 3',
        onClick: testMockThirdButton
    }
];

describe('Test ButtonGroup', () => {
    test('Rendering Snapshot', () => {
        const wrapper = shallow(
            <ButtonsGroup.Component>
                {buttonsProps.map((props, index) => <Button key={index} {...props}/>)}
            </ButtonsGroup.Component>
        );
        const groupItemCollection = wrapper.find('.Button-group__item');

        expect(wrapper).toMatchSnapshot();
        expect(groupItemCollection.at(1).hasClass(GROUP_ITEM_MODIFIER)).toBe(false);
    });
    test('Rendering Snapshot with separator', () => {
        const wrapper = shallow(
            <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                {buttonsProps.map((props, index) => <Button key={index} {...props}/>)}
            </ButtonsGroup.Component>
        );
        const groupItemCollection = wrapper.find('.Button-group__item');

        expect(wrapper).toMatchSnapshot();
        expect(groupItemCollection.at(0).hasClass(GROUP_ITEM_MODIFIER)).toBe(false);
        expect(groupItemCollection.at(1).hasClass(GROUP_ITEM_MODIFIER)).toBe(true);
    });
    test('expect round style in Button with prop round', () => {
        const wrapper = shallow(
            <ButtonsGroup.Component round>
                {buttonsProps.map((props, index) => <Button key={index} {...props}/>)}
            </ButtonsGroup.Component>
        );
        const buttonCollection = wrapper.find('Button');

        expect(buttonCollection.at(0).prop('roundLeft')).toBe(true);
        expect(buttonCollection.at(1).prop('roundLeft')).toBe(false);
        expect(buttonCollection.at(1).prop('roundRight')).toBe(false);
        expect(buttonCollection.at(2).prop('roundRight')).toBe(true);
    });
});
