import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import classNames from 'classnames/bind';
import { Anchor, Select } from '../../../elements';
import {
    changeLocale, translate, TranslateComponent, NavigatorLanguage, translateLocaleSelector, DictionaryStore
} from '../../../../services/translate';
import { PROJECT_LINK, HOME_URL } from '../../../constants';
import { SelectOptions } from '../../../elements/inputs/select/types';

const style = require('./Footer.less');
const cn = classNames.bind(style);

const SELECT_WIDTH = 70;
const selectOptions: Array<SelectOptions> = [
    {
        value: NavigatorLanguage.RU,
        title: 'russian-language'
    }, {
        value: NavigatorLanguage.EN,
        title: 'english-language'
    }
];
const getTranslatedOptions = (options: Array<SelectOptions>) =>
    options.map((item: SelectOptions) => ({
        ...item,
        title: translate(item.title)
    }));

interface Props extends RouteComponentProps {
    changeLocale?: (locale: string) => void;
    locale?: string;
}

export class FooterComponent extends Component<Props> {
    handleClick = () => this.props.history.push(HOME_URL);

    handleLanguageChange = (value: string) => this.props.changeLocale(value);

    render() {
        const { children, locale } = this.props;

        return (
            <footer className={cn('Footer')}>
                <div className={cn('Footer__aside')}>
                    <Anchor href={PROJECT_LINK} newPage>
                        <TranslateComponent translateKey={'link-project'}/>
                    </Anchor>
                    <Anchor onClick={this.handleClick}>
                        <TranslateComponent translateKey={'go-to-home'} />
                    </Anchor>
                </div>
                <div className={cn('Footer__main')}>
                    <div className={cn('Footer__content')}>
                        {children}
                    </div>
                    <div className={cn('Footer__select')}>
                        <Select
                            id="footer-select"
                            listOpenTop
                            name="footer-select"
                            onChange={this.handleLanguageChange}
                            options={getTranslatedOptions(selectOptions)}
                            value={locale}
                            inputWidth={SELECT_WIDTH}
                        />
                    </div>
                </div>
            </footer>
        );
    }
}

export const Footer = connect(
    (state: DictionaryStore) => ({ locale: translateLocaleSelector(state) }),
    { changeLocale }
)(withRouter(FooterComponent));
