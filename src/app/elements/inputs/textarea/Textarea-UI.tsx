import React, {
    Component,
    ComponentType,
    KeyboardEvent,
    MouseEvent,
    RefObject,
    SyntheticEvent
} from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../../icon';
import { Button } from '../../buttons/Button';
import { TranslateProps } from '../../translate/translate';

const style = require('./Textarea.less');
const cn = classNames.bind(style);
const { IconNames: {BACKSPACE} } = IconModule;

export interface TextareaProps {
    cols?: number;
    darkTheme?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    id: string;
    maxlength?: number;
    name: string;
    onBlur?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: SyntheticEvent<HTMLTextAreaElement>, value?: string) => void;
    onClearClick?: () => void;
    onClick?: (event: MouseEvent<HTMLTextAreaElement> | KeyboardEvent) => void;
    onFocus?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    onRef?: RefObject<HTMLTextAreaElement>;
    placeholder?: string;
    readonly?: boolean;
    rows?: number;
    translateComponent: ComponentType<TranslateProps>;
    value: string;
}

export class TextareaUI extends Component<TextareaProps> {
    static defaultProps = {
        onClearClick: () => false,
        rows: 8
    };

    render() {
        const {
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
            rows,
            translateComponent: Translate,
            value
        } = this.props;
        const translateProps = {translateKey: errorMessage};

        return (
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
                    // maxLength={maxlength}
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
                    value={value}
                />
                {Boolean(value.length) && !disabled &&
                    <div className={cn('Textarea__clear-button')}>
                        <Button.Icon iconName={BACKSPACE} onClick={onClearClick}/>
                    </div>
                }
                {error &&
                    <div className={cn('Textarea__error-container')}>
                        {errorMessage && <Translate {...translateProps}/>}
                    </div>
                }
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
            </div>
        );
    }
}
