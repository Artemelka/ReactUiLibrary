import React from 'react';
import { connect } from 'react-redux';
import { SideBar, Layout } from '../../layouts';
import { SandBoxPage, ComponentsCollection } from '../../pages';

interface Props {
    history: {[key: string]: any};
}

export class LibraryPageComponent extends React.Component<Props> {
    handleGoHomeClick = () => this.props.history.push('/');

    render() {
        return (
            <Layout
                aside={<SideBar items={ComponentsCollection} routing={this.props.history} />}
                onGoHomeClick={this.handleGoHomeClick}
                content={<SandBoxPage/>}
                footer={<div style={{textAlign: 'right'}}>123456789</div>}
            />
        );
    }
}

export const LibraryPage = connect()(LibraryPageComponent);
