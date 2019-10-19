import { lazy } from 'react';
import NotFoundPage from './not-found/NotFound';
import LibraryPage from './library/LibraryPage';
import LayoutPage from './layout/LayoutPage';
import HomePage from './home/HomePage';

import { RouteProps } from './types';

// const HomePage = lazy(() => import('./home/HomePage'));
// const LibraryPage = lazy(() => import('./library/LibraryPage'));
// const LayoutPage = lazy(() => import('./layout/LayoutPage'));

export const pages: Array<RouteProps> = [
    {
        component: HomePage,
        exact: true,
        path: '/'
    }, {
        component: LibraryPage,
        path: '/library'
    }, {
        component: LayoutPage,
        path: '/layout'
    }
];

export const PageNotFound = NotFoundPage;
