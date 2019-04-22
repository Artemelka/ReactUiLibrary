import React, { Component } from 'react';
import { SandBox } from '../sand-box';
import { DropDownPanel, DropDownDetails, DropDownSummary, IconModule } from '../../../elements';
import { logger } from '../utils';
import { DropDownPanelProps } from '../../../elements/drop-down-panel/DropDownPanel';

const { PLUS, TRASH } = IconModule.IconNames;
const dropDownPanelProps: Array<DropDownPanelProps> = [
    {
        opened: false
    }, {
        actionIcon: {
            iconName: TRASH,
            onClick: logger('click action')
        },
        opened: true
    }, {
        opened: false,
        openingByIcon: true
    }, {
        actionIcon: {
            iconName: PLUS,
            onClick: logger('click another action')
        },
        opened: false,
        openingByIcon: true
    }
];
const Header = () => <h2 style={{margin: 0}}>Heading</h2>;
const Content = () => <div style={{height: '200px'}}>Content</div>;

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
                <DropDownSummary>
                    <Header/>
                </DropDownSummary>
                <DropDownDetails>
                    <Content/>
                </DropDownDetails>
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
