import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, goBack } from 'react-router-redux';
import { Button, ButtonsGroup } from '../../../elements';

export const LIBRARY = 'library';
export const LAYOUT = 'layout';

interface TestRouterProps {
    goBack: () => void;
    push: (path: string) => void;
}

export class TestRouterComponent extends Component<TestRouterProps> {
    handleLibraryClick = () => this.props.push(`/${LIBRARY}`);

    handleLayoutClick = () => this.props.push(`/${LAYOUT}`);

    handleGoBackClick = () => this.props.goBack();

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

export const TestRouter = connect(null, { push, goBack })(TestRouterComponent);
