import React, { ComponentType } from 'react';
import { TextBaseProps } from '../../../../../elements/text/types';

export type Params = TextBaseProps;

export type Collection = {
    element: ComponentType;
    params: Array<Params>;
};
