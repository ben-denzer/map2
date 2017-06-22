const initialState = {
    activeSort: "",
    highlightedCommunity: 3606761,
    sortFilterStatus: "",
};

export default function resultsReducer(state = initialState, action) {
    switch (action.type) {
    case "HIGHLIGHT_COMMUNITY":
        return Object.assign({}, state, { highlightedCommunity: action.id });
    case "TOGGLE_SORT_MENU":
        return Object.assign({}, state, { sortFilterStatus: action.sortFilterStatus });
    case "RESULTS_SORT":
        return Object.assign(
            {},
            state,
            {
                activeSort: action.sortBy,
                sortFilterStatus: "", // closes menu
            },
        );
    default:
        return state;
    }
}
