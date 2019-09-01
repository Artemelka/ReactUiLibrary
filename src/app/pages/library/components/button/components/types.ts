import { ComponentType } from 'react';
import { ButtonIconLabelProps, ButtonIconProps, ButtonProps } from '../../../../../elements/buttons/types';

type Props = {
    buttonComponent: ComponentType<any>,
    separatorSize?: Symbol,
    round?: boolean
};
export type ButtonGroupItems = {
    props: Props,
    title: string
};

interface ExampleButtonIconProps extends ButtonIconProps { label?: string; }

export type ExampleParams = {
    heading: string,
    props: Array<ButtonProps | ExampleButtonIconProps | ButtonIconLabelProps>,
    type?: string
};
