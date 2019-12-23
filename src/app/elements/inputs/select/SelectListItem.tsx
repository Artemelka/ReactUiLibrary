import React, { Component, KeyboardEvent } from 'react';
import { keyCodes } from '../../../constants';
import { SelectListItemProps } from './types';

const { DOWN, ENTER, SPACE, TAB, UP } = keyCodes;
const targetClickKey = [ ENTER, SPACE ];
const targetPressKey = [ DOWN, TAB, UP ];

export class SelectListItem extends Component<SelectListItemProps> {
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
                {title}
            </li>
        );
    }
}
