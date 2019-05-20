import React, { Fragment, ComponentClass } from 'react';
import { SandBox } from '../sand-box';
import { Button, IconModule } from '../../../elements';
import { ButtonProps } from '../../../elements/buttons/button';
import { ButtonIconProps } from '../../../elements/buttons/ButtonIcon';
import { ButtonIconLabelProps } from '../../../elements/buttons/ButtonIconLabel';
import { logger } from '../utils';

const { IconNames } = IconModule;
const buttonProps: Array<ButtonProps> = [
    {
        label: 'Button'
    }, {
        label: 'Button disabled',
        disabled: true
    }, {
        accent: true,
        label: 'Button with onClick',
        onClick: logger('buttonClick')
    }, {
        accent: true,
        label: 'Button with disable onClick',
        disabled: true,
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
        iconName: IconNames.TRASH_ALT,
        disabled: true,
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

type Props = ButtonProps | ButtonIconProps | ButtonIconLabelProps;
interface ExampleParams {
    heading: string;
    props: Array<Props>;
    mapCallback: (props: Props, index: number) => any;
}

const getButtonType = (type: string) => type === 'Icon' ? Button.Icon : Button.IconLabel;

const renderButtonExample = (prefix: string, type?: string) =>
    (props: Props, index: number) => {
        const Component: ComponentClass<any> = type ? getButtonType(type) : Button;

        return (
            <div style={{display: 'inline-block', padding: '0 10px'}} key={index + prefix}>
                <Component {...props} />
            </div>
        );
    };

const examplesParams: Array<ExampleParams> = [
    {
        heading: 'Button default & accent',
        props: buttonProps,
        mapCallback: renderButtonExample('a')
    }, {
        heading: 'Button sizes',
        props: buttonSizeProps,
        mapCallback: renderButtonExample('b')
    }, {
        heading: 'Button.Icon',
        props: buttonIconProps,
        mapCallback: renderButtonExample('c', 'Icon')
    }, {
        heading: 'Button.IconLabel',
        props: buttonIconLabelProps,
        mapCallback: renderButtonExample('d', 'IconLabel')
    }
];

const getExampleItem = (params: ExampleParams) => () => {
    const { heading, mapCallback, props } = params;

    return (
        <Fragment>
            <h3>{heading}</h3>
            {props.map(mapCallback)}
        </Fragment>
    );
};
const sandBoxItems = examplesParams.map((params: ExampleParams) => getExampleItem(params));

export const ButtonSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
