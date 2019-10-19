import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { History } from 'history';
import { Anchor } from '../../elements';
import { TranslateComponent } from '../../../services/translate';
import { HOME_URL } from '../../constants';

class NotFoundPageComponent extends Component<History> {
    handleClick = () => this.props.push(HOME_URL);

    render() {
        return (
            <div>
                <h2>Page not found</h2>
                <Anchor onClick={this.handleClick}>
                    <TranslateComponent translateKey={'go-to-home'} />
                </Anchor>
            </div>
        );
    }
}

export default connect(null, { push })(NotFoundPageComponent);
