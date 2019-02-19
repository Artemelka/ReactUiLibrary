import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app';
import './index.less';

const ROOT = document.getElementById('App');

ReactDOM.render(
    <App title={['hello', 'world']} />,
    ROOT
);
