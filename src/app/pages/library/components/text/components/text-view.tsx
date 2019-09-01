import React, { Fragment } from 'react';
import { SandboxLayout } from '../../../../../components';
import { Text } from '../../../../../elements';
import { Collection, Params } from './types';

const { BlockItems, Item } = SandboxLayout;
const getParams = (name: string): Array<Params> => ([
    {
        bold: true,
        children: `${name} bold light with warning in console`,
        light: true
    }, {
        children: `${name} light`,
        light: true
    },
    { children: `${name} medium` },
    { bold: true, children: `${name} bold`},
    { children: `${name} upper`, upper: true }
]);
const textCollection: Array<Collection> = [
    {
        element: Text.H1,
        params: getParams('Text.H1')
    }, {
        element: Text.H2,
        params: getParams('Text.H2')
    }, {
        element: Text.H3,
        params: getParams('Text.H3')
    }, {
        element: Text.H4,
        params: getParams('Text.H4')
    }, {
        element: Text.H5,
        params: getParams('Text.H5')
    }, {
        element: Text.H6,
        params: getParams('Text.H6')
    }, {
        element: Text.Paragraph,
        params: getParams('Text.Paragraph')
    }, {
        element: Text.Span,
        params: getParams('Text.Span')
    }
];

export const TextView = () => (
    <Fragment>
        {textCollection.map(({element: Component, params}: Collection) => (
            <BlockItems>
                {
                    params.map((props: Params, index: number) => (
                        <Item key={index}>
                            <Component {...props}/>
                            {Component === Text.Span && <br/>}
                        </Item>
                    ))
                }
            </BlockItems>
        ))}
    </Fragment>
);
