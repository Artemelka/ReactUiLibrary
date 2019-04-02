import React, { Component, Fragment } from 'react';
import { Button } from '../';
import { ButtonProps } from '../buttons/button';
import classNames from 'classnames';
import './button-group.less';

interface ItemsProps extends ButtonProps {
    children: React.ComponentType | string;
}
interface Props {
    buttons: Array<ItemsProps>;
    buttonType?: React.ComponentType;
    round?: boolean;
    separatorSize?: number;
}

export class ButtonGroup extends Component<Props> {
    static defaultProps = {
        buttonType: Button
    };

    render() {
        const { buttons, buttonType: ButtonComponent, round, separatorSize } = this.props;
        const lastButtonIndex = buttons.length - 1;
        const hasSeparator = separatorSize && (buttons.length > 1);
        const styleClasses = classNames('Button-group', {
            'Button-group--round': round && !separatorSize
        });

        return (
            <div className={styleClasses}>
                {buttons.map((buttonProps, index) => {
                    const {children, ...restProps} = buttonProps;

                    return (
                        <Fragment  key={index}>
                            <ButtonComponent {...restProps}>
                                {children}
                            </ButtonComponent>
                            {hasSeparator && (lastButtonIndex !== index) &&
                                <span
                                    className={classNames('Button-group__separator')}
                                    style={{width: `${separatorSize}px`}}
                                />
                            }
                        </Fragment>
                    );
                })}
            </div>
        );
    }
}
