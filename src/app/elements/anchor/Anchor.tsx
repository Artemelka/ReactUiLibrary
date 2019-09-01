import React, { Component, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { keyCodes } from '../../../services';
import { AnchorProps, CustomEvent } from './types';

const style = require('./Anchor.less');
const cn = classNames.bind(style);
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];
const ROLE_BUTTON = 'button';
const LinkTargetAttr = {
    BLANK: '_blank',
    SELF: '_self'
};

export class Anchor extends Component<AnchorProps> {
    static defaultProps = {
        onClick: () => false
    };

    handleClick = (event: SyntheticEvent) => {
        const { disabled, onClick } = this.props;

        if (!disabled) {
            onClick(event);
        }
    };

    handleKeyPress = (event: CustomEvent) => {
        const { keyCode, which } = event;
        const code = keyCode || which;

        if (targetKeyCodes.includes(code)) {
            this.handleClick(event);
        }
    };

    render() {
        const { active, anchorRef, children, disabled, href, newPage } = this.props;
        const anchorClasses = cn('Anchor', {
            'Anchor--active': active,
            'Anchor--disabled': disabled
        });
        const baseProps = {
            className: anchorClasses,
            onClick: this.handleClick,
            onKeyPress: this.handleKeyPress
        };

        return (
            Boolean(href) && !disabled
                ? (
                    <a
                        {...baseProps}
                        href={href}
                        ref={anchorRef}
                        target={newPage ? LinkTargetAttr.BLANK : LinkTargetAttr.SELF}
                    >
                        {children}
                    </a>
                ) : (
                    <span
                        {...baseProps}
                        tabIndex={disabled ? -1 : 0}
                        role={ROLE_BUTTON}
                    >
                        {children}
                    </span>
                )
        );
    }
}
