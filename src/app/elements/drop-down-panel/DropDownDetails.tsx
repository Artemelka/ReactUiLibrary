import React, { Component, createRef, RefObject } from 'react';
import classNames from 'classnames/bind';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);

interface Props {
    opened?: boolean;
}

export class DropDownDetails extends Component<Props> {
    componentDidMount() {
            this.height = `${this.ref.current.getBoundingClientRect().height + 30}px`;
    }

    height = 'auto';
    ref: RefObject<HTMLDivElement> = createRef();

    render() {
        const style = this.props.opened
            ? {height: this.height}
            : {};

        return (
            <div
                className={cn('Drop-down-panel__details')}
                ref={this.ref}
                style={style}
            >
                {this.props.children}
            </div>
        );
    }
}
