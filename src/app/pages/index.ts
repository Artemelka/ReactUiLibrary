import { LibraryPage } from './library/LibraryPage';
import { LayoutPage } from './layout/LayoutPage';
import { TestHomePage } from './home/home';
import { RouteProps } from './types';

export const pages: Array<RouteProps> = [
    {
        component: TestHomePage,
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
