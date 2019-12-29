import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../icon';
import style from './Loader.less';

const cn = classNames.bind(style);
const { Icon, IconNames } = IconModule;

interface LoaderProps {
    enabled?: boolean;
    inContainer?: boolean;
}

export const Loader: FC<LoaderProps> = ({ enabled, inContainer }: LoaderProps): JSX.Element => (
    <div className={cn('Loader', { 'Loader--show': enabled, 'Loader--in-container': inContainer })}>
        <div className={cn('Loader__content')}>
            <Icon name={IconNames.SYNC} fontSize={40} spin/>
        </div>
    </div>
);
