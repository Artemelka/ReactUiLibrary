import React, { Component, createRef, RefObject, FocusEvent } from 'react';
import classNames from 'classnames/bind';
import { Input } from '../input/Input';
import { SelectList } from './SelectList';
import { IconModule } from '../../icon';
import { SelectProps, SelectState } from './types';

const style = require('./Select.less');
const cn = classNames.bind(style);
const { ANGLE_DOWN, ANGLE_UP } = IconModule.IconNames;

export class Select extends Component<SelectProps, SelectState> {
    static defaultProps = {
        maxListHeight: 100,
        onChange: () => false
    };

    state = {
        canOpenDown: true,
        opened: false
    };

    componentDidMount(): void {
        const { current } = this.selectRef;

        if (current) {
            const { maxListHeight } = this.props;
            const residualHeight = document.documentElement.clientHeight - current.offsetTop;
            const canOpenDown = (residualHeight - maxListHeight) > 0;

            if (this.state.canOpenDown !== canOpenDown) {
                this.setState({canOpenDown});
            }
        }
    }

    handleListBlur = (event: FocusEvent) => {
        const { relatedTarget } = event;
        const blurOnIcon = this.inputIconRef.current === relatedTarget;
        const blurOnInput = this.inputRef.current === relatedTarget;
        const closeList = !(blurOnIcon || blurOnInput);

        if (closeList) {
            this.setState({opened: false});
        }
    };

    handleOpenClick = () => this.setState(({opened}) => ({opened: !opened}));

    handleSelect = (value: string) => {
        this.props.onChange(value);
        this.setState({opened: false});
        this.inputRef.current.focus();
    };

    inputIconRef: RefObject<HTMLButtonElement> = createRef();
    inputRef: RefObject<HTMLInputElement> = createRef();
    selectRef: RefObject<HTMLDivElement> = createRef();

    render() {
        const {
            disabled,
            id,
            inputWidth,
            listOpenTop,
            maxListHeight,
            multiple: omitMultiple,
            name,
            onChange: omitOnChange,
            options,
            value,
            ...restProps
        } = this.props;
        const { canOpenDown, opened } = this.state;
        const optionListStyle = {maxHeight: `${maxListHeight}px`};
        const iconProps = {
            alwaysVisible: true,
            name: opened ? ANGLE_UP : ANGLE_DOWN,
            onClick: this.handleOpenClick
        };
        const inputValue = options.find(item => item.value === value).title;

        return (
            <div
                className={cn('Select', {'Select--list-on-top': !canOpenDown || listOpenTop})}
                ref={this.selectRef}
            >
                <Input
                    {...restProps}
                    cursorPointer
                    disabled={disabled}
                    icon={iconProps}
                    id={id}
                    InputIconRef={this.inputIconRef}
                    inputRef={this.inputRef}
                    name={name}
                    onClick={this.handleOpenClick}
                    readOnly
                    value={inputValue}
                    width={inputWidth}
                />
                {opened &&
                    <div className={cn('Select__options')}>
                        <SelectList
                            items={options}
                            onBlur={this.handleListBlur}
                            onClick={this.handleSelect}
                            selectedItemValue={value}
                            style={optionListStyle}
                        />
                    </div>
                }
            </div>


        );
    }
}
