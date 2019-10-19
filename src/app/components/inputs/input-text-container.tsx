import React from 'react';
import { Input } from '../../elements';
import { InputValidationHoc } from './input-validation-HOC';

export const InputTextContainer = InputValidationHoc(Input.Text);
