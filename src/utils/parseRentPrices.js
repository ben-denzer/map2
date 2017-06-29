const parseRentPrices = (community) => {
    const parsed = {
        min: Infinity,
        max: -Infinity,
    };
    for (let i in community.floorplan_prices) {
        if (community.floorplan_prices[i].min && community.floorplan_prices[i].min < parsed.min) {
            parsed.min = community.floorplan_prices[i].min;
        }
        if (community.floorplan_prices[i].max && community.floorplan_prices[i].max > parsed.max) {
            parsed.max = community.floorplan_prices[i].max;
        }
    }

    community.parsedPrices = parsed;
    return community;
};

export default parseRentPrices;
