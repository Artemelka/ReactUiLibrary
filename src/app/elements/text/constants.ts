export const TextComponentType = {
    PARAGRAPH: Symbol('paragraph'),
    HEADING: {
        H1: Symbol('h1'),
        H2: Symbol('h2'),
        H3: Symbol('h3'),
        H4: Symbol('h4'),
        H5: Symbol('h5'),
        H6: Symbol('h6')
    },
    SPAN: Symbol('span')
};

export const WarningMessages = {
    TEXT: '!!!!!TextParagraph style expected two font-weight "bold & light"!!!',
    STATUS: '!!!!!Used font-weight: LIGHT'
};
