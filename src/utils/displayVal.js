const displayVal = (string, array) => {
    if (!array || !array.length) {
        return "";
    } else if (array.length === 1) {
        return `${parseFloat(array[0])} ${string}`;
    }

    const sorted = array.map(a => Number(a)).sort((a, b) => {
        if (a === b) return 0;
        return a < b ? -1 : 1;
    });

    return `${sorted[0]}-${sorted[sorted.length - 1]} ${string}`;
};

export default displayVal;
