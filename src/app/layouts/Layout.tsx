import React from 'react';
import classNames from 'classnames/bind';
import { Anchor, Text } from '../elements';
import { translate } from '../../services/translate';

const style = require('./Layout.less');
const cn = classNames.bind(style);

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
            <div className={cn('Layout')}>
                <aside className={cn('Layout__aside')}>
                    <div className={cn('Layout__aside-heading')}>
                        <Text.H6 bold upper>
                            React UI Library
                        </Text.H6>
                    </div>
                    <div className={cn('Layout__aside-content')}>
                        {aside}
                    </div>
                    <div className={cn('Layout__aside-footer')}>
                        123456789
                    </div>
                </aside>
                {content &&
                    <main className={cn('Layout__content')}>
                        {content}
                    </main>
                }
                <footer className={cn('Layout__footer')}>
                    <div className={cn('Layout__footer-aside')}>
                        <Anchor href={PROJECT_LINK} newPage label={translate('link-project')} />
                        <Anchor label={translate('go-to-home')} onClick={onGoHomeClick}/>
                    </div>
                    <div className={cn('Layout__footer-content')}>
                        {footer}
                    </div>
                </footer>
            </div>
        );
    }
}
