import apiUrl from "./apiUrl";
import parseRentPrices from "../utils/parseRentPrices";
import {
    ASYNC_START,
    API_ERROR,
    CHANGE_STATE,
    COMMUNITIES_SUCCESS,
    SELECT_REGION,
    STATES_SUCCESS,
} from "../views/actionTypes";
const corpId = window.corpId || '774';

const getCommunitiesInState = region => (dispatch, getState) => {
    if (getState().home.allData.length && window.stateOrRegion === 'state') {
        dispatch({ type: CHANGE_STATE, state: region });
        return;
    }
    if (!region) region = 'all';
    dispatch({ type: ASYNC_START });
    fetch(`${apiUrl.domainUrl}api/v5/corporation/communities/region/${region}/`)
        .then(res => res.json())
        .then((rawCommunities) => {
            const allCommunityData = rawCommunities.filter(a => (
                a.is_visible && parseRentPrices(a)
            ));
            dispatch({ type: COMMUNITIES_SUCCESS, allCommunityData });
            dispatch({ type: SELECT_REGION, activeRegion: region });
        }).catch(error => {
            dispatch({ type: API_ERROR, error: error.toString });
        });

};

// const getAddressCoords = (address) => {
//     const options = {
//         method: 'POST',
//         address: '123 main st, detroit, MI',
//     };
//     fetch(`${apiUrl.devUrl}${apiUrl.getAddressCoordsUrl}`, options)
//     // fetch(`${apiUrl.geoFullUrl}`)
//         .then(data => data.json())
//         .then(coords => console.log(coords))
//         .catch(err => console.log(`error - ${err}`))
// }

const getStates = () => (dispatch) => {
    fetch(`${apiUrl.domainUrl}api/v3/corporation/communities/ratings/states/${corpId}/`)
        .then(data => data.json())
        .then(stateData => {
            // if (window.stateOrRegion === 'state') {
                dispatch({ type: STATES_SUCCESS, stateData });
            // }
        })
        .catch(error => dispatch({ type: API_ERROR, error }))
}

const getRegions = () => (dispatch) => {
    dispatch({ type: ASYNC_START });
    const regionUrl = `${apiUrl.domainUrl}api/v5/corporation/communities/regions/`;
    fetch(regionUrl)
        .then(data => data.json())
        .then((stateData) => {
            // if (!window.stateOrRegion === 'state') {
                dispatch({ type: STATES_SUCCESS, stateData });
            // }
        }).catch(error => {
            console.log(error);
            dispatch({ type: API_ERROR, error: error.toString() })
        });
};

const getCoords = (address, radius, callback) => {
    const state = address.slice(address.lastIndexOf(',') + 1);
    const options = {
        method: 'POST',
        body: JSON.stringify({ address }),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(`${apiUrl.domainUrl}api/v3/communities/ratings/geo/address/?format=json`, options)
        .then(res => res.json())
        .then(results => getCommunitiesByDistance(results, state, radius, callback))
        .catch(err => {
            console.log('err', err);
            callback(err)
        });
}

const getCommunitiesByDistance = (data, state, radius, cb) => {
    const url = `${apiUrl.domainUrl}api/v3/corporation/communities/ratings/${corpId}/?format=json&address_lat=${data.lat}&address_lng=${data.lng}&state=${state}&city=false&radius=${radius}`;
    fetch(url)
        .then(data => data.json())
        .then(json => {
            cb(null, json.map(a => ({ community: a.community, radiusChanged: a.radius_changed })));
        })
        .catch(err => console.log(err));
}

export { /*getAddressCoords,*/ getCommunitiesInState, getCoords, getRegions, getStates };
