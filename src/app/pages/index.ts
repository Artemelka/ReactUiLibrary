import LibraryPage from './library/LibraryPage';
import LayoutPage from './layout/LayoutPage';
import HomePage from './home/HomePage';
import TranslateEditorPage from './translate-editor/TranslateEditorPage';
import { RouteProps } from './types';

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
    }, {
        component: TranslateEditorPage,
        path: '/translate-editor'
    }
];
