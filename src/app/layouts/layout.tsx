import React from 'react';
import classNames from 'classnames';
import { Anchor, Text } from '../elements';
import { translate } from '../../services/translate';
import './layout.less';

interface LayoutProps {
    aside?: React.ReactElement<any>;
    content?: React.ReactElement<any>;
    footer?: React.ReactElement<any>;
    onGoHomeClick: () => void;
}

export const PROJECT_LINK = 'https://github.com/Artemelka/ReactUiLibrary';

export class Layout extends React.Component<LayoutProps> {
    render() {
        const {
            aside,
            content,
            footer,
            onGoHomeClick
        } = this.props;

        return (
            <div className={classNames('Layout')}>
                <aside className={classNames('Layout__aside')}>
                    <div className={classNames('Layout__aside-heading')}>
                        <Text.H6 bold upper>
                            React UI Library
                        </Text.H6>
                    </div>
                    <div className={classNames('Layout__aside-content')}>
                        {aside}
                    </div>
                    <div className={'Layout__aside-footer'}>
                        123456789
                    </div>
                </aside>
                {content &&
                    <main className={classNames('Layout__content')}>
                        {content}
                    </main>
                }
                <footer className={classNames('Layout__footer')}>
                    <div className={classNames('Layout__footer-aside')}>
                        <Anchor href={PROJECT_LINK} newPage label={translate('link-project')} />
                        <Anchor label={translate('go-to-home')} onClick={onGoHomeClick}/>
                    </div>
                    <div className={classNames('Layout__footer-content')}>
                        {footer}
                    </div>
                </footer>
            </div>
        );
    }
}
