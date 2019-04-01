import React, { Fragment } from 'react';
import { SandBox } from '../sand-box';
import { Text } from '../../../elements';

interface Props {
    bold?: boolean;
    light?: boolean;
    upper?: boolean;
}
interface Params {
    label: string;
    props: Props;
}
interface Collection {
    element: React.ComponentType;
    params: Array<Params>;
}

const getParams = (name: string): Array<Params> => ([
    {
        label: `${name} bold light with warning in console`,
        props: {bold: true, light: true}
    }, {
        label: `${name} light`,
        props: {light: true}
    }, {
        label: `${name} medium`,
        props: {}
    }, {
        label: `${name} bold`,
        props: {bold: true}
    }, {
        label: `${name} upper`,
        props: {upper: true}
    }
]);
const textCollection: Array<Collection> = [{
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
    },
];

const textItems = textCollection.map(({element: Component, params}: Collection) =>
    params.map(({props, label}: Params, index: number) => (
        <Fragment key={index}>
            <Component {...props}>
                {label}
            </Component>
            {Component === Text.Span && <br/>}
        </Fragment>
    )));

export const TextSandBox = () => (
    <SandBox
        items={textItems}
    />
);
