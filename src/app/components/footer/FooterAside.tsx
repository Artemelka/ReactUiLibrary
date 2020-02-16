import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { History } from 'history';
import { Anchor } from '../../elements';
import { localizationLabelsSelector } from '../../../services/localization';
import { PROJECT_LINK, HOME_URL } from '../../constants';
import { AppState } from '../../types';

export class FooterAsideComponent extends Component<History & { labels: Record<string, string> }> {
    handleClick = () => this.props.push(HOME_URL);

    render() {
        const { labels } = this.props;

        return (
            <Fragment>
                <Anchor href={PROJECT_LINK} newPage>
                    {labels['link-project']}
                </Anchor>
                <Anchor onClick={this.handleClick}>
                    {labels['go-to-home']}
                </Anchor>
            </Fragment>
        );
    }
}

export const FooterAside = connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}), {
    push
})(FooterAsideComponent);
