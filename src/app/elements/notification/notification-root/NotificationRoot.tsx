import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import { NotificationPortalAdapter } from '../NotificationPortalAdapter';
import { NotificationContainer } from '../container/NotificationContainer';
import { NotificationRootProps, NotificationRootState, NotificationBaseProps } from '../types';

const style = require('./NotificationRoot.less');
const cn = classNames.bind(style);

export class NotificationRoot extends Component<NotificationRootProps, NotificationRootState> {
    // static getDerivedStateFromProps(nextProps: NotificationRootProps, prevState: NotificationRootState) {
    //     return nextProps.notifications.every(item => prevState.prevNotification.includes(item))
    //         ? false
    //         : ({ notifications: [...nextProps.notifications] });
    // }

    // constructor(props: NotificationRootProps) {
    //     super(props);
    //
    //     this.state = {
    //         notifications: props.notifications,
    //         prevNotification: []
    //     };
    // }
    //
    // handleRemoveNotification = (targetItem: NotificationBaseProps) => {
    //     this.setState(({ notifications }) => {
    //         const nextState = notifications.filter(item => targetItem !== item);
    //         console.log('$nextState', nextState);
    //         return ({
    //             notifications: nextState,
    //             prevNotification: notifications
    //         });
    //     });
    // };

    render() {
        const { timeout, removeNotification, notifications } = this.props;
        // const { notifications } = this.state;
console.log('$render', notifications);
        return (
            <Fragment>
                {
                    notifications.length
                        ? (
                            <NotificationPortalAdapter>
                                <div className={cn('Notification-root')}>
                                    {
                                        notifications.map((item, index) => (
                                            <div
                                                className={cn('Notification-root__item')}
                                                key={`${item.title}_${index}`}
                                            >
                                                <NotificationContainer
                                                    delay={timeout}
                                                    item={item}
                                                    // removeNotification={this.handleRemoveNotification}
                                                    removeNotification={removeNotification}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </NotificationPortalAdapter>
                        ) : null
                }
            </Fragment>
        );
    }
}
