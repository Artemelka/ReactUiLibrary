import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TAG_NAME_DIV } from '../../constants';

interface PortalProps {
    containerClassName: string;
    rootElement: Element;
}

export class Portal extends Component<PortalProps> {
    constructor(props: PortalProps) {
        super(props);

        this.container = document.createElement(TAG_NAME_DIV);
        this.container.className = this.props.containerClassName;
    }

    componentDidMount() {
        this.props.rootElement.appendChild(this.container);
    }

    componentWillUnmount() {
        this.props.rootElement.removeChild(this.container);
    }

    container: Element;

    render() {
        return ReactDOM.createPortal(this.props.children, this.container);
    }
}
