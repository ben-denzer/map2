import {
    SLIDER_CHANGE,
    HANDLE_CHECKBOX,
    HANDLE_DISTANCE_CHANGE,
    HANDLE_ADDRESS_CHANGE,
    HANDLE_CITY_STATE_CHANGE,
    HANDLE_MULTI_SELECT,
    TOGGLE_MULTI_SELECT,
} from "../../actionTypes";

const getByRadius = address => (dispatch, getState) => {
    const address1 = getState().sidebarFilter.locationText1.trim();
    const address2 = getState().sidebarFilter.locationText2.trim();
    console.log(`${address1}, ${address2}`); // eslint-disable-line
    // window.getByRadius()
}

const handleCheckbox = filter => ({ type: HANDLE_CHECKBOX, filter });

const handleDistanceChange = val => {
    return { type: HANDLE_DISTANCE_CHANGE, val }
};

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
    handleDistanceChange,
    handleAddressChange,
    handleCityStateChange,
    handleMultiSelect,
    handleSliderChange,
    toggleMultiSelect,
};
