import React, { Component, ComponentType } from 'react';
import { Progress } from '../../../../elements';
import { SandboxLayout } from '../../../../components';
import { translate } from '../../../../../services/translate';
import { ProgressProps } from '../../../../elements/progress/types';
import { ProgressState, ComponentProps, ComponentCircularProps } from './types';

const { BlockItems, Item } = SandboxLayout;
const selectComponent = (type: string) => {
    switch (type) {
        case 'Circular':
            return Progress.Circular;
        case 'Linear':
            return Progress.Linear;
        case 'String':
            return Progress.String;
    }
};

export class ProgressComponent extends Component<ComponentProps | ComponentCircularProps, ProgressState> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            value: props.percent
        };

        this.component = selectComponent(props.type);
    }

    component: ComponentType<ProgressProps>;

    handleAddClick = () => this.setState(({value}) => ({value: value + 5}));

    handleResetClick = () => this.setState({value: 0});

    render() {
        const { value } = this.state;
        const { percent: omitPercent, type: omitType, ...restProps } = this.props;
        const { component: Component } = this;

        return (
            <BlockItems>
                <Item>
                    <Component percent={value} {...restProps}/>
                </Item>
                <Item>
                    <button onClick={this.handleAddClick} disabled={value === 100}>
                        {translate('add-progress')}
                    </button>
                    <button onClick={this.handleResetClick} disabled={value === 0}>
                        {translate('reset-progress')}
                    </button>
                </Item>
            </BlockItems>
        );
    }
}
