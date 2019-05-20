import React, { Component } from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames/bind';
import { Anchor } from '../../elements';
import { translate } from '../../../services/translate';

const style = require('./Footer.less');
const cn = classNames.bind(style);

export const PROJECT_LINK = 'https://github.com/Artemelka/ReactUiLibrary';
const HOME_URL = '/';

interface Props {
    history?: {push: (url: string) => void};
}

@(withRouter as any)
export class Footer extends Component<Props> {
    handleClick = () => this.props.history.push(HOME_URL);

    render() {
        return (
            <footer className={cn('Footer')}>
                <div className={cn('Footer__aside')}>
                    <Anchor href={PROJECT_LINK} newPage label={translate('link-project')} />
                    <Anchor label={translate('go-to-home')} onClick={this.handleClick}/>
                </div>
                <div className={cn('Footer__main')}>
                    {this.props.children}
                </div>
            </footer>
        );
    }
}
