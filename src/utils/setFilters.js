import makeSet from "./makeSet";

function findAllBathrooms() {
    return [];
}

function findAllBedrooms() {
    return [];
}

function findAllCities(allData) {
    const cities = allData.map(a => a.city);
    return makeSet(cities);
}

export {
    findAllBathrooms,
    findAllBedrooms,
    findAllCities,
};
