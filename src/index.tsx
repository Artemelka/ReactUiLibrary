import React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from './app/app-container';
import { APP_ROOT } from './app/constants';
import './index.css';

const ROOT_ELEMENT = document.getElementById(APP_ROOT);

ReactDOM.render(<AppContainer/>, ROOT_ELEMENT);
