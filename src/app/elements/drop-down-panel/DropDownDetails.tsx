import React, { Component, createRef, RefObject } from 'react';

interface Props {
    className?: string;
    opened?: boolean;
}

export class DropDownDetails extends Component<Props> {
    state = {
        height: 'auto'
    };

    componentDidMount() {
        let childHeight = 0;
        // correct height after render children
        setTimeout(() => {
            childHeight = [...this.ref.current.children].reduce((result, el) => result + el.clientHeight, 0);
            this.height = `${childHeight}px`;
        }, 500);
    }

    componentDidUpdate() {
        this.height = `${this.ref.current.scrollHeight}px`;
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
