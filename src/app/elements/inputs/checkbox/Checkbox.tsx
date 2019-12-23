import React, { Component, KeyboardEvent } from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../../icon';
import { keyCodes } from '../../../constants';
import { CheckboxProps, CheckboxState } from './types';
import checkboxStyle from './Checkbox.less';
import toggleStyle from './Toggle.less';

const checkboxClassNames = classNames.bind(checkboxStyle);
const toggleClassNames = classNames.bind(toggleStyle);

const iconProps = {
    fontSize: 18,
    name: IconModule.IconNames.ANGLE.DOWN,
    size: '2x',
    stack: 'fas'
};

export class Checkbox extends Component<CheckboxProps, CheckboxState> {
    static defaultProps = {
        checked: false,
        onChange: () => false,
        onCreateRef: () => false
    };

    state = {
        isActive: false
    };

    setActive = () => {
        this.setState({isActive: true});
        this.input.focus();
    };

    input: HTMLInputElement;

    handleBlur = () => this.setState({isActive: false});

    handleChange = () => {
        const { disabled, onChange } = this.props;

        if (!disabled) {
            onChange();
        }
    };

    handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
        const {keyCode, which } = event;
        const code = keyCode || which;

        if (keyCodes.ENTER === code) {
            this.setActive();
            this.handleChange();
        }
    };

    handleRef = (ref: HTMLInputElement) => {
        this.input = ref;
        this.props.onCreateRef(this.input);

    };

    render() {
        const { checked, disabled, id, indeterminate, name, radio, toggle } = this.props;
        const { isActive } = this.state;
        const checkboxStyle = checkboxClassNames('Checkbox', {
            'Checkbox--checked': checked,
            'Checkbox--disabled': disabled,
            'Checkbox--focused': isActive,
            'Checkbox--radio': radio
        });
        const toggleStyle = toggleClassNames('Toggle', {
            'Toggle--checked': checked,
            'Toggle--disabled': disabled,
            'Toggle--focused': isActive
        });
        const inputClasses = toggle
            ? toggleClassNames('Toggle__input')
            : checkboxClassNames('Checkbox__input');
        const inputType = radio ? 'radio' : 'checkbox';
        const hasIcon = !toggle && checked;

        return (
            <label
                className={toggle ? toggleStyle : checkboxStyle}
                onFocus={this.setActive}
                onKeyPress={this.handleKeyPress}
            >
                <input
                    checked={checked}
                    className={inputClasses}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    ref={this.handleRef}
                    type={inputType}
                    value={id}
                />
                {hasIcon &&
                    <span className={checkboxClassNames('Checkbox__icon')}>
                        {indeterminate
                            ? <span className={checkboxClassNames('Checkbox__icon-indeterminate')}/>
                            : <IconModule.Icon {...iconProps}/>
                        }
                    </span>
                }
            </label>
        );
    }
}
