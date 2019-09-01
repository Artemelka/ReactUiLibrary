import { getTextComponent } from './components';
import { TextComponentType } from './constants';

export const Text = {
    H1: getTextComponent(TextComponentType.HEADING.H1),
    H2: getTextComponent(TextComponentType.HEADING.H2),
    H3: getTextComponent(TextComponentType.HEADING.H3),
    H4: getTextComponent(TextComponentType.HEADING.H4),
    H5: getTextComponent(TextComponentType.HEADING.H5),
    H6: getTextComponent(TextComponentType.HEADING.H6),
    Paragraph: getTextComponent(TextComponentType.PARAGRAPH),
    Span: getTextComponent(TextComponentType.SPAN)
};
