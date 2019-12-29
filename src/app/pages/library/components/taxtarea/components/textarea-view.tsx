import React from 'react';
import { connect } from 'react-redux';
import { Text } from '../../../../../elements';
import { SandboxLayout, TextArea } from '../../../../../components';
import { LocalizationState } from '../../../../../../services/localization/types';
import { localizationLabelsSelector } from '../../../../../../services/localization';
import { logger } from '../../../../../utils';

const { BlockItems, Item } = SandboxLayout;
const textareaConfigs = [
    {
        title: 'default',
        props: {
            id: 'textarea-default',
            name: 'textarea-default',
        }
    }, {
        title: 'dark Theme',
        props: {
            darkTheme: true,
            id: 'textarea-darkTheme',
            name: 'textarea-darkTheme',
        }
    }, {
        title: 'disabled',
        props: {
            disabled: true,
            id: 'textarea-disabled',
            name: 'textarea-disabled',
        }
    }, {
        title: 'maxlength',
        props: {
            id: 'textarea-maxlength',
            name: 'textarea-maxlength',
            maxlength: 10
        }
    }, {
        title: 'with placeholder',
        props: {
            id: 'textarea-placeholder',
            name: 'textarea-placeholder',
            placeholder: 'placeholder'
        }
    }, {
        title: 'readonly',
        props: {
            id: 'textarea-readonly',
            name: 'textarea-readonly',
            readonly: true,
            value: 'read only'
        }
    }, {
        title: 'with rows = 5',
        props: {
            id: 'textarea',
            name: 'textarea',
            rows: 5
        }
    }
];

export const TextareaViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <BlockItems>
        {textareaConfigs.map(({title, props}, index) => (
            <Item key={`${props.id}_${index}`}>
                <Text.H4>{title}</Text.H4>
                <TextArea
                    {...props}
                    labels={labels}
                    onChange={logger('onChange')}
                />
            </Item>
        ))}
    </BlockItems>
);

export const TextareaView = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}))(TextareaViewComponent);
