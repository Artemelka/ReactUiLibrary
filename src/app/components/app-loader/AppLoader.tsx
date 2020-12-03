import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'elements';
import { AppState } from '../../types';
import { appLoaderIsLoadingSelector, AppLoaderProps } from './redux';

export const AppLoader = connect((state: AppState): AppLoaderProps => ({
    enabled: appLoaderIsLoadingSelector(state)
}))(Loader);
