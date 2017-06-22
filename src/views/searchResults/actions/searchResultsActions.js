import { HIGHLIGHT_COMMUNITY, RESULTS_SORT, TOGGLE_SORT_MENU } from "../../actionTypes";

const handleResultsSort = e => ({ type: RESULTS_SORT, sortBy: e.target.dataset.sortby });

const toggleHighlight = (id = null) => ({ type: HIGHLIGHT_COMMUNITY, id });

const toggleSortFilter = () => (dispatch, getState) => {
    // toggles status between "" and "open"
    const sortFilterStatus = getState().results.sortFilterStatus === "" ? "open" : "";
    dispatch({ type: TOGGLE_SORT_MENU, sortFilterStatus });
};

export { handleResultsSort, toggleHighlight, toggleSortFilter };
