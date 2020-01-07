import LibraryPage from './library/LibraryPage';
import NotFoundPage from './not-found/NotFound';
import LayoutPage from './layout/LayoutPage';
import HomePage from './home/HomePage';
import { TranslateEditorPage } from './translate-editor';
import FinalFormPage from './final-form/FinalFormPage';
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
    }, {
        component: FinalFormPage,
        path: '/final-form'
    }
];

export const PageNotFound = NotFoundPage;
