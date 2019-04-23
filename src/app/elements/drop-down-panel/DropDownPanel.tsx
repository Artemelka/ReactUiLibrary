import React, { Component, Children, cloneElement } from 'react';
import classNames from 'classnames/bind';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);

export interface DropDownPanelProps {
    actionIcon?: {
        iconName: string;
        onClick: () => void;
    };
    darkColor?: boolean;
    emptyStyle?: boolean;
    onChange?: () => void;
    onlyBorder?: boolean;
    opened: boolean;
    openingByIcon?: boolean;
}
interface DropDownPropsWithChildren extends DropDownPanelProps {
    children: Array<{[key: string]: any}>;
}

export class DropDownPanel extends Component<DropDownPropsWithChildren> {
    updateChildren = () => {
        const { actionIcon, children, darkColor, emptyStyle, onChange, onlyBorder, opened, openingByIcon } = this.props;


        return Children.toArray(children).map(childElement => {
            switch (childElement.type.name) {
                case 'DropDownSummary':
                    return cloneElement(childElement, {
                        actionIcon,
                        darkColor,
                        emptyStyle,
                        onChange,
                        onlyBorder,
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
        const { darkColor, emptyStyle, opened } = this.props;
        const styleName = cn('Drop-down-panel', {
            'Drop-down-panel--opened': opened,
            'Drop-down-panel--dark': darkColor,
            'Drop-down-panel--empty': emptyStyle,
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
