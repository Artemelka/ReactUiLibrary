import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Button } from '../../elements';

interface ButtonShowModalProps {
    accent?: boolean;
    label: string;
    modalName: string;
}

export class ButtonShowModalComponent extends Component<ButtonShowModalProps & RouteComponentProps> {
    handleClick = () => {
        const { history, location: { pathname }, modalName } = this.props;

        history.push(`${pathname}/${modalName}`);
    };

    render() {
        const { accent, label } = this.props;

        return (
            <Button
                accent={accent}
                label={label}
                onClick={this.handleClick}
            />
        );
    }
}

export const ButtonShowModal = withRouter(ButtonShowModalComponent);
