import React, { Component, createRef, KeyboardEvent, RefObject } from 'react';
import classNames from 'classnames';
import { IconModule } from '../../icon';
import { keyCodes } from '../../../../services';
import './Checkbox.less';
import './Toggle.less';

export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    id: string;
    name: string;
    onChange?: () => void;
    toggle?: boolean;
    withRef?: (ref: HTMLElement) => void;
}

const iconProps = {
    fontSize: 18,
    name: IconModule.IconNames.ANGLE.DOWN,
    size: '2x',
    stack: 'fas'
};
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];

export class Checkbox extends Component<CheckboxProps> {
    static defaultProps = {
        checked: false,
        onChange: () => {},
        withRef: (ref: HTMLElement) => ref
    };

    componentDidMount() {
        this.props.withRef(this.label.current);
    }

    label: RefObject<HTMLLabelElement> = createRef();
    input: RefObject<HTMLInputElement> = createRef();

    handleChange = () => {
        const { disabled, onChange } = this.props;

        if (!disabled) {
            onChange();
        }
    };

    handleFocus = () => {
        // this.input.current.blur();
        this.label.current.focus();
    };

    handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
        const {keyCode, which } = event;
        const code = keyCode || which;

        if (targetKeyCodes.includes(code)) {
            this.handleChange();
        }
    };

    render() {
        const { checked, disabled, id, name, toggle } = this.props;
        const checkboxStyle = classNames('Checkbox', {
            'Checkbox--checked': checked,
            'Checkbox--disabled': disabled
        });
        const toggleStyle = classNames('Toggle', {
            'Toggle--checked': checked,
            'Toggle--disabled': disabled
        });
        const inputClasses = toggle ? 'Toggle__input' : 'Checkbox__input';
        const hasIcon = !toggle && checked;

        return (
            <label
                className={toggle ? toggleStyle : checkboxStyle}
                onKeyPress={this.handleKeyPress}
                tabIndex={disabled ? -1 : 0}
                ref={this.label}
            >
                <input
                    checked={checked}
                    className={classNames(inputClasses)}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    tabIndex={-1}
                    ref={this.input}
                    type="checkbox"
                    value={id}
                />
                {hasIcon &&
                    <span className={classNames('Checkbox__icon')}>
                        <IconModule.Icon {...iconProps}/>
                    </span>
                }
            </label>
        );
    }
}
