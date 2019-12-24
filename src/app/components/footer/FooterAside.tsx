import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { History } from 'history';
import { Anchor } from '../../elements';
import { localizationLabelsSelector } from '../../../services/localization';
import { LocalizationState } from '../../../services/localization/types';
import { PROJECT_LINK, HOME_URL } from '../../constants';

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

export const FooterAside = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}), {
    push
})(FooterAsideComponent);
