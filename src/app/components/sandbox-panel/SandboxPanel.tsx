import React, { Component, ComponentType } from 'react';
import { DropDownPanel, DropDownDetails, DropDownSummary } from '../../elements';

type AnyData = {[key: string]: any};
type DataProps = {
    detailsProps?: AnyData;
    summaryProps: AnyData;
};
interface Props {
    detailsComponent?: ComponentType;
    dataProps?: DataProps;
    summaryComponent: ComponentType;
    opened?: boolean;
}
interface State {
    opened: boolean;
}

export class SandboxPanel extends Component<Props, State> {
    static defaultProps = {
        dataProps: {}
    };
    static getDerivedStateFromProps (prevState: State, nextProps: Props) {
        return prevState.opened !== nextProps.opened ? {opened: nextProps.opened} : null;
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            opened: props.opened
        };
    }

    handleChange = () => this.setState(({opened}) => ({opened: !opened}));

    render() {
        const {
            detailsComponent: Content,
            dataProps: { detailsProps = {}, summaryProps = {} },
            summaryComponent: Header
        } = this.props;

        return (
            <DropDownPanel
                darkColor
                onChange={this.handleChange}
                opened={this.state.opened}
                openingByIcon
            >
                <DropDownSummary>
                    <Header {...summaryProps}/>
                </DropDownSummary>
                {Content &&
                    <DropDownDetails>
                        <Content {...detailsProps}/>
                    </DropDownDetails>
                }
            </DropDownPanel>
        );
    }
}
