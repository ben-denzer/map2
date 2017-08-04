const apiUrl = {
    apiBaseUrl: "/api/v3/corporation/communities/ratings/",
    corpId: "75-493-501-492-495-494",
    distanceBase: "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=",
    domainUrl: process.env.NODE_ENV === "development" ? "http://birgeandheld.aptdemo.com/" : "/",
    getAddressCoordsUrl: `${this.domainUrl}api/v3/communities/ratings/geo/address/?format=json`,
    solomonKey: "AIzaSyBiGm5hC2XfVjsuyhvwYxzt6EV4r0tb4Dg",
    distanceFilter(lat, lng, state, radius) {
        return `${this.domainUrl}api/v3/corporation/communities/ratings/${window.corpId}/?format=json&address_lat=${lat}&address_lng=${lng}&state=${state}&city=false&radius=${radius}`;
    },
    getCoordsUrl: `${this.domainUrl}api/v3/communities/ratings/geo/address/?format=json`,
};

export default apiUrl;
