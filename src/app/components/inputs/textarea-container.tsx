import React, { Component, SyntheticEvent } from 'react';
import { Textarea } from '../../elements';
import { translate } from '../../../services/translate';

const ERROR_MESSAGE_KEY = 'input-error-no-empty';
const ERROR_DEFAULT_MESSAGE_KEY = 'input-error-max-length';
interface Props {
    darkTheme?: boolean;
    disabled?: boolean;
    id: string;
    maxlength?: number;
    onChange: (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => void;
    placeholder?: string;
    readonly?: boolean;
    rows?: number;
    value?: string;
}
type State = {
    error: boolean,
    errorMessage: string,
    isPristine: boolean,
    value: string
};

export class TextareaContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: '',
            isPristine: true,
            value: props.value || ''
        };
    }

    setErrorState = () => this.setState({
        error: true,
        errorMessage: translate(ERROR_MESSAGE_KEY)
    });

    changeState = (value: string) => this.setState((state) => ({
        error: state.error ? false : state.error,
        errorMessage: '',
        isPristine: false,
        value
    }));

    handleBlur = () => {
        const { isPristine, value } = this.state;
        if (!(value.length || isPristine)) {
            this.setErrorState();
        }
    };

    handleChange = (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => {
        this.changeState(value);
        this.props.onChange(event, value);
    };

    render() {
        const { id, ...restProps } = this.props;
        const { error, errorMessage, value } = this.state;

        return (
            <Textarea
                {...restProps}
                defaultErrorMessage={translate(ERROR_DEFAULT_MESSAGE_KEY)}
                error={error}
                errorMessage={errorMessage}
                id={id}
                name={id}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                value={value}
            />
        );
    }
}
