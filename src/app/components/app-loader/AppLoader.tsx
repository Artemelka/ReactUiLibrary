import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Loader } from '../../elements';
import { localizationIsLoadingSelector, LocalizationState } from '../../../services/localization';

const appLoaderSelector = createSelector(localizationIsLoadingSelector, isLoading => isLoading);

export const AppLoader: FC<{ enabled?: boolean }> = connect((state: Record<string, any> & LocalizationState) => ({
    enabled: appLoaderSelector(state)
}))(Loader);
