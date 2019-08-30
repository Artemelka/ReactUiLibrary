import React, { Component, Children, cloneElement } from 'react';
import classNames from 'classnames/bind';
import { DropDownPropsWithChildren } from './types';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);

export class DropDownPanel extends Component<DropDownPropsWithChildren> {
    getUpdatedChildren = () => {
        const { actionIcon, children, onChange, onlyBorder, opened, openingByIcon } = this.props;
        const summaryClassName = cn('Drop-down-panel__summary', {
            'Drop-down-panel__summary--opened': opened && onlyBorder,
            'Drop-down-panel__summary--clickable': !openingByIcon
        });
        const summaryProps = {
            actionIcon,
            className: summaryClassName,
            onChange,
            opened,
            openingByIcon
        };

        return Children.toArray(children).map(childElement => {
            switch (childElement.type.name) {
                case 'DropDownSummary':
                    return cloneElement(childElement, summaryProps);
                case 'DropDownDetails':
                    return cloneElement(childElement, {
                        className: cn('Drop-down-panel__details'),
                        opened
                    });
                default: return childElement;
            }
        });
    };

    render() {
        const { darkColor, emptyStyle, onlyBorder, opened } = this.props;
        const styleName = cn('Drop-down-panel', {
            'Drop-down-panel--opened': opened,
            'Drop-down-panel--dark': darkColor,
            'Drop-down-panel--empty': emptyStyle,
            'Drop-down-panel--only-border': onlyBorder,
        });

        return (
            <div className={styleName}>
                {this.getUpdatedChildren()}
            </div>
        );
    }
}
