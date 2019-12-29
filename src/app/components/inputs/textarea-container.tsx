import React from 'react';
import { connect } from 'react-redux';
import { Textarea } from '../../elements';
import { LocalizationState } from '../../../services/localization/types';
import { localizationLabelsSelector } from '../../../services/localization';
import { InputValidationHoc } from './input-validation-HOC';

export const TextareaContainer = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}), {})(InputValidationHoc(Textarea));
