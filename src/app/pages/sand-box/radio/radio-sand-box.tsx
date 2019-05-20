import React, { Component, Fragment } from 'react';
import { SandBox } from '../sand-box';
import { RadioButtons } from '../../../elements';
import { RadioButtonProps } from '../../../elements/inputs/radio/RadioButtons';
import { logger } from '../utils';

const handleChange = (value: string) => logger(`change: ${value}`)();
const checkboxProps: Array<RadioButtonProps> = [
    {
        id: 'test1',
        label: 'label 1',
        value: 'test1'
    }, {
        id: 'test2',
        label: 'label 2',
        value: 'test2'
    }, {
        disabled: true,
        id: 'test3',
        label: 'label 3',
        value: 'test3'
    },
];
const itemsHeading = [
    {
        title: 'Radio buttons default',
        props: {
            onChange: handleChange,
            name: 'test1',
        }
    }, {
        title: 'Radio buttons vertical',
        props: {
            column: true,
            onChange: handleChange,
            name: 'test2',
        }
    }
];

interface Props {
    column?: boolean;
    items: Array<RadioButtonProps>;
    index?: number;
    name: string;
    onChange?: (value: string) => void;
}
interface State {
    value: string;
}

class RadioButtonsExamples extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.items = props.items.map(item => ({...item, id: `${item.id}_${props.index}`}));
    }
    state = {
        value: 'test2'
    };

    items: Array<RadioButtonProps>;

    handleChange = (value: string) => {
        this.setState({value});
        this.props.onChange(`${value}_${this.props.index}`);
    };

    render() {
        const { column, name } = this.props;

        return (
            <RadioButtons
                column={column}
                items={this.items}
                value={this.state.value}
                name={name}
                onChange={this.handleChange}
            />
        );
    }
}

const sandBoxItems = itemsHeading.map(({title, props}, index) => () =>  (
    <Fragment key={index}>
        <h3>{title}</h3>
        <RadioButtonsExamples items={checkboxProps} {...props} index={index}/>
    </Fragment>
));

export const RadioButtonsSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
