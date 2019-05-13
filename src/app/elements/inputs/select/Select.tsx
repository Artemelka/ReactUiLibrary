import React, { Component, createRef, RefObject, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { Input } from '../input/Input';
import { SelectList } from './SelectList';
import { IconModule } from '../../icon';

const style = require('./Select.less');
const cn = classNames.bind(style);

export interface SelectOptions {
    disabled?: boolean;
    title: string;
    value: string;
}
export interface SelectProps {
    disabled?: boolean;
    listOpenTop?: boolean;
    multiple?: boolean;
    maxListHeight?: number;
    name?: string;
    onChange?: (value: string) => void;
    options: Array<SelectOptions>;
    value: string;
}
interface State {
    canOpenDown: boolean;
    opened: boolean;
}

export class Select extends Component<SelectProps, State> {
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
        if (this.inputIconRef.current !== event.relatedTarget) {
            this.setState({opened: false});
        }
    };

    handleOpenClick = () => {
        this.setState(({opened}) => ({opened: !opened}));
    };

    handleSelect = (value: string) => {
        this.props.onChange(value);
        this.setState({opened: false});
    };

    inputIconRef: RefObject<HTMLButtonElement> = createRef();
    selectRef: RefObject<HTMLDivElement> = createRef();

    render() {
        const { disabled, listOpenTop, maxListHeight, multiple, onChange, options, value, ...restProps } = this.props;
        const { canOpenDown, opened } = this.state;
        const optionListStyle = {maxHeight: `${maxListHeight}px`};
        const iconProps = {
            alwaysVisible: true,
            name: IconModule.IconNames.ANGLE.DOWN,
            onClick: this.handleOpenClick
        };

        return (
            <div
                className={cn('Select', {'Select--list-on-top': !canOpenDown || listOpenTop})}
                ref={this.selectRef}
            >
                <Input
                    {...restProps}
                    disabled={disabled}
                    icon={iconProps}
                    InputIconRef={this.inputIconRef}
                    value={value}
                    readOnly
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
