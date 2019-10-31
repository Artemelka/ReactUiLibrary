import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { History } from 'history';
import { Anchor } from '../../elements';
import { TranslateComponent } from '../../../services/translate';
import { PROJECT_LINK, HOME_URL } from '../../constants';

export class FooterAsideComponent extends Component<History> {
    handleClick = () => this.props.push(HOME_URL);

    render() {
        return (
            <Fragment>
                <Anchor href={PROJECT_LINK} newPage>
                    <TranslateComponent translateKey={'link-project'}/>
                </Anchor>
                <Anchor onClick={this.handleClick}>
                    <TranslateComponent translateKey={'go-to-home'} />
                </Anchor>
            </Fragment>
        );
    }
}

export const FooterAside = connect(null, { push })(FooterAsideComponent);
