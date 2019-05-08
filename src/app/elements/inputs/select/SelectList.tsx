import React, { Component, createRef, RefObject, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { SelectOptions } from './Select';
import { keyCodes } from '../../../../services';
import { translate } from '../../../../services/translate';

const style = require('./SelectList.less');
const cn = classNames.bind(style);
const { ENTER, SPACE } = keyCodes;
const targetKey = [ ENTER, SPACE ];

interface Props {
    items: Array<SelectOptions>;
    onBlur?: (event: SyntheticEvent<HTMLUListElement>) => void;
    onClick?: (item: any) => void;
    selectedItemValue?: string;
    style?: {[key: string]: string | number};
}

export class SelectList extends Component<Props> {
    static defaultProps = {
        onBlur: () => false,
        onClick: () => false
    };

    componentDidMount(): void {
        const { current } = this.selectListRef;

        if (current) {
            current.focus();
        }
    }

    handleBlur = (event: SyntheticEvent<HTMLUListElement>) => {
        const blurOnItem = this.listItems.some(item => item.element === event.relatedTarget);

        if (!blurOnItem) {
            this.props.onBlur(event);
        }
    };

    handleClick = (value: string, index: number) => () => {
        this.handleChange(value, index);
    };

    handleKeyPress = (value: string, index: number) => (event: SyntheticEvent) => {
        const { which } = event;

        if (targetKey.includes(which)) {
            this.handleChange(value, index);
        }
    };

    handleListItemRef = (index: number) => (ref: HTMLLIElement) => {
        const targetIndex = this.listItems.findIndex(item => item.index === index);

        if (targetIndex === -1) {
            this.listItems.push({element: ref, index});
        }
    };

    listItems: Array<{element: HTMLLIElement, index: number}> = [];

    handleChange = (value: string, index: number) => {
        this.props.onClick(value);
        this.listItems.filter(item => item.index === index)[0].element.blur();
    };

    selectListRef: RefObject<HTMLUListElement> = createRef();

    render() {
        const { items, selectedItemValue } = this.props;

        return (
            <ul
                className={cn('Select-list')}
                onBlur={this.handleBlur}
                ref={this.selectListRef}
                tabIndex={0}
            >
                {
                    items.map((item, index) => {
                        const {disabled, title, value} = item;
                        const tabIndex = disabled ? -1 : 0;
                        const onClick = disabled ? () => false : this.handleClick(value, index);
                        const onKeyPress = disabled ? () => false : this.handleKeyPress(value, index);

                        return (
                            <li
                                className={cn('Select-list__item', {
                                    'Select-list__item--disabled': disabled,
                                    'Select-list__item--selected': selectedItemValue === value
                                })}
                                onClick={onClick}
                                onKeyPress={onKeyPress}
                                key={index}
                                ref={this.handleListItemRef(index)}
                                role="button"
                                tabIndex={tabIndex}
                            >
                                {translate(title)}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}
