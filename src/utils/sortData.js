function lowestRentInCommunity(str) {
    // I have a string of rent prices mixed in with other stuff, pulling all of the
    // 3 or 4 digit numbers, then finding the lowest number of the array
    return Math.min.apply(null, str.match(/[0-9]{3,4}/g));
}

const sort = {
    rentHtoL(data) {
        return [...data].sort((a, b) => {
            const lowRentA = lowestRentInCommunity(a.data.floorplan_prices);
            const lowRentB = lowestRentInCommunity(b.data.floorplan_prices);

            if (lowRentA === lowRentB) {
                return 0;
            }
            return lowRentA < lowRentB ? 1 : -1;
        });
    },
    rentLtoH(data) {
        return [...data].sort((a, b) => {
            const lowRentA = lowestRentInCommunity(a.data.floorplan_prices);
            const lowRentB = lowestRentInCommunity(b.data.floorplan_prices);

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
