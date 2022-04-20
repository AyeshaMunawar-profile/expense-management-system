export const getMaximunValueFromArray = (valuesArray) => {
    return valuesArray.reduce((a, b) => {
        return Math.max(a, b)
    }, -Infinity)
};

