let counter = 0;

export const getUniqId = () => {
    counter = counter + 10 + Number(Math.random().toString().slice(2));

    return counter.toString();
};
