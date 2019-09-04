import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Button, ButtonsGroup } from '../../../elements';

export const LIBRARY = 'library';
export const LAYOUT = 'layout';

export class TestRouterComponent extends Component<RouteComponentProps> {
    handleLibraryClick = () => this.props.history.push(`/${LIBRARY}`);

    handleLayoutClick = () => this.props.history.push(`/${LAYOUT}`);

    handleGoBackClick = () => this.props.history.goBack();

    render() {
        return (
            <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                <Button
                    onClick={this.handleLibraryClick}
                    label={LIBRARY}
                />
                <Button
                    onClick={this.handleLayoutClick}
                    label={LAYOUT}
                />
                <Button
                    onClick={this.handleGoBackClick}
                    label="link-back"
                />
            </ButtonsGroup.Component>
        );
    }
}

export const TestRouter = withRouter(TestRouterComponent);
