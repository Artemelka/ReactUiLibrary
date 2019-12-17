import { StringData } from '../../types';

export function setNameSpaceCreator(prefix: string) {
    return (names: Array<string>): StringData =>
        names.reduce((acc: StringData, name: string) => {
            acc[name] = `${prefix}/${name.toUpperCase()}`;

            return acc;
        }, {});
}
