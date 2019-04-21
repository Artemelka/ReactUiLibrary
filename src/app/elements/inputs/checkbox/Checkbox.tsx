import React, { Component, createRef, KeyboardEvent, RefObject } from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../../icon';
import { keyCodes } from '../../../../services';

const checkboxStyle = require('./Checkbox.less');
const toggleStyle = require('./Toggle.less');
const checkboxClassNames = classNames.bind(checkboxStyle);
const toggleClassNames = classNames.bind(toggleStyle);

export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    id: string;
    name: string;
    onChange?: () => void;
    toggle?: boolean;
    withRef?: (ref: HTMLElement) => void;
}
interface State {
    isActive: boolean;
}

const iconProps = {
    fontSize: 18,
    name: IconModule.IconNames.ANGLE.DOWN,
    size: '2x',
    stack: 'fas'
};

export class Checkbox extends Component<CheckboxProps, State> {
    static defaultProps = {
        checked: false,
        onChange: () => {},
        withRef: () => {}
    };

    state = {
        isActive: false
    };

    componentDidMount() {
        this.props.withRef(this.input.current);
    }

    setActive = () => {
        this.setState({isActive: true});
        this.input.current.focus();
    };

    input: RefObject<HTMLInputElement> = createRef();

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

    render() {
        const { checked, disabled, id, name, toggle } = this.props;
        const { isActive } = this.state;
        const checkboxStyle = checkboxClassNames('Checkbox', {
            'Checkbox--checked': checked,
            'Checkbox--disabled': disabled,
            'Checkbox--focused': isActive
        });
        const toggleStyle = toggleClassNames('Toggle', {
            'Toggle--checked': checked,
            'Toggle--disabled': disabled,
            'Toggle--focused': isActive
        });
        const inputClasses = toggle ? toggleClassNames('Toggle__input') : checkboxClassNames('Checkbox__input');
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
                    ref={this.input}
                    type="checkbox"
                    value={id}
                />
                {hasIcon &&
                    <span className={checkboxClassNames('Checkbox__icon')}>
                        <IconModule.Icon {...iconProps}/>
                    </span>
                }
            </label>
        );
    }
}
