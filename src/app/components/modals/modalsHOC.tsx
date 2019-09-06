import React, { Component, ComponentType } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

export const modalHOC = (Component: ComponentType<any>) =>
    withRouter((props: RouteComponentProps) => {
        const handleCloseModal = () => {
            const { location: { pathname } } = props;
            const nextUrl = pathname.slice(0, pathname.lastIndexOf('/'));

            props.history.push(nextUrl);
        };

        return <Component {...props} onClose={handleCloseModal}/>;
    }
);
