import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ToDo } from './app';
import './index.less';

const ROOT = document.getElementById('App');

ReactDOM.render(
    <ToDo
        title={['hello', 'world']}
    />,
    ROOT
);
