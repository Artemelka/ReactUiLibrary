import React from 'react';
import classNames from 'classnames';
import { Anchor, Text } from '../elements';
import './layout.less';

interface LayoutProps {
    aside?: React.ReactElement<any>;
    content?: React.ReactElement<any>;
    footer?: React.ReactElement<any>;
    onGoHomeClick: () => void;
}

const PROJECT_LINK = 'https://github.com/Artemelka/ReactUiLibrary';

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
                {aside &&
                    <aside className={classNames('Layout__aside')}>
                        <div className={classNames('Layout__aside-heading')}>
                            <Text.H6 bold upper>
                                React UI Library
                            </Text.H6>
                        </div>
                        {aside}
                        <div className={'Layout__aside-footer'}>
                            <Anchor href={PROJECT_LINK} newPage label={'Project in GitHub'} />
                            <Anchor label={'Go to Home'} onClick={onGoHomeClick}/>
                        </div>
                    </aside>
                }
                {content &&
                    <main className={classNames('Layout__content')}>
                        {content}
                    </main>
                }
                {footer &&
                    <footer className={classNames('Layout__footer')}>
                        {footer}
                    </footer>
                }
            </div>
        );
    }
}
