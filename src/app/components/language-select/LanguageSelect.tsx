import React from 'react';
import { Select } from '../../elements';
import { SELECT_ID, SELECT_WIDTH } from './constants';
import { LanguageSelectProps } from './types';

export const LanguageSelectComponent = ({ activeLocale, changeLocale, options }: LanguageSelectProps): JSX.Element => (
    <Select
        id={SELECT_ID}
        name={SELECT_ID}
        onChange={changeLocale}
        options={options}
        value={activeLocale}
        inputWidth={SELECT_WIDTH}
    />
);
