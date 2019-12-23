import { Button, ButtonsGroup, IconModule } from '../../../../../elements';
import { ButtonIconLabelProps, ButtonIconProps, ButtonProps } from '../../../../../elements/buttons/types';
import { ButtonGroupItems, ExampleParams } from './types';
import { logger } from '../../../../../utils';

const { IconNames } = IconModule;

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

export const examplesParams: Array<ExampleParams> = [
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

export const buttonsGroupProps: Array<ButtonProps | ButtonIconLabelProps> = [
    {
        label: 'first-button',
        iconName: IconNames.PLUS
    }, {
        accent: true,
        label: 'second-button',
        iconName: IconNames.PHONE
    }, {
        label: 'third-button',
        iconName: IconNames.TRASH
    }
];
export const buttonGroupItems: Array<ButtonGroupItems> = [
    {
        props: { buttonComponent: Button },
        title: 'button-group'
    }, {
        props: { buttonComponent: Button, separatorSize: ButtonsGroup.SeparatorSize.MEDIUM },
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
