import React from 'react';
import classNames from 'classnames';
import './Anchor.less';

interface Props {
    active?: boolean;
    disabled?: boolean;
    href?: string;
    label: string;
    newPage?: boolean;
    onClick?: (event: React.SyntheticEvent<EventTarget>) => void;
}
interface ComponentType extends Props {
    anchorClasses: string;
    target?: string;

}

const LINK_TARGET_BLANK = '_blank';

const AnchorLink = ({ anchorClasses, href, label, onClick, target }: ComponentType) => (
    <a
        href={href}
        className={anchorClasses}
        onClick={onClick}
        target={target}
    >
        {label}
    </a>
);
const PseudoLink = ({ anchorClasses, label, onClick }: ComponentType) => (
    <span
        className={anchorClasses}
        onClick={onClick}
        tabIndex={1}
    >
        {label}
    </span>
);

export class Anchor extends React.Component<Props> {
    render() {
        const { active, disabled, href, label, newPage, onClick } = this.props;
        const Component = (Boolean(href) && !disabled) ? AnchorLink : PseudoLink;
        const anchorClasses = classNames('Anchor', {
            'Anchor--active': active,
            'Anchor--disabled': disabled
        });
        const anchorProps: ComponentType = { active, anchorClasses, label, onClick };

        if (href) {
            anchorProps.href = href;

            if (newPage) {
                anchorProps.target = LINK_TARGET_BLANK;
            }
        }

        return <Component {...anchorProps}/>;
    }
}
