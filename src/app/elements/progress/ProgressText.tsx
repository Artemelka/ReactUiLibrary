import React from 'react';
import classNames from 'classnames/bind';
import { ProgressTextProps } from './types';

const style = require('./Progress.less');
const cn = classNames.bind(style);

export const ProgressText = ({ value }: ProgressTextProps) => (
    <div className={cn('Progress')}>
        <p className={cn('Progress__title')}>
            Progress status: {value}%
        </p>
    </div>
);
