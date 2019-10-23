import React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import { APP_ROOT } from './app/constants';
import './index.css';

const ROOT_ELEMENT = document.getElementById(APP_ROOT);

ReactDOM.render(<App/>, ROOT_ELEMENT);
