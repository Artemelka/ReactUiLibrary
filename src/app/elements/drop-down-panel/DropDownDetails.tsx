import React, { Component, createRef, RefObject } from 'react';

interface Props {
    className?: string;
    onCreateRef?: (ref: HTMLDivElement) => void;
    onRemoveRef?: (ref: HTMLDivElement) => void;
    opened?: boolean;
}

export class DropDownDetails extends Component<Props> {
    static defaultProps = {
        onCreateRef: () => false,
        onRemoveRef: () => false
    };

    componentDidMount() {
            this.height = `${this.ref.current.scrollHeight}px`;
            this.props.onCreateRef(this.ref.current);
    }

    height = 'auto';
    ref: RefObject<HTMLDivElement> = createRef();

    render() {
        const { children, className, opened } = this.props;
        const style = opened ? {height: this.height} : {};

        return (
            <div
                className={className}
                ref={this.ref}
                style={style}
            >
                {children}
            </div>
        );
    }
}
