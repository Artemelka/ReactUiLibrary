import React from 'react';
import classNames from 'classnames/bind';
import { SingleRadioButton } from './SingleRadioButton';
import { RadioButtonsProps } from './types';
import style from './RadioButtons.less';

const cn = classNames.bind(style);

export const RadioButtons = ({ column, items, onChange, value, name }: RadioButtonsProps) => (
    <div className={cn('Radio-buttons', {'Radio-buttons--vertical': column})}>
        {
            items.map((item, index) => {
                const { disabled, id, label, value: itemValue } = item;

                return (
                    <div className={cn('Radio-buttons__item')} key={`${id}_${index}`}>
                        <SingleRadioButton
                            checked={itemValue === value}
                            disabled={disabled}
                            id={id}
                            name={name}
                            onChange={onChange}
                            value={itemValue}
                        />

                        { label &&
                            <label
                                className={cn('Radio-buttons__item-label', {
                                    'Radio-buttons__item-label--disabled': disabled
                                })}
                                htmlFor={id}
                            >
                                {label}
                            </label>
                        }
                    </div>
                );
            })
        }
    </div>
);
