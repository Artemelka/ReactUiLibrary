import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Checkbox } from '../checkbox/Checkbox';
import { TranslateComponent } from '../../translate';

const style = require('./RadioButtons.less');
const cn = classNames.bind(style);

export interface RadioButtonProps {
    disabled?: boolean;
    id: string;
    label?: string;
    value: string;
}
interface RadioButtonsProps {
    column?: boolean;
    items: Array<RadioButtonProps>;
    value: string;
    name: string;
    onChange?: (value: string) => void;
}

export class RadioButtons extends Component<RadioButtonsProps> {
    handleChange = (value: string) => () => this.props.onChange(value);

    render() {
        const { column, items, value, name } = this.props;

        return (
            <div className={cn('Radio-buttons', {'Radio-buttons--vertical': column})}>
                {
                    items.map((item, index) => {
                        const { disabled, id, label, value: itemValue } = item;

                        return (
                            <div className={cn('Radio-buttons__item')} key={`${id}_${index}`}>
                                <Checkbox
                                    checked={itemValue === value}
                                    disabled={disabled}
                                    id={id}
                                    indeterminate
                                    name={name}
                                    onChange={this.handleChange(itemValue)}
                                    radio
                                />
                                { label &&
                                    <span className={cn('Radio-buttons__item-label')}>
                                        <TranslateComponent translateKey={label} />
                                    </span>
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
