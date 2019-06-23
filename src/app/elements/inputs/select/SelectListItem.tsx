import React, { Component, FocusEvent, KeyboardEvent } from 'react';
import { keyCodes } from '../../../../services';
import { TranslateComponent } from '../../translate';

const { DOWN, ENTER, SPACE, TAB, UP } = keyCodes;
const targetClickKey = [ ENTER, SPACE ];
const targetPressKey = [ DOWN, TAB, UP ];

interface Props {
    className: string;
    disabled?: boolean;
    index: number;
    listItemRef?: (ref: HTMLLIElement, index: number) => void;
    onBlur?: (event: FocusEvent) => void;
    onClick: (value: string) => void;
    onKeyPress?: (index: number, keyCode: number, shiftKey: boolean) => void;
    title: string;
    value: string;
}
export class SelectListItem extends Component<Props> {
    static defaultProps = {
        listItemRef: () => false,
        onBlur: () => false
    };

    itemRef: HTMLLIElement;

    handleClick = () => {
        const { disabled, onClick, value } = this.props;

        if (!disabled) {
            onClick(value);
            this.itemRef.blur();
        }
    };

    handleKeyDown = (event: KeyboardEvent) => {
        const { index, onKeyPress } = this.props;
        const { keyCode, shiftKey } = event;

        event.stopPropagation();
        event.preventDefault();

        if (targetClickKey.includes(keyCode)) {
            this.handleClick();
            return;
        }

        if (targetPressKey.includes(keyCode)) {
            onKeyPress(index, keyCode, shiftKey);
        }
    };

    handleRef = (ref: HTMLLIElement) => {
        const { index, listItemRef } = this.props;

        listItemRef(ref, index);
        this.itemRef = ref;
    };

    render() {
        const { className, disabled, onBlur, title } = this.props;
        const tabIndex = disabled ? -1 : 0;

        return (
            <li
                className={className}
                onBlur={onBlur}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                ref={this.handleRef}
                role="button"
                tabIndex={tabIndex}
            >
                <TranslateComponent translateKey={title}/>
            </li>
        );
    }
}
