import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Checkbox, Text } from '../../../../elements';
import { TranslateComponent } from '../../../../../services/translate';
import { ToggleProps } from '../../types';
import style from './SideBarToggle.less';

const cn = classNames.bind(style);
const CHECKBOX_ID = 'sidebar-toggle';

export class SideBarToggle extends Component<ToggleProps> {
    render() {
        const { checked, onChange } = this.props;

        return (
            <div className={cn('Side-bar-toggle')}>
                <Checkbox
                    checked={checked}
                    id={CHECKBOX_ID}
                    name={CHECKBOX_ID}
                    onChange={onChange}
                    toggle
                />
                <label className={cn('Side-bar-toggle__label')} htmlFor={CHECKBOX_ID}>
                    <Text.Paragraph>
                        <TranslateComponent translateKey={'Show index'}/>
                    </Text.Paragraph>
                </label>
            </div>
        );
    }
}
