import React, { ComponentType } from 'react';
import { SandboxLayout } from '../../../../components';
import { Button, ButtonGroup, IconModule, Text } from '../../../../elements';
import { TranslateComponent, translate } from '../../../../../services/translate';
import { ButtonProps } from '../../../../elements/buttons/Button';
import { ButtonIconLabelProps } from '../../../../elements/buttons/ButtonIconLabel';
import { logger } from '../../utils';

const { BlockItems, Item } = SandboxLayout;

type Props = {
    buttonComponent: ComponentType<any>,
    separatorSize?: Symbol,
    round?: boolean
};
type ButtonGroupItems = {
    props: Props,
    title: string
};

const buttonsProps: Array<ButtonProps | ButtonIconLabelProps> = [
    {
        label: 'first-button',
        iconName: IconModule.IconNames.PLUS
    }, {
        accent: true,
        label: 'second-button',
        iconName: IconModule.IconNames.PHONE
    }, {
        label: 'third-button',
        iconName: IconModule.IconNames.TRASH
    }
];
const buttonGroupItems: Array<ButtonGroupItems> = [
    {
        props: { buttonComponent: Button },
        title: 'button-group'
    }, {
        props: { buttonComponent: Button, separatorSize: ButtonGroup.SeparatorSize.MEDIUM },
        title: 'button-group-separator-medium'
    }, {
        props: { buttonComponent: Button, round: true },
        title: 'button-group-rounded'
    }, {
        props: {buttonComponent: Button.IconLabel},
        title: 'button-group-icon-label'
    }, {
        props: {buttonComponent: Button.Icon},
        title: 'button-group-icon'
    }
];

export const ButtonGroupView = () => (
    <BlockItems>
        {buttonGroupItems.map((
            { props: { buttonComponent: Component, ...restProps }, title }: ButtonGroupItems,
            index: number
        ) => (
            <Item key={title + index}>
                <Text.H5>
                    <TranslateComponent translateKey={title}/>
                </Text.H5>
                <ButtonGroup.Component {...restProps}>
                    {buttonsProps.map(({label, ...rest}, index) => (
                        <Component
                            key={index + title}
                            {...rest}
                            label={translate(label)}
                            onClick={logger(`click ${label}`)}
                        />
                    ))}
                </ButtonGroup.Component>
            </Item>
        ))}
    </BlockItems>
);
