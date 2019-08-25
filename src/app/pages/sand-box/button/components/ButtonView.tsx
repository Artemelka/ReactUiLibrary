import React, { Component, ComponentClass, Fragment } from 'react';
import { Button, IconModule } from '../../../../elements';
import { TranslateComponent } from '../../../../elements/translate';
import { SandboxLayout } from '../../../../components';
import { logger } from '../../utils';
import { ButtonProps } from '../../../../elements/buttons/button';
import { ButtonIconProps } from '../../../../elements/buttons/ButtonIcon';
import { ButtonIconLabelProps } from '../../../../elements/buttons/ButtonIconLabel';

const { BlockItems, Item } = SandboxLayout;
const { IconNames } = IconModule;

interface ExampleButtonIconProps extends ButtonIconProps {
    label?: string;
}
interface ExampleParams {
    heading: string;
    props: Array<ButtonProps | ExampleButtonIconProps | ButtonIconLabelProps>;
    type?: string;
}

const getButtonType = (type: string) => type === 'Icon' ? Button.Icon : Button.IconLabel;
const buttonProps: Array<ButtonProps> = [
    { label: 'button' },
    {
        disabled: true,
        label: 'button-disabled'
    }, {
        accent: true,
        label: 'button-with-onClick',
        onClick: logger('buttonClick')
    }, {
        accent: true,
        disabled: true,
        label: 'button-with-disable-onClick',
        onClick: logger('buttonClick disable')
    }
];
const buttonSizeProps: Array<ButtonProps> = [
    {
        label: 'button-big',
        onClick: logger('buttonClick big'),
        size: 'big'
    }, {
        label: 'button-default',
        onClick: logger('buttonClick default')
    }, {
        label: 'button-small',
        onClick: logger('buttonClick small'),
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
        label: 'button-icon-label-plus',
        onClick: logger('button IconLabel Click plus'),
        size: 'big'
    }, {
        iconName: IconNames.TRASH_ALT,
        label: 'button-icon-label-trash',
        onClick: logger('button IconLabel Click trash-alt')
    }, {
        iconName: IconNames.TRASH_ALT,
        label: 'button-icon-label-disabled',
        disabled: true,
        onClick: logger('button IconLabel Click trash-alt'),
        size: 'small'
    }
];
const examplesParams: Array<ExampleParams> = [
    {
        heading: 'button-default-accent',
        props: buttonProps
    }, {
        heading: 'button-sizes',
        props: buttonSizeProps
    }, {
        heading: 'button-sizes-accent',
        props: buttonSizeProps.map(props => ({...props, accent: true}))
    }, {
        heading: 'button-icon',
        props: buttonIconProps,
        type: 'Icon'
    }, {
        heading: 'button-icon-label',
        props: buttonIconLabelProps,
        type: 'IconLabel'
    }, {
        heading: 'button-icon-label-accent',
        props: buttonIconLabelProps.map(props => ({...props, accent: true})),
        type: 'IconLabel'
    }
];

export const ButtonView = () => (
    <Fragment>
        {examplesParams.map(({ heading, props, type }: ExampleParams, index: number) => (
            <BlockItems key={`${index}_${heading}`}>
                <h3>
                    <TranslateComponent translateKey={heading}/>
                </h3>
                {props.map(({label, ...prop}, innerIndex) => {
                    const Component: ComponentClass<any> = type ? getButtonType(type) : Button;

                    return (
                        <Item inline key={`${index}_${heading}_${innerIndex}`}>
                            <Component
                                {...prop}
                                {...(label ? { label: <TranslateComponent translateKey={label}/> } : {})}
                            />
                        </Item>
                    );
                })}
            </BlockItems>
        ))}
    </Fragment>
);
