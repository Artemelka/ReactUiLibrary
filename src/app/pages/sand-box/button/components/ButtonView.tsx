import React, { ComponentClass, Fragment } from 'react';
import { Button, IconModule } from '../../../../elements';
import { SandboxLayout } from '../../../../components';
import { logger } from '../../utils';
import { ButtonProps } from '../../../../elements/buttons/button';
import { ButtonIconProps } from '../../../../elements/buttons/ButtonIcon';
import { ButtonIconLabelProps } from '../../../../elements/buttons/ButtonIconLabel';

interface ExampleParams {
    heading: string;
    props: Array<ButtonProps | ButtonIconProps | ButtonIconLabelProps>;
    prefix: string;
    type?: string;
}

const { BlockItems, Item } = SandboxLayout;
const { IconNames } = IconModule;
const buttonProps: Array<ButtonProps> = [
    {
        label: 'Button'
    }, {
        disabled: true,
        label: 'Button disabled'
    }, {
        accent: true,
        label: 'Button with onClick',
        onClick: logger('buttonClick')
    }, {
        accent: true,
        disabled: true,
        label: 'Button with disable onClick',
        onClick: logger('buttonClick disable')
    }
];
const buttonSizeProps: Array<ButtonProps> = [
    {
        label: 'Button big',
        size: 'big'
    }, {
        label: 'Button default'
    }, {
        label: 'Button small',
        size: 'small'
    }
];
const buttonIconProps: Array<ButtonIconProps> = [
    {
        iconName: IconNames.PLUS,
        onClick: logger('buttonClick plus')
    }, {
        iconName: IconNames.TRASH_ALT,
        onClick: logger('buttonClick trash-alt')
    }, {
        disabled: true,
        iconName: IconNames.TRASH_ALT,
        onClick: logger('buttonClick trash-alt')
    }
];
const buttonIconLabelProps: Array<ButtonIconLabelProps> = [
    {
        iconName: IconNames.PLUS,
        label: 'Button.IconLabel',
        onClick: logger('button IconLabel Click plus'),
        size: 'big'
    }, {
        iconName: IconNames.TRASH_ALT,
        label: 'Button.IconLabel trash',
        onClick: logger('button IconLabel Click trash-alt')
    }, {
        iconName: IconNames.TRASH_ALT,
        label: 'Button.IconLabel disabled',
        disabled: true,
        onClick: logger('button IconLabel Click trash-alt'),
        size: 'small'
    }
];
const examplesParams: Array<ExampleParams> = [
    {
        heading: 'Button default & accent',
        props: buttonProps,
        prefix: 'a'
    }, {
        heading: 'Button sizes',
        props: buttonSizeProps,
        prefix: 'b'
    }, {
        heading: 'Button.Icon',
        props: buttonIconProps,
        prefix: 'c',
        type: 'Icon'
    }, {
        heading: 'Button.IconLabel',
        props: buttonIconLabelProps,
        prefix: 'd',
        type: 'IconLabel'
    }
];

const getButtonType = (type: string) => type === 'Icon' ? Button.Icon : Button.IconLabel;

export const ButtonView = () => (
    <Fragment>
        {examplesParams.map(({ heading, prefix, props, type }: ExampleParams) => (
            <BlockItems>
                <h3>{heading}</h3>
                {props.map((prop, index) => {
                    const Component: ComponentClass<any> = type ? getButtonType(type) : Button;

                    return (
                        <Item inline key={index + prefix}>
                            <Component {...prop} />
                        </Item>
                    );
                })}
            </BlockItems>
        ))}
    </Fragment>
);
