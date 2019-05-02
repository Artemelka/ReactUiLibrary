import React, {Component, createRef, RefObject, SyntheticEvent} from 'react';
import classNames from 'classnames/bind';
import { Button, IconModule } from '../../index';

const style = require('./Input.less');
const cn = classNames.bind(style);

interface Props {
    disabled?: boolean;
    onChange?: (event: SyntheticEvent<HTMLInputElement>, value: string) => void;
}
interface State {
    focused: boolean;
    value: string;
}
export class Input extends Component<Props, State> {
    static defaultProps = {
        onChange: () => false
    };

    state = {
        focused: false,
        value: ''
    };

    handleBlur = () => this.setState({focused: false});

    handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        this.setState({value});
        this.props.onChange(event, value);
    };

    handleClearClick = () => {
        this.setState({value: ''});
        this.input.current.focus();
        this.props.onChange(null, '');
    };

    handleFocus = () => this.setState({focused: true});

    input: RefObject<HTMLInputElement> = createRef();

    render() {
        const { focused, value } = this.state;
        const { disabled } = this.props;
        return (
            <div
                className={cn('Input', {'Input--focused': focused})}
            >
                <input
                    className={cn('Input__element', {'Input__element--disabled': disabled})}
                    disabled={disabled}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    value={value}
                    ref={this.input}
                />
                {Boolean(value) &&
                    <div className={cn('Input__clear-button')}>
                        <Button.Icon
                            disabled={disabled}
                            iconName={IconModule.IconNames.BACKSPACE}
                            onClick={this.handleClearClick}
                        />
                    </div>
                }
            </div>
        );
    }
}
