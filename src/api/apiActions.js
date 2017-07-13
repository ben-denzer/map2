// import apiUrl from "./apiUrl";
import parseRentPrices from "../utils/parseRentPrices";
import {
    ASYNC_START,
    // API_ERROR,
    COMMUNITIES_SUCCESS,
    SELECT_REGION,
    STATES_SUCCESS,
} from "../views/actionTypes";

const getCommunitiesInState = region => (dispatch) => {
    if (!region) region = 'all';
    dispatch({ type: ASYNC_START });
    fetch(`http://www.solomon.aptdemo.com.apartmentdemo.com:1024/api/v5/corporation/communities/region/${region}/`)
        .then(res => res.json())
        .then((rawCommunities) => {
            const allCommunityData = rawCommunities.filter(a => (
                a.is_visible && parseRentPrices(a)
            ));
            dispatch({ type: COMMUNITIES_SUCCESS, allCommunityData });
            dispatch({ type: SELECT_REGION, activeRegion: region });
        }); // .catch(error => dispatch({ type: API_ERROR, error }));
};

// const getStateData = () => (dispatch) => {
//     dispatch({ type: ASYNC_START });
//     const { apiBaseUrl, corpId, domainUrl } = apiUrl;
//     fetch(`${domainUrl}${apiBaseUrl}states/${corpId}/`)
//         .then(data => data.json())
//         .then((stateData) => {
//             dispatch({ type: STATES_SUCCESS, stateData });
//         }); // .catch(error => dispatch({ type: API_ERROR, error }));
// };

// const getRegions = () => (dispatch) => {
//     dispatch({ type: ASYNC_START });
//     const regionUrl = "http://www.solomon.aptdemo.com.apartmentdemo.com:1024/api/v5/corporation/communities/region/all/";
//     fetch(regionUrl)
//         .then(data => data.json())
//         .then((stateData) => {
//             dispatch({ type: STATES_SUCCESS, stateData });
//         }); // .catch(error => dispatch({ type: API_ERROR, error }));
// };

const getRegions = () => (dispatch) => {
    dispatch({ type: ASYNC_START });
    const regionUrl = "http://www.solomon.aptdemo.com.apartmentdemo.com:1024/api/v5/corporation/communities/regions/";
    fetch(regionUrl)
        .then(data => data.json())
        .then((stateData) => {
            dispatch({ type: STATES_SUCCESS, stateData });
        }); // .catch(error => dispatch({ type: API_ERROR, error }));
};

export { getCommunitiesInState, getRegions };
