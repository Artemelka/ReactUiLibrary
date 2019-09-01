const SAND_BOX = 'SandBox';

export const formatterComponentName = (fullName: string): string => {
    const endIndex = fullName.indexOf(SAND_BOX);

    return endIndex !== -1 ? fullName.substring(0, endIndex) : fullName;
};

export const formatterIndex = (index: number): string => (index < 10) ? `0${index}` : `${index}`;
