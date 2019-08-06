import React from 'react';
import { SandboxLayout } from '../../../../components';
import { Text } from '../../../../elements';
import { TextareaContainer } from './textarea-container';
import { logger } from '../../utils';

const { BlockItems, Item } = SandboxLayout;
const textareaConfigs = [
    {
        title: 'default',
        props: {id: 'textarea-default'}
    }, {
        title: 'dark Theme',
        props: {
            darkTheme: true,
            id: 'textarea-darkTheme'
        }
    }, {
        title: 'disabled',
        props: {
            disabled: true,
            id: 'textarea-disabled'
        }
    }, {
        title: 'maxlength',
        props: {
            id: 'textarea-maxlength',
            maxlength: 10
        }
    }, {
        title: 'with placeholder',
        props: {
            id: 'textarea-placeholder',
            placeholder: 'placeholder'
        }
    }, {
        title: 'readonly',
        props: {
            id: 'textarea-readonly',
            readonly: true,
            value: 'read only'
        }
    }, {
        title: 'with rows = 5',
        props: {
            id: 'textarea',
            rows: 5
        }
    }
];

export const TextareaView = () => (
    <BlockItems>
        {textareaConfigs.map(({title, props}, index) => (
            <Item key={`${props.id}_${index}`}>
                <Text.H4>{title}</Text.H4>
                <TextareaContainer
                    {...props}
                    onChange={logger('onChange')}
                />
            </Item>
        ))}
    </BlockItems>
);
