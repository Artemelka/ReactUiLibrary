import React from 'react';
import classNames from 'classnames/bind';
import { ProgressProps } from './types';

const style = require('./Progress.less');
const cn = classNames.bind(style);

export const ProgressText = ({ percent }: ProgressProps) => (
    <div className={cn('Progress')}>
        <p className={cn('Progress__title')}>
            Progress status: {percent}%
        </p>
    </div>
);
