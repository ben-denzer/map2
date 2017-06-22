const parseRentPrices = (community) => {
    const reg = /\d{3,4}/g;
    const price = community.data.floorplan_prices;
    const allPrices = price.match(reg);
    const parsed = {
        min: Math.min.apply(null, allPrices),
        max: Math.max.apply(null, allPrices),
    };
    community.data.parsedPrices = parsed;
    return community;
};

export default parseRentPrices;
