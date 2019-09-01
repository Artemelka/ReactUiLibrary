import React, { Component, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Anchor } from '../../elements';
import { TranslateComponent } from '../../../services/translate';
import { PROJECT_LINK, HOME_URL } from '../../constants';

export class FooterAsideComponent extends Component<RouteComponentProps> {
    handleClick = () => this.props.history.push(HOME_URL);

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

export const FooterAside = withRouter(FooterAsideComponent);
