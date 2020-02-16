import React, { Component } from 'react';

import classNames from 'classnames/bind';

import { LocalizationState } from '../../../../../services/localization/types';
import { Checkbox, Text } from '../../../../elements';
import { ToggleProps } from '../../types';
import style from './SideBarToggle.less';

const cn = classNames.bind(style);
const CHECKBOX_ID = 'sidebar-toggle';

export class SideBarToggleComponent extends Component<ToggleProps> {
    render() {
        const { checked, labels, onChange } = this.props;

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
                        {labels['Show index'] || 'Show index'}
                    </Text.Paragraph>
                </label>
            </div>
        );
    }
}


