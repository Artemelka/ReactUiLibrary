import React, { Component, Fragment } from 'react';
import { SandBox } from '../sand-box';
import { Checkbox } from '../../../elements/inputs';
import { CheckboxProps } from '../../../elements/inputs/checkbox/checkbox';
import { logger } from '../utils';

interface Props extends CheckboxProps {
    heading: string;
}
interface State {
    checked: boolean;
}

const checkboxProps: Array<Props> = [
    {
        disabled: true,
        checked: true,
        heading: 'checkbox disabled',
        name: 'test1',
        onChange: logger('checkbox Click disabled')
    }, {
        onChange: logger('checkbox Click'),
        heading: 'checkbox',
        name: 'test2',
        checked: false
    }, {
        heading: 'checkbox without prop checked',
        name: 'test3',
        onChange: logger('checkbox without prop checked Click')
    },
];

class CheckboxExample extends Component<Props, State> {
    state = {
        checked: this.props.checked
    };

    handleChange = () => {
        this.setState(({checked}) => ({checked: !checked}));
        this.props.onChange();
    };

    render() {
        const { checked, heading, onChange, ...restProps} = this.props;

        return (
            <Fragment>
                <h3>{heading}</h3>
                <Checkbox
                    {...restProps}
                    onChange={this.handleChange}
                    checked={this.state.checked}
                />
            </Fragment>
        );
    }
}

const sandBoxItems = checkboxProps.map((props: Props, index: number) =>
    <CheckboxExample {...props} key={index}/>
);

export const CheckboxSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
