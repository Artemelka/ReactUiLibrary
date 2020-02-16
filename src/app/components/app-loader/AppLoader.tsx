import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../elements';
import { appLoaderIsLoadingSelector } from './selectors';
import { AppLoaderProps } from './types';
import { AppState } from '../../types';

export const AppLoader = connect((state: AppState): AppLoaderProps => ({
    enabled: appLoaderIsLoadingSelector(state)
}))(Loader);
