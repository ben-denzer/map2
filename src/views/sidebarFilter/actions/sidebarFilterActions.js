import {
    SLIDER_CHANGE,
    HANDLE_CHECKBOX,
    HANDLE_DISTANCE_CHANGE,
    HANDLE_LOCATION_CHANGE,
    HANDLE_MULTI_SELECT,
    TOGGLE_MULTI_SELECT,
} from "../../actionTypes";

const handleCheckbox = filter => ({ type: HANDLE_CHECKBOX, filter });

const handleDistanceChange = val => {
    return { type: HANDLE_DISTANCE_CHANGE, val }
};

const handleLocationChange = (e) => ({ type: HANDLE_LOCATION_CHANGE, location: e.target.value });

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
    handleCheckbox,
    handleDistanceChange,
    handleLocationChange,
    handleMultiSelect,
    handleSliderChange,
    toggleMultiSelect,
};
