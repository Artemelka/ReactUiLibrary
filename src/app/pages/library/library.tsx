import React from 'react';
import { SideBar, Layout } from '../../layouts';

export class LibraryPage extends React.Component {
    render() {
        return (
            <Layout
                aside={<SideBar />}
            />
        );
    }
}