import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classNames from 'classnames/bind';
import { Anchor, changeLocale, Select, TranslateComponent } from '../../../elements';
import { TranslateState } from '../../../elements/translate/reducer';
import { PROJECT_LINK, HOME_URL } from '../../../constants';
import { Dispatch } from 'redux';

const style = require('./Footer.less');
const cn = classNames.bind(style);


const SELECT_WIDTH = 70;
const selectOptions = [
    {
        value: 'ru',
        title: 'russian-language'
    }, {
        value: 'en',
        title: 'english-language'
    }
];

interface Props {
    changeLocale?: (locale: string) => (dispatch: Dispatch) => void;
    history?: {push: (url: string) => void};
    translateDictionary?: TranslateState;
}

@(withRouter as any)
@(connect(
    (state: {[key: string]: any}) => ({ translateDictionary: state.translateDictionary }),
    { changeLocale }
) as any)
export class Footer extends Component<Props> {
    handleClick = () => this.props.history.push(HOME_URL);

    handleLangChange = (value: string) => this.props.changeLocale(value);

    render() {
        const { children, translateDictionary } = this.props;
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
                            listOpenTop
                            onChange={this.handleLangChange}
                            options={selectOptions}
                            value={translateDictionary.locale}
                            inputWidth={SELECT_WIDTH}
                        />
                    </div>
                </div>
            </footer>
        );
    }
}
