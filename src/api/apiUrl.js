export default {
    apiBaseUrl: "/api/v3/corporation/communities/ratings/",
    corpId: "75-493-501-492-495-494",
    distanceBase: "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=",
    domainUrl: "http://www.solomoncommunities.com/",
    devUrl: "http://192.168.0.5/",
    getAddressCoordsUrl: "api/v3/communities/ratings/geo/address/?format=json",
    solomonKey: "AIzaSyBiGm5hC2XfVjsuyhvwYxzt6EV4r0tb4Dg",
    distanceFilter(lat, lng, state, radius) {
        return `http://www.solomoncommunities.com/api/v3/corporation/communities/ratings/75-493-501-492-495-494/?format=json&address_lat=${lat}&address_lng=${lng}&state=${state}&city=false&radius=${radius}`;
    },
    getCoordsUrl: "http://www.solomoncommunities.com/api/v3/communities/ratings/geo/address/?format=json",
};
