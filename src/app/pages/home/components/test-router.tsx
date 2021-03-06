import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, goBack } from 'connected-react-router';
import { Button, ButtonsGroup } from '../../../elements';

export const LIBRARY = 'library';
export const LAYOUT = 'layout';
export const TRANSLATE_EDITOR = 'translate-editor';
export const FINAL_FORM = 'final-form';

interface TestRouterProps {
    goBack: () => void;
    push: (path: string) => void;
}

export class TestRouterComponent extends Component<TestRouterProps> {
    handleLibraryClick = () => this.props.push(`/${LIBRARY}`);

    handleLayoutClick = () => this.props.push(`/${LAYOUT}`);

    handleEditorClick = () => this.props.push(`/${TRANSLATE_EDITOR}`);

    handleFormClick = () => this.props.push(`/${FINAL_FORM}`);

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
                    onClick={this.handleEditorClick}
                    label={TRANSLATE_EDITOR}
                />
                <Button
                    onClick={this.handleFormClick}
                    label="final-form"
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
