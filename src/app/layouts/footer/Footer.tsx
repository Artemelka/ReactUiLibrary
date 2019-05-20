import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Anchor } from '../../elements';
import { translate } from '../../../services/translate';

const style = require('./Footer.less');
const cn = classNames.bind(style);
export const PROJECT_LINK = 'https://github.com/Artemelka/ReactUiLibrary';

interface Props {
    onGoHomeClick: () => void;
}

export class Footer extends Component<Props> {
    render() {
        const { children, onGoHomeClick } = this.props;

        return (
            <footer className={cn('Footer')}>
                <div className={cn('Footer__aside')}>
                    <Anchor href={PROJECT_LINK} newPage label={translate('link-project')} />
                    <Anchor label={translate('go-to-home')} onClick={onGoHomeClick}/>
                </div>
                <div className={cn('Footer__main')}>
                    {children}
                </div>
            </footer>
        );
    }
}
