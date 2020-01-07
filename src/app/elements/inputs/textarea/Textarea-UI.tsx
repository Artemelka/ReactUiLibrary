import React from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../../icon';
import { Button } from '../../buttons';
import { TextareaUiProps } from './types';
import style from './Textarea.less';

const cn = classNames.bind(style);
const { IconNames: { BACKSPACE } } = IconModule;

export const TextareaUI = ({
   cols,
   disabled,
   darkTheme,
   error,
   errorMessage,
   id,
   maxlength,
   name,
   onBlur,
   onChange,
   onClearClick,
   onClick,
   onFocus,
   onKeyDown,
   onKeyPress,
   onRef,
   placeholder,
   readonly,
   rows = 8,
   value
}: TextareaUiProps) => (
    <div className={cn('Textarea', {'Textarea--disabled': disabled})}>
        <textarea
            className={cn('Textarea__input', {
                'Textarea__input--dark': darkTheme,
                'Textarea__input--error': error,
                'Textarea__input--disabled': disabled
            })}
            cols={cols}
            disabled={disabled}
            id={id}
            maxLength={maxlength}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onClick}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            readOnly={readonly}
            ref={onRef}
            rows={rows}
            spellCheck
            style={{resize: 'none'}}
            value={value}
        />
        {Boolean(value.length) && !(disabled || readonly) && (
            <div className={cn('Textarea__clear-button')}>
                <Button.Icon iconName={BACKSPACE} onClick={onClearClick}/>
            </div>
        )}
        {error && (
            <div className={cn('Textarea__error-container')}>
                {errorMessage}
            </div>
        )}
        <div className={cn('Textarea__counter-container')}>
            <span className={cn('Textarea__max-value')}>
                {`${maxlength} / `}
            </span>
            <span
                className={cn('Textarea__value-counter', {
                    'Textarea__value-counter--error': error
                })}
            >
                {`${value.length}`}
            </span>
        </div>
        <span className={cn('Textarea__border', 'Textarea__border--top')}/>
        <span className={cn('Textarea__border', 'Textarea__border--left')}/>
        <span className={cn('Textarea__border', 'Textarea__border--bottom')}/>
        <span className={cn('Textarea__border', 'Textarea__border--right')}/>
    </div>
);
