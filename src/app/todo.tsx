import * as React from 'react';

import './todo.less';

export interface ToDoProps { title: Array<string>; }

export class ToDo extends React.Component<ToDoProps, {}> {
    render() {
        const { title } = this.props;

        return (
            <div className='Todo'>
                {title.map((item, index) => <h1 key={index}>{item}</h1>)}
            </div>
        );
    }
}
