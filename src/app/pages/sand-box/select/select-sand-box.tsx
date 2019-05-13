import React, { Component, Fragment, SyntheticEvent } from 'react';
import { SandBox } from '../sand-box';
import { Select } from '../../../elements';
import { SelectProps } from '../../../elements/inputs/select/Select';
import { SelectList } from '../../../elements/inputs/select/SelectList';

interface ExampleProps extends SelectProps {
    label: string;
}
interface State {
    value: string;
}

const selectListProps = [
    {
        items: [
            {
                disabled: true,
                title: 'select value',
                value: 'select value'
            }, {
                title: 'option 1',
                value: 'option 1'
            }, {
                title: 'option 2',
                value: 'option 2'
            }, {
                title: 'option 3',
                value: 'option 3'
            }, {
                title: 'option 4',
                value: 'option 4'
            }
        ]
    }
];
const selectProps: Array<ExampleProps> = [
    {
        label: 'Select',
        options: selectListProps[0].items,
        value: 'select value'
    }, {
        disabled: true,
        label: 'Select disabled',
        options: [
            {
                title: 'option',
                value: '1'
            }
        ],
        value: '1'
    },
];

class SelectExample extends Component<SelectProps, State> {
    static defaultProps = {
        onChange: () => false
    };
    constructor(props: SelectProps) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    handleChange = (value: string) => {
        const { onChange } = this.props;

        this.setState({value});
        onChange(value);
    };

    render() {
        const { onChange, value, ...restProps } = this.props;

        return (
            <Select
                {...restProps}
                onChange={this.handleChange}
                value={this.state.value}
            />
        );
    }
}

const selectListItems = selectListProps.map((props, index) =>{
    return (
        <Fragment key={index}>
            <SelectList
                items={props.items}
                onClick={(value: string) => console.log('value', value)}
                style={{maxHeight: '200px'}}
            />
            <div style={{height: '300px'}}/>
        </Fragment>
    );
});

const selectItems = selectProps.map((props: ExampleProps, index: number) => {
    const { label, ...restProps} = props;

    return (
        <Fragment key={index}>
            <h3>{label}</h3>
            <SelectExample {...restProps} />
        </Fragment>
    );
});

const sandBoxItems = [ ...selectListItems, ...selectItems ];

export const SelectSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
