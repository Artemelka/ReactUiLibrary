import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { History } from 'history';
import { Anchor } from '../../elements';
import { localizationLabelsSelector, LocalizationState } from '../../../services/localization';
import { HOME_URL } from '../../constants';

class NotFoundPageComponent extends Component<History & { labels: Record<string, string>}> {
    handleClick = () => this.props.push(HOME_URL);

    render() {
        const { labels } = this.props;

        return (
            <div>
                <h2>{labels['page-not-found'] || 'Page not found'}</h2>
                <Anchor onClick={this.handleClick}>
                    {labels['go-to-home']}
                </Anchor>
            </div>
        );
    }
}

export default connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}), {
    push
})(NotFoundPageComponent);
