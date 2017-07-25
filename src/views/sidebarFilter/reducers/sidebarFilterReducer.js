const initialState = {
    amenitiesSelected: [],
    catsSelected: false,
    distanceVal: 40,
    dogsSelected: false,
    featuresSelected: [],
    locationText1: "",
    locationText2: "",
    priceFilter: [0, 0],
    sidebarMultiSelectStatus: "",
};

export default function sidebarFiterReducer(state = initialState, action) {
    switch (action.type) {
    case "CLEAR_FILTERS":
        return initialState;
    case "HANDLE_CHECKBOX":
        return Object.assign({}, state, { [action.filter]: !state[action.filter] });
    case "HANDLE_DISTANCE_CHANGE":
        return Object.assign({}, state, { distanceVal: action.val });
    case "HANDLE_ADDRESS_CHANGE":
        return Object.assign({}, state, { locationText1: action.location });
    case "HANDLE_CITY_STATE_CHANGE":
        return Object.assign({}, state, { locationText2: action.location });
    case "HANDLE_MULTI_SELECT":
        // if item is already in the list
        if (state[action.filter].indexOf(action.li) !== -1) {
            return Object.assign(
                {},
                state,
                {
                    [action.filter]: [
                        ...state[action.filter].slice(0, state[action.filter].indexOf(action.li)),
                        ...state[action.filter].slice(state[action.filter].indexOf(action.li) + 1),
                    ],
                },
            );
        }
        return Object.assign(
            {},
            state,
            { [action.filter]: [...state[action.filter], action.li] },
        );
    case "RESET_SIDEBAR_FILTERS":
        return initialState;

    case "SLIDER_CHANGE":
        return Object.assign(
            {},
            state,
            {
                [action.id]: action.valArray.map(a => Number(a)),
            },
        );
    case "TOGGLE_MULTI_SELECT":
        return Object.assign({}, state, { sidebarMultiSelectStatus: action.filter });
    default:
        return state;
    }
}
