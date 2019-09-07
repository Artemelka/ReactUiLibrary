import React, { Component, ComponentType } from 'react';
import { withRouter } from 'react-router';
import { getModalNamesFromUrl } from './utils';

const START_INDEX = 0;
const SEPARATOR = '/';

export const modalHOC = (Component: ComponentType<any>) =>
    withRouter((props: any) => {
        const { history: { push },  match: { url }, location: { pathname } } = props;
        const handleCloseModal = () => {
            const nextUrl = pathname.slice(START_INDEX, pathname.lastIndexOf(SEPARATOR));

            push(nextUrl);
        };
        const modalsUrl = getModalNamesFromUrl(pathname, url);

        return <Component {...props} modalsUrl={modalsUrl} onClose={handleCloseModal}/>;
    }
);
