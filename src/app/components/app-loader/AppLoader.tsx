import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../elements';
import { appLoaderIsLoadingSelector } from './selectors';
import { AppState, AppLoaderProps } from './types';

export const AppLoader: FC<AppLoaderProps> = connect((state: AppState): AppLoaderProps => ({
    enabled: appLoaderIsLoadingSelector(state)
}))(Loader);
