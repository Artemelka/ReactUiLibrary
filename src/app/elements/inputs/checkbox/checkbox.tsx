import React, { Component, createRef, RefObject } from 'react';
import classNames from 'classnames';
import './checkbox.less';

export interface CheckboxProps {
    disabled?: boolean;
    checked?: boolean;
    name: string;
    onChange?: () => void;
    withRef?: (ref: HTMLElement) => void;
}

export class Checkbox extends Component<CheckboxProps> {
    static defaultProps = {
        checked: false,
        withRef: (ref: HTMLElement) => ref
    };

    componentDidMount() {
        this.props.withRef(this.checkbox.current);
    }

    checkbox: RefObject<HTMLInputElement> = createRef();

    render() {
        const { checked, disabled, name, onChange } = this.props;
        const checkboxStyle = classNames('Checkbox', {
            'Checkbox--checked': checked,
            'Checkbox--disabled': disabled
        });

        return (
            <label className={checkboxStyle}>
                <input
                    checked={checked}
                    className="Checkbox__input"
                    disabled={disabled}
                    name={name}
                    onChange={onChange}
                    ref={this.checkbox}
                    type="checkbox"
                />
            </label>
        );
    }
}
