
export function nameSpaceCreator(prefix: string) {
    return (names: Array<string>): Record<string, string> =>
        names.reduce((acc: Record<string, string>, name: string) => {
            acc[name] = `${prefix}/${name.toUpperCase()}`;

            return acc;
        }, {});
}
