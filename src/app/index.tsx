import React, { Suspense } from 'react';
import classNames from 'classnames/bind';
import { Route } from 'react-router';
import { pages } from './pages';

const style = require('./app.less');
const cn = classNames.bind(style);

export const App = () => (
    <div className={cn('App')}>
        {/*<Suspense fallback={<div>Загрузка...</div>}>*/}
                {
                    pages.map((pageProps, index) =>
                        <Route {...pageProps} key={`${index}_${pageProps.path}`} />)
                }
        {/*</Suspense>*/}
    </div>
);
