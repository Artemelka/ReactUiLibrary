import * as React from 'react';
import classNames from 'classnames';
import './layout.less';


interface LayoutProps {
    aside?: React.ReactElement<any>;
    content?: HTMLElement;
    footer?: HTMLElement;
}

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
                        {aside}
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