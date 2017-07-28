function filterData(allData, filters) {
    let tempData = allData.map(a => {
        return Object.assign(
            {},
            a,
            {
                baths: [1,2],
                beds: Object.keys(a.bed_bath_combos),
                features: a.features,
            },
        )
    });

    if (filters.communityArray && filters.communityArray.length) {
        tempData = tempData.filter(a => {
            console.log(a, filters.communityArray, filters.communityArray.indexOf(a.id));
            return filters.communityArray.indexOf(a.community) !== -1 && a;
        });
    }

    if (filters.state) {
        if (!filters.region || /all/i.test(filters.region)) {
            tempData = tempData.filter((a) => {
                return a.state === filters.state && a;
            });
        }
    }

    if (filters.amenities) {
        tempData = tempData.filter((a) => {
            const allCommunityAmenities = a.community_features;

            for (let i = 0; i < filters.amenities.length; i += 1) {
                if (allCommunityAmenities.indexOf(filters.amenities[i]) === -1) {
                    return false;
                }
            }
            return true;
        });
    }

    if (filters.city) {
        tempData = tempData.filter(a => a.city === filters.city);
    }

    // if (filters.bathrooms) {
    //     tempData = tempData.filter((a) => {
    //         if (a.baths.indexOf(Number(filters.bathrooms)) !== -1) {
    //             return a;
    //         }
    //         return false;
    //     });
    // }

    if (filters.bedrooms) {
        tempData = tempData.filter((a) => {
            const communityBedrooms = Object.keys(a.bed_bath_combos);
            if (communityBedrooms.indexOf(filters.bedrooms) !== -1) {
                return a;
            }
            return false;
        });
    }

    if (filters.cats) {
        tempData = tempData.filter(a => a.cats && a);
    }

    if (filters.features && filters.features.length) {
        tempData = tempData.filter((a) => {
            const allFpFeatures = a.floorplan_features;
            for (let i = 0; i < filters.features.length; i += 1) {
                if (allFpFeatures.indexOf(filters.features[i]) === -1) {
                    return false;
                }
            }
            return true;
        });
    }

    // PriceFilter default is [0, 0]
    if (filters.priceFilter[0] && filters.priceFilter[1]) {
        tempData = tempData.filter((a) => {
            const { max, min } = a.parsedPrices;
            const userMax = filters.priceFilter[1];
            const userMin = filters.priceFilter[0];

            if (userMax < min) {
                return false;
            } else if (userMin > max) {
                return false;
            }

            return a;
        });
    }
    return tempData;
}

export default filterData;
