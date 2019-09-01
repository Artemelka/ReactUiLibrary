import React from 'react';
import { SandboxLayout } from '../../../../../components';
import { ButtonsGroup, Text } from '../../../../../elements';
import { TranslateComponent, translate } from '../../../../../../services/translate';
import { logger } from '../../../../../../services/utils/utils';
import { buttonsGroupProps, buttonGroupItems } from './constants';
import { ButtonGroupItems } from './types';

const { BlockItems, Item } = SandboxLayout;

export const ButtonGroupView = () => (
    <BlockItems>
        {buttonGroupItems.map((
            { props: { buttonComponent: Component, ...restProps }, title }: ButtonGroupItems,
            index: number
        ) => (
            <Item key={title + index}>
                <Text.H5>
                    <TranslateComponent translateKey={title}/>
                </Text.H5>
                <ButtonsGroup.Component {...restProps}>
                    {buttonsGroupProps.map(({label, ...rest}, index) => (
                        <Component
                            key={index + title}
                            {...rest}
                            label={translate(label)}
                            onClick={logger(`click ${label}`)}
                        />
                    ))}
                </ButtonsGroup.Component>
            </Item>
        ))}
    </BlockItems>
);
