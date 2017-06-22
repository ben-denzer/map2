function filterData(allData, filters) {
    let tempData = allData.map(a => (
        Object.assign(
            {},
            a,
            {
                baths: JSON.parse(a.baths).map(b => parseFloat(b)),
                beds: JSON.parse(a.beds),
                features: JSON.parse(a.features),
            },
        )
    ));

    if (filters.amenities) {
        tempData = tempData.filter((a) => {
            const allCommunityAmenities = a.features;

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

    if (filters.bathrooms) {
        tempData = tempData.filter((a) => {
            if (a.baths.indexOf(Number(filters.bathrooms)) !== -1) {
                return a;
            }
        });
    }

    if (filters.bedrooms) {
        tempData = tempData.filter((a) => {
            if (a.beds.indexOf(Number(filters.bedrooms)) !== -1) {
                return a;
            }
        });
    }

    if (filters.cats) {
        tempData = tempData.filter(a => a.cats && a);
    }

    if (filters.features && filters.features.length) {
        tempData = tempData.filter((a) => {
            const allFpFeatures = JSON.parse(a.data.fp_features);
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
            const { max, min } = a.data.parsedPrices;
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
