import { Config, FieldSubscription, FormState, FormSubscription } from 'final-form';
import { SyntheticEvent } from 'react';

export type State = Record<string, any> & {
    formState?: FormState<Record<string, string>>
};
export type FormChildrenProps = {
    handleBlur: (event: SyntheticEvent, name: string) => void,
    handleChange: (event: SyntheticEvent, value: string, name: string) => void,
    handleClearClick: () => void,
    handleFocus: (event: SyntheticEvent, name: string) => void,
    state: State
};
type Subscription = {
    form: FormSubscription,
    fields: FieldSubscription
};
export interface FormProps {
    children: (props: FormChildrenProps) => JSX.Element;
    formConfig: Config;
    subscription: Subscription;
    fieldsName: Array<string>;
}
