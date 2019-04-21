import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);

export interface DropDownPanelProps {
    onAction?: () => void;
    onChange?: () => void;
    opened: boolean;
}
interface DropDownPropsWithChildren extends DropDownPanelProps {
    children: Array<{[key: string]: any}>;
}

export class DropDownPanel extends Component<DropDownPropsWithChildren> {
    updateChildren = () => {
        const { children, onAction, onChange, opened } = this.props;

        return children.map(childElement => {
            switch (childElement.type.name) {
                case 'DropDownSummary':
                    return {
                        ...childElement,
                        props: {
                            ...childElement.props,
                            onAction,
                            onChange,
                            opened
                        }
                    };
                case 'DropDownDetails':
                    return {
                        ...childElement,
                        props: {
                            ...childElement.props,
                            opened
                        }
                    };
                default: return childElement;
            }
        });
    };

    render() {
        const { opened } = this.props;
        const styleName = cn('Drop-down-panel', {
            'Drop-down-panel--opened': opened
        });
        const updatedChildren = this.updateChildren();

        return (
            <div
                className={styleName}
                tabIndex={0}
            >
                {updatedChildren}
            </div>
        );
    }
}
