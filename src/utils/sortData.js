const sort = {
    rentHtoL(data) {
        return [...data].sort((a, b) => {
            const lowRentA = a.parsedPrices.min;
            const lowRentB = b.parsedPrices.min;

            if (lowRentA === lowRentB) {
                return 0;
            }
            return lowRentA < lowRentB ? 1 : -1;
        });
    },
    rentLtoH(data) {
        return [...data].sort((a, b) => {
            const lowRentA = a.parsedPrices.min;
            const lowRentB = b.parsedPrices.min;

            if (lowRentA === lowRentB) {
                return 0;
            }
            return lowRentA < lowRentB ? -1 : 1;
        });
    },
};

function sortData(data, sortBy) {
    if (!data || !sortBy) {
        return data;
    }

    return sort[sortBy](data);
}

export default sortData;
