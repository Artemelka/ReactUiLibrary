import React, { Component, Fragment } from 'react';
import { SandBox } from '../sand-box';
import { DropDownPanel, DropDownDetails, DropDownSummary } from '../../../elements';
import { logger } from '../utils';
import { DropDownPanelProps } from '../../../elements/drop-down-panel/DropDownPanel';

const dropDownPanelProps: Array<DropDownPanelProps> = [
    {
        opened: false
    }, {
        onAction: logger('click action'),
        opened: true
    }
];

interface State {
    opened: boolean;
}
class DropDownPanelExample extends Component<DropDownPanelProps, State> {
    static getDerivedStateFromProps (prevState: State, nextProps: DropDownPanelProps) {
        return prevState.opened !== nextProps.opened ? {opened: nextProps.opened} : null;
    }

    constructor(props: DropDownPanelProps) {
        super(props);
        this.state = {
            opened: props.opened
        };
    }

    handleChange = () => this.setState(({opened}) => ({opened: !opened}));

    render() {
        const { onChange, opened, ...restProps} = this.props;
        return (
            <DropDownPanel
                {...restProps}
                onChange={this.handleChange}
                opened={this.state.opened}
            >
                <DropDownSummary>123456</DropDownSummary>
                <DropDownDetails>098765</DropDownDetails>
            </DropDownPanel>
        );
    }
}
const sandBoxItems = dropDownPanelProps.map((props, index) => <DropDownPanelExample {...props} key={index}/>);

export const DropDownPanelSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
