import React, { Component, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { keyCodes } from '../../../services';

const style = require('./Anchor.less');
const cn = classNames.bind(style);
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];

interface Props {
    active?: boolean;
    disabled?: boolean;
    href?: string;
    label: string;
    newPage?: boolean;
    onClick?: (event: SyntheticEvent) => void;
}
interface ComponentType extends Props {
    anchorClasses: string;
    onKeyPress: (event: SyntheticEvent) => void;
    target?: string;
}
interface CustomEvent extends SyntheticEvent {
    keyCode: number;
    which: number;
}

const LINK_TARGET_BLANK = '_blank';

const AnchorLink = (props: ComponentType) => {
    const { anchorClasses, href, label, onClick, onKeyPress, target } = props;

    return (
        <a
            href={href}
            className={anchorClasses}
            onClick={onClick}
            onKeyPress={onKeyPress}
            target={target}
        >
            {label}
        </a>
    );
};
const PseudoLink = (props: ComponentType) => {
    const { anchorClasses, disabled, label, onClick, onKeyPress } = props;

    return (
        <span
            className={anchorClasses}
            onClick={onClick}
            onKeyPress={onKeyPress}
            tabIndex={disabled ? -1 : 0}
            role="button"
        >
            {label}
        </span>
    );
};

export class Anchor extends React.Component<Props> {
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
        const { active, disabled, href, label, newPage } = this.props;
        const Component = (Boolean(href) && !disabled) ? AnchorLink : PseudoLink;
        const anchorClasses = cn('Anchor', {
            'Anchor--active': active,
            'Anchor--disabled': disabled
        });
        const anchorProps: ComponentType = {
            active,
            anchorClasses,
            disabled,
            label,
            onClick: this.handleClick,
            onKeyPress: this.handleKeyPress
        };

        if (href) {
            anchorProps.href = href;

            if (newPage) {
                anchorProps.target = LINK_TARGET_BLANK;
            }
        }

        return <Component {...anchorProps}/>;
    }
}
