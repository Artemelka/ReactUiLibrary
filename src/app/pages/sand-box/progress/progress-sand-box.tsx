import React, { Component } from 'react';
import { SandBox } from '../sand-box';
import { Progress } from '../../../elements';

const wrapperStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
};

interface Props {
    radius: number;
    percent: number;
    strokeWidth: number;
}
interface LinearProps {
    percent: number;
}
interface State {
    value: number;
}

class CircleProgressExamples extends Component<Props, State> {
    state = {
        value: this.props.percent
    };
    handleClick = () => {
        this.setState(({value}) => ({value: value + 5}));
        console.log('$');
    };

    render() {
        const { percent, ...restProps } = this.props;

        return (
            <div style={wrapperStyle}>
                <Progress.Circular percent={this.state.value} {...restProps}/>
                <button onClick={this.handleClick} disabled={this.state.value === 100}>Add progress</button>
            </div>
        );
    }
}

class LinearProgressExample extends Component<LinearProps, State> {
    state = {
        value: this.props.percent
    };
    handleClick = () => {
        this.setState(({value}) => ({value: value + 5}));
    };

    render() {
        return (
            <div>
                <Progress.Linear percent={this.state.value} />
                <button onClick={this.handleClick} disabled={this.state.value === 100}>Add progress</button>
            </div>
        );
    }
}

const progressProps = [
    {
        id: 'test1',
        percent: 10
    }, {
        id: 'test2',
        percent: 40
    }, {
        id: 'test2',
        percent: 60
    }, {
        id: 'test2',
        percent: 90
    }
];
const progressCircularProps = [
    {
        id: 'Circular1',
        strokeWidth: 10,
        radius: 50,
        percent: 10,
        darkColor: true
    }, {
        id: 'Circular2',
        strokeWidth: 10,
        radius: 80,
        percent: 40
    }, {
        id: 'Circular2',
        strokeWidth: 10,
        radius: 110,
        percent: 60,
        darkColor: true
    }, {
        id: 'Circular2',
        strokeWidth: 10,
        radius: 200,
        percent: 90
    }
];

const progressCircularExample = progressCircularProps.map(props => () => <CircleProgressExamples {...props} key={props.id}/>);
const progressLinearExample = progressProps.map(props => () => <LinearProgressExample {...props} key={props.id}/>);
const progressStringExample = progressProps.map(props => () => <Progress.String {...props} key={props.id}/>);
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
