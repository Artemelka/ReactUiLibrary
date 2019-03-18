import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../elements';
import '../sand-box.less';

export const TextSandBox = () => {
    return (
        <div className={classNames('Sandbox')}>
            <div className={classNames('Sandbox__item')}>
                <Text.H1 bold light>
                    Text.H1 bold light with warning in console
                </Text.H1>
                <Text.H1>
                    Text.H1 medium
                </Text.H1>
                <Text.H1 bold>
                    Text.H1 bold
                </Text.H1>
                <Text.H1 upper>
                    Text.H1 upper
                </Text.H1>
            </div>
            <div className={classNames('Sandbox__item')}>
                <Text.H2 light>
                    Text.H2 light
                </Text.H2>
                <Text.H2 >
                    Text.H2 medium
                </Text.H2>
                <Text.H2 bold>
                    Text.H2 bold
                </Text.H2>
                <Text.H2 upper>
                    Text.H2 upper
                </Text.H2>
            </div>
            <div className={classNames('Sandbox__item')}>
                <Text.H3 light>
                    Text.H2 light
                </Text.H3>
                <Text.H3 >
                    Text.H2 medium
                </Text.H3>
                <Text.H3 bold>
                    Text.H2 bold
                </Text.H3>
                <Text.H3 upper>
                    Text.H3 bold upper
                </Text.H3>
            </div>
            <div className={classNames('Sandbox__item')}>
                <Text.H4 light>
                    Text.H2 light
                </Text.H4>
                <Text.H4 >
                    Text.H2 medium
                </Text.H4>
                <Text.H4 bold>
                    Text.H2 bold
                </Text.H4>
                <Text.H4 upper>
                    Text.H4 light upper
                </Text.H4>
            </div>
            <div className={classNames('Sandbox__item')}>
                <Text.H5 light>
                    Text.H2 light
                </Text.H5>
                <Text.H5 >
                    Text.H2 medium
                </Text.H5>
                <Text.H5 bold>
                    Text.H2 bold
                </Text.H5>
                <Text.H5 upper >
                    Text.H5 upper
                </Text.H5>
            </div>
            <div className={classNames('Sandbox__item')}>
                <Text.H6 light>
                    Text.H2 light
                </Text.H6>
                <Text.H6 >
                    Text.H2 medium
                </Text.H6>
                <Text.H6 bold>
                    Text.H2 bold
                </Text.H6>
                <Text.H6 upper>
                    Text.H6 upper
                </Text.H6>
            </div>
            <div className={classNames('Sandbox__item')}>
                <Text.Paragraph light>
                    Text.Paragraph light
                </Text.Paragraph>
                <Text.Paragraph >
                    Text.Paragraph medium
                </Text.Paragraph>
                <Text.Paragraph bold>
                    Text.Paragraph bold
                </Text.Paragraph>
                <Text.Paragraph upper>
                    Text.Paragraph upper
                </Text.Paragraph>
            </div>
            <div className={classNames('Sandbox__item')}>
                <Text.Span light>
                    Text.Span light
                </Text.Span>
                <br/>
                <Text.Span >
                    Text.Span medium
                </Text.Span>
                <br/>
                <Text.Span bold>
                    Text.Span bold
                </Text.Span>
                <br/>
                <Text.Span upper>
                    Text.Span upper
                </Text.Span>
            </div>
        </div>
    );
};