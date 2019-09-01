import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { PageLayout } from '../../layouts';
import { FooterAside, LanguageSelect } from '../../components';

const style = require('./LayoutPage.less');
const cn = classNames.bind(style);
const { Aside, Footer, Header, Main, Page } = PageLayout;

const SHOW = 'show';
const HIDE = 'hide';
const contentStyle = {
    margin: '20px',
    background: '#777',
    height: '400px'
};

interface State {
    asideHidden: boolean;
    headerHidden: boolean;
}

export class LayoutPage extends Component<null, State> {
    state = {
        asideHidden: false,
        headerHidden: false
    };

    handleHideAsideClick = () => this.setState(({asideHidden}) => ({asideHidden: !asideHidden}));

    handleHideHeaderClick = () => this.setState(({headerHidden}) => ({headerHidden: !headerHidden}));

    render() {
        const { asideHidden, headerHidden } = this.state;

        return (
            <Page>
                {!headerHidden &&
                    <Header>
                        <p className={cn('Content-filler')} >header</p>
                    </Header>
                }

                {!asideHidden &&
                    <Aside heading={''} footerText={''} withoutHeader={headerHidden}>
                        <p className={cn('Content-filler')}>aside</p>
                    </Aside>
                }
                <Main fullWidth={asideHidden} withoutHeader={headerHidden} >
                    <div style={contentStyle} >
                        <p>Content 1</p>
                        <div>
                            <button onClick={this.handleHideAsideClick}>
                                {`${asideHidden ? SHOW : HIDE} aside`}
                            </button>
                            <button onClick={this.handleHideHeaderClick}>
                                {`${headerHidden ? SHOW : HIDE} header`}
                            </button>
                        </div>

                    </div>
                    <p style={contentStyle} >Content 2</p>
                    <p style={contentStyle} >Content 3</p>
                </Main>
                <Footer footerAside={!asideHidden && FooterAside} rightContent={LanguageSelect}>
                    <div className={cn('Content-filler')}>footer</div>
                </Footer>
            </Page>
        );
    }
}
