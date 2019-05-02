import React, { Component, Fragment } from 'react';
import { Button, ButtonProps } from '../buttons/button';
import classNames from 'classnames/bind';

const style = require('./ButtonGroup.less');
const cn = classNames.bind(style);

interface Props {
    buttons: Array<ButtonProps>;
    buttonComponent?: React.ComponentType;
    round?: boolean;
    separatorSize?: Symbol;
}

export const SeparatorSize = {
    MEDIUM: Symbol('medium'),
    SMALL: Symbol('small')
};

export class ButtonGroup extends Component<Props> {
    static defaultProps = {
        buttonComponent: Button,
        separatorSize: SeparatorSize.SMALL
    };

    render() {
        const { buttons, buttonComponent: ButtonComponent, round, separatorSize } = this.props;
        const lastButtonIndex = buttons.length - 1;
        const hasSeparator = separatorSize && (buttons.length > 1);
        const separatorClasses = cn('Button-group__separator', {
            'Button-group__separator--medium': separatorSize === SeparatorSize.MEDIUM,
            'Button-group__separator--small': separatorSize === SeparatorSize.SMALL
        });

        return (
            <div className={cn('Button-group')}>
                {buttons.map((buttonProps: {[key: string]: any}, index) => {
                    const nextProps: {[key: string]: any} = {
                        ...buttonProps,
                        roundLeft: round && (index === 0),
                        roundRight: round && (index === lastButtonIndex)
                    };

                    return (
                        <Fragment key={index}>
                            <ButtonComponent {...nextProps} />
                            {hasSeparator && (lastButtonIndex !== index) && <span className={separatorClasses}/>}
                        </Fragment>
                    );
                })}
            </div>
        );
    }
}
