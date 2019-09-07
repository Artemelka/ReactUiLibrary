export const getModalNamesFromUrl = (path: string, url: string): Array<string> =>
    path.slice((url.length + 1)).split('/');
