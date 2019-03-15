import React from 'react';
import classNames from 'classnames';
import { Anchor, Text } from '../elements';
import './layout.less';

interface LayoutProps {
    aside?: React.ReactElement<any>;
    content?: HTMLElement;
    footer?: HTMLElement;
}

const PROJECT_LINK = 'https://github.com/Artemelka/ReactUiLibrary';

export class Layout extends React.Component<LayoutProps> {
    render() {
        const {
            aside,
            content,
            footer
        } = this.props;

        return (
            <div className={classNames('Layout')}>
                {aside &&
                    <aside className={classNames('Layout__aside')}>
                        <div className={classNames('Layout__aside-heading')}>
                            <Text.H1 bold light>
                                React UI Library
                            </Text.H1>
                            <Text.H2 bold upper>
                                React UI Library
                            </Text.H2>
                            <Text.H3 bold upper>
                                React UI Library
                            </Text.H3>
                            <Text.H4 bold upper>
                                React UI Library
                            </Text.H4>
                            <Text.H5 bold upper>
                                React UI Library
                            </Text.H5>
                            <Text.H6 bold upper>
                                React UI Library
                            </Text.H6>
                            <Text.Paragraph bold upper>
                                React UI Library
                            </Text.Paragraph>
                            <Text.Span bold upper>
                                React UI Library
                            </Text.Span>
                        </div>
                        {aside}
                        <div className={'Layout__aside-footer'}>
                            <Anchor href={PROJECT_LINK} newPage label={'Project in GitHub'} />
                            <Anchor label={'Go to Home'} />
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