import React, { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import { localizationLabelsSelector } from '@artemelka/react-localization';
import { Progress } from 'elements';
import { SandboxLayout } from 'components';
import { AppState } from '../../../../../types';
import { ProgressProps } from '../../../../../elements/progress/types';
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

type BaseProps = ComponentProps | ComponentCircularProps;
type Props = BaseProps & { labels: Record<string, string> };

export class ProgressComponentContainer extends Component<Props, ProgressState> {
    constructor(props: Props) {
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
        const { percent: omitPercent, type: omitType, labels, ...restProps } = this.props;
        const { component: Component } = this;

        return (
            <BlockItems>
                <Item>
                    <Component percent={value} {...restProps}/>
                </Item>
                <Item>
                    <button onClick={this.handleAddClick} disabled={value === 100}>
                        {labels['add-progress']}
                    </button>
                    <button onClick={this.handleResetClick} disabled={value === 0}>
                        {labels['reset-progress']}
                    </button>
                </Item>
            </BlockItems>
        );
    }
}

export const ProgressComponent = connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}))(ProgressComponentContainer);
