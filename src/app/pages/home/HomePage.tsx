import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { TestRequest, TestRouter } from './components';
import { Button } from '../../elements';
import { NotificationRoot } from '../../elements/notification/notification-root/NotificationRoot';
import { NotificationType, NOTIFICATION_DELAY } from '../../elements/notification/constants';

const style = require('./HomePage.less');
const cn = classNames.bind(style);
const notificationsProps = [
    {
        type: NotificationType.ERROR,
        title: 'ERROR'
    }, {
        type: NotificationType.WARNING,
        title: 'WARNING'
    }, {
        type: NotificationType.SUCCESS,
        title: 'SUCCESS'
    }
];

export default class HomePage extends Component {
    state = {
        items: [],
        count: 0
    };

    handleAdd = () => {
        this.setState(({ items, count }) => ({
            items: [...items, notificationsProps[count]],
            count: count + 1
        }));
    };

    handleRemove = (target) => {
        this.setState(({ items }) => ({ items: items.filter(item => target !== item)}));
    };

    render() {
        return (
            <div className={cn('Test-page')}>
                <div className={cn('Test-page__item')}>
                    <h1>Test home page</h1>
                </div>
                <div className={cn('Test-page__item')}>
                    <h3>Test router</h3>
                    <TestRouter />
                </div>
                <div className={cn('Test-page__item')}>
                    <h3>Test request</h3>
                    <TestRequest/>
                </div>
                <div className={cn('Test-page__item')}>
                    <h3>Test ...</h3>
                    <Button label={'add notifications'} onClick={this.handleAdd}/>
                    <NotificationRoot
                        timeout={NOTIFICATION_DELAY}
                        notifications={this.state.items}
                        removeNotification={this.handleRemove}
                    />
                </div>
            </div>
        );
    }
}
