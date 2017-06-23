import apiUrl from "./apiUrl";
import parseRentPrices from "../utils/parseRentPrices";
import {
    ASYNC_START,
    API_ERROR,
    COMMUNITIES_SUCCESS,
    SELECT_STATE,
    STATES_SUCCESS,
} from "../views/actionTypes";

const getCommunitiesInState = state => (dispatch) => {
    dispatch({ type: ASYNC_START });
    const { apiBaseUrl, corpId, domainUrl } = apiUrl;
    fetch(`${domainUrl}${apiBaseUrl}${corpId}/?format=json&state=${state}`)
        .then(res => res.json())
        .then((rawCommunities) => {
            const allCommunityData = rawCommunities.filter(a => (
                a.is_visible && a
            )).map(parseRentPrices);

            dispatch({ type: COMMUNITIES_SUCCESS, allCommunityData });
            dispatch({ type: SELECT_STATE, activeState: state });
        }).catch(error => dispatch({ type: API_ERROR, error }));
};

const getStateData = () => (dispatch) => {
    dispatch({ type: ASYNC_START });
    const { apiBaseUrl, corpId, domainUrl } = apiUrl;
    fetch(`${domainUrl}${apiBaseUrl}states/${corpId}/`)
        .then(data => data.json())
        .then((stateData) => {
            dispatch({ type: STATES_SUCCESS, stateData });
        }).catch(error => dispatch({ type: API_ERROR, error }));
};

export { getCommunitiesInState, getStateData };
