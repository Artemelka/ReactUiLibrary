import React, { Component, Children, cloneElement } from 'react';
import classNames from 'classnames/bind';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);

export interface DropDownPanelProps {
    actionIcon?: {
        iconName: string;
        onClick: () => void;
    };
    onChange?: () => void;
    opened: boolean;
    openingByIcon?: boolean;
}
interface DropDownPropsWithChildren extends DropDownPanelProps {
    children: Array<{[key: string]: any}>;
}

export class DropDownPanel extends Component<DropDownPropsWithChildren> {
    updateChildren = () => {
        const { children, actionIcon, onChange, opened, openingByIcon } = this.props;


        return Children.toArray(children).map(childElement => {
            switch (childElement.type.name) {
                case 'DropDownSummary':
                    return cloneElement(childElement, {
                        actionIcon,
                        onChange,
                        opened,
                        openingByIcon
                    });
                case 'DropDownDetails':
                    return cloneElement(childElement, {opened});
                default: return childElement;
            }
        });
    };

    render() {
        const { opened } = this.props;
        const styleName = cn('Drop-down-panel', {
            'Drop-down-panel--opened': opened
        });

        return (
            <div
                className={styleName}
                tabIndex={0}
            >
                {this.updateChildren()}
            </div>
        );
    }
}
