import React, { Component } from 'react';
import { SandBox } from '../sand-box';
import { Progress } from '../../../elements';

const wrapperStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
};

interface Props {
    size: number;
    value: number;
}

class CircleProgressExamples extends Component<Props, {value: number}> {
    state = {
        value: this.props.value
    };
    handleClick = () => {
        this.setState(({value}) => ({value: value + 2}));
        console.log('$');
    };

    render() {
        return (
            <div style={wrapperStyle}>
                <Progress.Circular size={this.props.size} value={this.state.value}/>
                <button onClick={this.handleClick}>Add progress</button>
            </div>
        );
    }
}

const progressProps = [
    {
        id: 'test1',
        size: 50,
        value: 10
    }, {
        id: 'test2',
        size: 80,
        value: 40
    }, {
        id: 'test2',
        size: 110,
        value: 60
    }, {
        id: 'test2',
        size: 150,
        value: 90
    }
];

const progressCircularExample = progressProps.map(props => <CircleProgressExamples {...props} key={props.id}/>);
const progressLinearExample = progressProps.map(props => <Progress.Linear {...props} key={props.id}/>);
const progressStringExample = progressProps.map(props => <Progress.String {...props} key={props.id}/>);
const sandBoxItems = [
    ...progressCircularExample,
    ...progressLinearExample,
    ...progressStringExample
];

export const ProgressSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
