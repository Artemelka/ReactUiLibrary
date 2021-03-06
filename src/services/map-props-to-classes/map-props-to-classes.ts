const setError = (classes: Array<Record<string, string>>, props: Array<string>) => {
    const errorMessage = `Arguments type is incorrect: class ${JSON.stringify(classes)}, prop: ${JSON.stringify(props)}`;

    throw new TypeError(errorMessage);
};

const setWarning = (value: string, classMap: Record<string, string>) => {
    const message = `ClassName ${value} not found in provided map ${JSON.stringify(classMap)}`;

    console.warn(message);
};

export const mapPropsToClasses = (classes: Array<Record<string, string>>, props: Array<string>) => {
    if (props === undefined || props === null) {
        return;
    }

    return Array.isArray(classes) !== Array.isArray(props)
        ? setError(classes, props)
        : classes.map((classMap, index) => {
            if (props[index]) {
                if (classMap[props[index]]) {
                    return classMap[props[index]];
                }

                setWarning(props[index], classMap);
            }

            return;
        });
};
