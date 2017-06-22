import { initMap } from "../services/mapService";

function changeMap(settings, highlightedCommunity, toggleHighlight) {
    const { filteredData, city, defaultMapLocation } = settings;
    let zoom = 6;
    if (filteredData.length === 1) {
        zoom = 14;
    } else if (city) {
        zoom = 12;
    }

    const getCoords = community => ({ lat: community.lat, lng: community.lng });

    const center = filteredData.length ?
        getCoords(filteredData[0]) :
        defaultMapLocation;

    const options = { filteredData, center, zoom };
    initMap(options, highlightedCommunity, toggleHighlight);
}

export default changeMap;
