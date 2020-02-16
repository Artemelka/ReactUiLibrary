import React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/application';
import { APP_ROOT } from './app/constants';
import './index.css';

ReactDOM.render(<App/>, document.getElementById(APP_ROOT));
