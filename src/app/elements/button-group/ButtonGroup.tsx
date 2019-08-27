import React, { Component, Children, cloneElement, ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../index';

const style = require('./ButtonGroup.less');
const cn = classNames.bind(style);
const SeparatorSize = {
    MEDIUM: Symbol('medium'),
    SMALL: Symbol('small')
};

interface Props {
    children: Array<ReactNode>;
    round?: boolean;
    separatorSize?: Symbol;
}

class ButtonGroupComponent extends Component<Props> {
    static defaultProps = {
        buttonComponent: Button,
        separatorSize: SeparatorSize.SMALL
    };

    render() {
        const { children, round, separatorSize } = this.props;
        const buttons: Array<ReactElement | ReactNode> = Children.toArray(children);
        const lastButtonIndex = buttons.length - 1;
        const hasSeparator = separatorSize && (buttons.length > 1);

        return (
            <div className={cn('Button-group')}>
                {buttons.map((button: ReactElement, index) => {
                    const nextProps = {
                        roundLeft: round && !index,
                        roundRight: round && (index === lastButtonIndex)
                    };
                    const separatorClasses = cn('Button-group__item', {
                        ...(hasSeparator && index
                            ? {
                                'Button-group__item--separator-medium': separatorSize === SeparatorSize.MEDIUM,
                                'Button-group__item--separator-small': separatorSize === SeparatorSize.SMALL
                            } : {})
                    });

                    return (
                        <span className={separatorClasses} key={index}>
                            {cloneElement(button, nextProps)}
                        </span>
                    );
                })}
            </div>
        );
    }
}

export const ButtonGroup = {
    Component: ButtonGroupComponent,
    SeparatorSize
};
