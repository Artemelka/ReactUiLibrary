import * as React from 'react';
import axios from 'axios';

import './app.less';

export interface AppPropsType { title: Array<string>; }

const TEST_URL = '/api/getUsername';
const requestTestServer = (url: string, queryParams?: string): any => {
    const finalUrl = queryParams ? `${url}?${queryParams}` : url;

    axios.get(finalUrl)
        .then(res => {
            console.log('persons', res.data);

            return res.data;
        }).catch(requestError => console.log(requestError));
};

export class App extends React.Component<AppPropsType, {}> {
    componentDidMount(): void {
        requestTestServer(TEST_URL, 'name=tim');
    }

    handleClick = () => requestTestServer(TEST_URL);

    render() {
        const { title } = this.props;

        return (
            <div className='App'>
                {title.map((item, index) => <h1 key={index}>{item}</h1>)}
                <button onClick={this.handleClick}>REQUEST</button>
            </div>
        );
    }
}
