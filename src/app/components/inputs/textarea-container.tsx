import React from 'react';
import { Textarea } from '../../elements';
import { InputValidationHoc } from './input-validation-HOC';

export const TextareaContainer = InputValidationHoc(Textarea);
