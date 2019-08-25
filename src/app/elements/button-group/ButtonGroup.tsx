import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Button, ButtonProps } from '../buttons/Button';

const style = require('./ButtonGroup.less');
const cn = classNames.bind(style);
const SeparatorSize = {
    MEDIUM: Symbol('medium'),
    SMALL: Symbol('small')
};

interface Props {
    buttons: Array<ButtonProps>;
    buttonComponent?: React.ComponentType;
    round?: boolean;
    separatorSize?: Symbol;
}

class ButtonGroupComponent extends Component<Props> {
    static defaultProps = {
        buttonComponent: Button,
        separatorSize: SeparatorSize.SMALL
    };

    render() {
        const { buttons, buttonComponent: ButtonComponent, round, separatorSize } = this.props;
        const lastButtonIndex = buttons.length - 1;
        const hasSeparator = separatorSize && (buttons.length > 1);

        return (
            <div className={cn('Button-group')}>
                {buttons.map((buttonProps: {[key: string]: any}, index) => {
                    const nextProps: {[key: string]: any} = {
                        ...buttonProps,
                        roundLeft: round && (index === 0),
                        roundRight: round && (index === lastButtonIndex)
                    };
                    const separatorClasses = cn('Button-group__item', {
                        ...(hasSeparator && (lastButtonIndex !== index)
                            ? {
                                'Button-group__item--separator-medium': separatorSize === SeparatorSize.MEDIUM,
                                'Button-group__item--separator-small': separatorSize === SeparatorSize.SMALL
                            } : {})
                    });

                    return (
                        <span className={separatorClasses} key={index}>
                            <ButtonComponent {...nextProps} />
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
