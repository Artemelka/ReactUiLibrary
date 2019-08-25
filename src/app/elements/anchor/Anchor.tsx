import React, { Component, ReactElement, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { keyCodes } from '../../../services';

const style = require('./Anchor.less');
const cn = classNames.bind(style);
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];
const ROLE_BUTTON = 'button';
const LinkTargetAttr = {
    BLANK: '_blank',
    SELF: '_self'
};

interface Props {
    active?: boolean;
    children?: string | ReactElement;
    disabled?: boolean;
    href?: string;
    newPage?: boolean;
    onClick?: (event: SyntheticEvent) => void;
}
interface CustomEvent extends SyntheticEvent {
    keyCode: number;
    which: number;
}

export class Anchor extends Component<Props> {
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
        const { active, children, disabled, href, newPage } = this.props;
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
