import {
    DISTANCE_FILTER_RESULTS,
    HANDLE_CHECKBOX,
    HANDLE_ADDRESS_CHANGE,
    HANDLE_CITY_STATE_CHANGE,
    HANDLE_MULTI_SELECT,
    SLIDER_CHANGE,
    TOGGLE_MULTI_SELECT,
} from "../../actionTypes";

import { getCoords } from "../../../api/apiActions";

const getByRadius = address => (dispatch, getState) => {
    const radius = getState().sidebarFilter.distanceVal[1];
    const address1 = getState().sidebarFilter.locationText1.trim();
    const address2 = getState().sidebarFilter.locationText2.trim();
    const fullAddress = `${address1}, ${address2}`; // eslint-disable-line
    if (getCoords) {
        getCoords(fullAddress, radius, (err, data) => {
            if (err) {
                return console.log(err);
            }
            const communityArray = data.map(a => a.community);
            const radiusChangedArray = data.filter(a => a.radius_changed && a);
            const radiusChanged = radiusChangedArray.length ? Math.max(...radiusChangedArray) : false;
            console.log(communityArray, radiusChanged);
            dispatch({ type: DISTANCE_FILTER_RESULTS, communityArray, radiusChanged });
        });
    } else {
        // MOCK RESPONSE
        const communityArray = [5944, 4371];
        const radiusChanged = 40;
        setTimeout(() => dispatch({ type: DISTANCE_FILTER_RESULTS, communityArray, radiusChanged }), 10);
    }
};

const handleCheckbox = filter => ({ type: HANDLE_CHECKBOX, filter });

const handleAddressChange = (e) => ({ type: HANDLE_ADDRESS_CHANGE, location: e.target.value });

const handleCityStateChange = (e) => ({ type: HANDLE_CITY_STATE_CHANGE, location: e.target.value });

const handleMultiSelect = (e) => {
    const { li, filter } = e.target.dataset;
    return { type: HANDLE_MULTI_SELECT, filter, li };
};

const handleSliderChange = (id, valArray) => ({ type: SLIDER_CHANGE, id, valArray });

const toggleMultiSelect = e => (dispatch, getState) => {
    const openFilter = getState().sidebarFilter.sidebarMultiSelectStatus;
    const clickedFilter = e.target.dataset.filter;

    if (openFilter === clickedFilter) {
        dispatch({ type: TOGGLE_MULTI_SELECT, filter: "" });
    } else {
        dispatch({ type: TOGGLE_MULTI_SELECT, filter: clickedFilter });
    }
};

export {
    getByRadius,
    handleCheckbox,
    handleAddressChange,
    handleCityStateChange,
    handleMultiSelect,
    handleSliderChange,
    toggleMultiSelect,
};
