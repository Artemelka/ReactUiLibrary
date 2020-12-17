import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { History } from 'history';
import { localizationLabelsSelector } from '@artemelka/react-localization';
import { Anchor } from 'elements';
import { HOME_URL } from '../../constants';
import { AppState } from '../../types';

interface NotFoundPageProps extends History {
    labels: Record<string, string>;
}

class NotFoundPageComponent extends Component<NotFoundPageProps> {
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

export default connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}), {
    push
})(NotFoundPageComponent);
