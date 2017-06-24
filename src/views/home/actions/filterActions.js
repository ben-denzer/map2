import { getCommunitiesInState } from "../../../api/apiActions";
import {
    CLEAR_FILTERS,
    HANDLE_COUNTER,
    HIGHLIGHT_COMMUNITY,
    RESET_FILTERS,
    RESET_SIDEBAR_FILTERS,
    SELECT_FILTER_ITEM,
    TOGGLE_FILTER,
    TOGGLE_SIDEBAR_FILTER_VISIBILITY,
} from "../../actionTypes";

const handleCounter = e => (dispatch) => {
    const { action, filter } = e.target.dataset;
    dispatch({ type: HANDLE_COUNTER, filter, filterAction: action });
    dispatch({ type: HIGHLIGHT_COMMUNITY });
};

const handleFilter = e => (dispatch) => {
    const { filter, item } = e.target.dataset;
    dispatch({ type: SELECT_FILTER_ITEM, filter, item });
    dispatch({ type: HIGHLIGHT_COMMUNITY });
};

const resetFilters = () => (dispatch) => {
    dispatch({ type: RESET_FILTERS });
    dispatch({ type: RESET_SIDEBAR_FILTERS });
    dispatch({ type: HIGHLIGHT_COMMUNITY });
};

const selectState = e => (dispatch) => {
    const stateToFind = e.stateToFind || e.target.dataset.state;
    dispatch(getCommunitiesInState(stateToFind));
    dispatch({ type: CLEAR_FILTERS });
    dispatch({ type: HIGHLIGHT_COMMUNITY });
};

const toggleFilterOptions = filter => (dispatch, getState) => {
    if (!filter || filter === getState().home.activeFilter) {
        dispatch({ type: TOGGLE_FILTER, filter: "" });
        return;
    }
    dispatch({ type: TOGGLE_FILTER, filter });
};

const toggleSidebarFilter = () => ({ type: TOGGLE_SIDEBAR_FILTER_VISIBILITY });

export {
    handleCounter,
    handleFilter,
    resetFilters,
    selectState,
    toggleFilterOptions,
    toggleSidebarFilter,
};
