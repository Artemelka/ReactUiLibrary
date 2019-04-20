import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { translate } from '../../../../services/translate';

const style = require('./Select.less');
const cn = classNames.bind(style);

interface Options {
    disabled?: boolean;
    title: string;
    value: string;
}
interface Props {
    disabled?: boolean;
    multiple?: boolean;
    name?: string;
    onChange?: (value: string) => void;
    options: Array<Options>;
    value: string;
}

export class Select extends Component<Props> {
    static defaultProps = {
        onChange: () => false
    };

    handleChange = (event: React.SyntheticEvent<HTMLSelectElement>) => this.props.onChange(event.currentTarget.value);

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
                {options.map((option: Options, index: number) => (
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
