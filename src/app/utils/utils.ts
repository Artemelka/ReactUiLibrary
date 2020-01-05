
export const logger = (text: string) => () => console.log(text);

export const getOmitProps = (props: Record<string, any>, ignorePropKeys: Array<string>): Record<string, any> => {
    const omitProps = {...props};

    ignorePropKeys.forEach(key => { delete  omitProps[key]; });

    return omitProps;
};

let counter = 0;

export const getUniqId = () => {
    counter = counter + 10 + Number(Math.random().toString().slice(2));

    return counter.toString();
};

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
