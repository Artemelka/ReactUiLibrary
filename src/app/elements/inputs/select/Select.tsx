import React, { Component, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { translate } from '../../../../services/translate';
import { Input } from '../input/Input';

const style = require('./Select.less');
const cn = classNames.bind(style);

export interface SelectOptions {
    disabled?: boolean;
    title: string;
    value: string;
}
export interface SelectProps {
    disabled?: boolean;
    multiple?: boolean;
    name?: string;
    onChange?: (event: React.SyntheticEvent<HTMLSelectElement>, value: string) => void;
    options: Array<SelectOptions>;
    value: string;
}

export class Select extends Component<SelectProps> {
    static defaultProps = {
        onChange: () => false
    };

    handleChange = (event: SyntheticEvent<HTMLSelectElement>) => {
        const {value} = event.currentTarget;

        this.props.onChange(event, value);
    };

    render() {
        const { disabled, multiple, name, options, value } = this.props;

        return (
            <select
                className={cn('Select')}
                disabled={disabled}
                id={name}
                name={name}
                multiple={multiple}
                onChange={this.handleChange}
                value={value}
            >
                {options.map((option: SelectOptions, index: number) => (
                    <option
                        key={index}
                        disabled={option.disabled}
                        value={option.value}
                    >
                        {translate(option.title)}
                    </option>
                ))}
            </select>
        );
    }
}
