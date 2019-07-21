import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';

const style = require('./CodeBlock.less');
const cn = classNames.bind(style);
const OPEN_QUOTE = '<';
const CLOSE_QUOTE = '</';
const END_QUOTE = '>';
const SINGLE_CLOSE_QUOTE = '/>';

type TextProps = {
    label: string,
    inImport?: boolean
};
type TagProps = {
    name: string,
    end?: boolean,
    single?: boolean
};

const Keyword = ({word}: {word: string}) => <span className={cn('Code-block__keyword')}>{word} </span>;

const Path = ({path}: {path: string}) => <span className={cn('Code-block__path')}>"{path}";</span>;

const Text = ({label, inImport}: TextProps) =>
    <span className={cn('Code-block__code')}>{inImport ? `{ ${label} } ` : label}</span>;

const Tag = ({name, end, single}: TagProps) => (
    <span className={cn('Code-block__tag')}>
        {end ? CLOSE_QUOTE : OPEN_QUOTE}{name}{single ? SINGLE_CLOSE_QUOTE : END_QUOTE}
    </span>
);

interface Props {
    name: string;
    path: string;
    text: string;
    single?: boolean;
}

export class CodeBlock extends Component<Props> {
    render() {
        const { name, path, text, single } = this.props;

        return (
            <pre className={cn('Code-block')}>
                <code className={cn('Code-block__inner')}>
                    <Keyword word="import"/>
                    <Text label={name} inImport/>
                    <Keyword word="from"/>
                    <Path path={path}/>
                    <br/>
                    <br/>
                    {single
                        ? <Tag name={name} single/>
                        : (
                            <Fragment>
                                <Tag name={name}/>
                                <Text label={text}/>
                                <Tag name={name} end/>
                            </Fragment>
                        )
                    }
                </code>
            </pre>
        );
    }
}
