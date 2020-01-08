
export function nameSpaceCreator<T = Record<string, string>>(prefix: string) {
    return (names: Array<string>): T =>
        names.reduce((acc: any, name: string) => {
            acc[name] = `${prefix}/${name.toUpperCase()}`;

            return acc;
        }, {});
}
