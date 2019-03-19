import React from 'react';
import classNames from 'classnames';
import { Anchor } from '../../../elements';
import '../sand-box.less';

export const AnchorSandBox = () => {
    return (
        <div className={classNames('Sandbox')}>
            <div className={classNames('Sandbox__item Sandbox__item--bg-white')}>
                <Anchor
                    href={'https://github.com/Artemelka/ReactUiLibrary'}
                    label={'Link to GitHub open in new window'}
                    newPage
                />
            </div>
            <div className={classNames('Sandbox__item Sandbox__item--bg-white')}>
                <Anchor
                    href={'https://github.com/Artemelka/ReactUiLibrary'}
                    label={'Link disabled'}
                    newPage
                    disabled
                />
            </div>
            <div className={classNames('Sandbox__item Sandbox__item--bg-white')}>
                <Anchor
                    label={'Link pseudo console message on click'}
                    onClick={() => console.log('Link click')}
                />
            </div>
            <div className={classNames('Sandbox__item')}>

            </div>
            <div className={classNames('Sandbox__item')}>

            </div>
            <div className={classNames('Sandbox__item')}>

            </div>
            <div className={classNames('Sandbox__item')}>

            </div>
            <div className={classNames('Sandbox__item')}>

            </div>
        </div>
    );
};