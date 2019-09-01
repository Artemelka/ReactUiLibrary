import React, { Component } from 'react';
import { DropDownPanel, DropDownDetails, DropDownSummary } from '../../../../../elements';
import { DropDownPanelContainerState, DropDownPanelContainerProps } from './types';

const Header = () => <h2 style={{margin: 0}}>Heading</h2>;
const Content = ({index}: {index: number}) => <div style={{height: `${index + 1}00px`}}>Content</div>;

export class DropDownPanelContainer extends Component<DropDownPanelContainerProps, DropDownPanelContainerState> {
    static getDerivedStateFromProps (prevState: DropDownPanelContainerState, nextProps: DropDownPanelContainerProps) {
        return prevState.opened !== nextProps.opened ? {opened: nextProps.opened} : null;
    }

    constructor(props: DropDownPanelContainerProps) {
        super(props);
        this.state = {
            opened: props.opened
        };
    }

    handleChange = () => this.setState(({opened}) => ({opened: !opened}));

    render() {
        const { onChange, opened, index, ...restProps} = this.props;

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
                    <Content index={index}/>
                </DropDownDetails>
            </DropDownPanel>
        );
    }
}
