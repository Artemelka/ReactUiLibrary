import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../elements';
import { appLoaderIsLoadingSelector } from './selectors';
import { AppLoaderState } from './types';


export const AppLoader: FC<{ enabled?: boolean }> = connect((state: Record<string, any> & AppLoaderState) => ({
    enabled: appLoaderIsLoadingSelector(state)
}))(Loader);
