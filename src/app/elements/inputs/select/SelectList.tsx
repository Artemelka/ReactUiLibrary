import React, { Component, FocusEvent } from 'react';
import classNames from 'classnames/bind';
import { SelectListItem } from './SelectListItem';
import { keyCodes } from '../../../../services';
import { SelectListProps } from './types';
import style from './SelectList.less';

const cn = classNames.bind(style);
const { DOWN, TAB, UP } = keyCodes;

export class SelectList extends Component<SelectListProps> {
    static defaultProps = {
        onBlur: () => false,
        onClick: () => false
    };

    constructor(props: SelectListProps) {
        super(props);

        this.firstItemIndex = props.items[0].disabled ? 1 : 0;
        this.lastItemIndex = props.items.length - 1;
    }

    componentDidMount(): void {
        if (this.listItemsRefs.length) {
            const { items, selectedItemValue } = this.props;
            const selectItemIndex = items.findIndex(item => item.value === selectedItemValue);

            this.listItemsRefs[selectItemIndex].element.focus();
        }
    }

    getNextActiveIndex = (index: number): number => {
        const nextIndex = index + 1;

        if (nextIndex <= this.lastItemIndex) {
            return this.props.items[nextIndex].disabled ? this.getNextActiveIndex(nextIndex) : nextIndex;
        }

        return this.firstItemIndex;
    };

    getPrevActiveIndex = (index: number): number => {
        const prevIndex = index - 1;

        if (prevIndex >= 0) {
            if (this.props.items[prevIndex].disabled) {
                return this.getPrevActiveIndex(prevIndex);
            }

            if (prevIndex >= this.firstItemIndex) {
                return prevIndex;
            }
        }

        return this.lastItemIndex;
    };

    setNextItemFocus = (nextIndex: number) => this.listItemsRefs[nextIndex].element.focus();

    handleItemBlur = (event: FocusEvent) => {
        const blurOnItem = this.listItemsRefs.some(item => item.element === event.relatedTarget);

        if (!blurOnItem) {
            this.props.onBlur(event);
        }
    };

    handleKeyPress = (index: number, keyCode: number, shiftKey: boolean) => {
        if (keyCode === DOWN || keyCode === TAB) {
            const nextIndex = this.getNextActiveIndex(index);

            this.setNextItemFocus(nextIndex);
        }

        if (keyCode === UP || (shiftKey && keyCode === TAB)) {
            const prevIndex = this.getPrevActiveIndex(index);

            this.setNextItemFocus(prevIndex);
        }
    };

    handleListItemRef = (ref: HTMLLIElement, index: number) => {
        if (!ref) {
            this.listItemsRefs = this.listItemsRefs.filter(item => item.index !== index);
            return;
        }

        const targetIndex = this.listItemsRefs.findIndex(item => item.index === index);

        if (targetIndex === -1) {
            this.listItemsRefs.push({element: ref, index});
        }
    };

    firstItemIndex: number;
    lastItemIndex: number;
    listItemsRefs: Array<{element: HTMLLIElement, index: number}> = [];

    render() {
        const { items, onClick, selectedItemValue, style } = this.props;

        return (
            <ul className={cn('Select-list')} style={style}>
                {
                    items.map(({disabled, title, value}, index) => (
                            <SelectListItem
                                className={cn('Select-list__item', {
                                    'Select-list__item--disabled': disabled,
                                    'Select-list__item--selected': selectedItemValue === value
                                })}
                                disabled={disabled}
                                index={index}
                                onBlur={this.handleItemBlur}
                                onClick={onClick}
                                onKeyPress={this.handleKeyPress}
                                key={`${index}_${value}`}
                                listItemRef={this.handleListItemRef}
                                title={title}
                                value={value}
                            />
                        )
                    )}
            </ul>
        );
    }
}
