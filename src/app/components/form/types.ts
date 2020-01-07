import { Config, FieldSubscription, FormState, FormSubscription } from 'final-form';
import { SyntheticEvent } from 'react';

export type State = Record<string, any> & {
    formState?: FormState<Record<string, string>>
};
export type FormChildrenProps = {
    handleBlur: (event: SyntheticEvent<any>, value: string, name: string) => void,
    handleChange: (event: SyntheticEvent<any>, value: string, name: string) => void,
    handleClearClick: () => void,
    handleFocus: (event: SyntheticEvent<any>, value: string, name: string) => void,
    state: State
};
type Subscription = {
    form: FormSubscription,
    fields: FieldSubscription
};
export interface FormProps {
    children: (props: FormChildrenProps) => JSX.Element;
    className?: string;
    formConfig: Config;
    subscription: Subscription;
    fieldsName: Array<string>;
}
