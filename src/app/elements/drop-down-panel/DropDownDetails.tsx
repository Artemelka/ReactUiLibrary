import React, { Component, createRef, RefObject } from 'react';

interface Props {
    className?: string;
    opened?: boolean;
}

export class DropDownDetails extends Component<Props> {
    componentDidMount() {
            this.height = `${this.ref.current.getBoundingClientRect().height + 30}px`;
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
