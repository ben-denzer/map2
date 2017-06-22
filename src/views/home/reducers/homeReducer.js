const initialState = {
    active: {
        activeAmenities: [],
        activeBathrooms: "",
        activeBedrooms: "",
        activeCity: "",
        activeFpFeatures: [],
    },
    activeFilter: "",
    activeState: "",
    allData: [],
    bathroomOptions: [],
    bedroomOptions: [],
    defaultMapLocation: { lat: 39, lng: -94 },
    loading: 0,
    mobile: true,
    sidebarFilterVisibility: false,
    stateOptions: [],
};

export default function homeReducer(state = initialState, action) {
    const oldNumber = Number(state.active[action.filter]);
    let newNumber;

    switch (action.type) {

    case "ASYNC_START":
        return Object.assign({}, state, { loading: state.loading + 1 });

    case "COMMUNITIES_SUCCESS":
        return Object.assign(
            {},
            state,
            {
                allData: action.allCommunityData,
                defaultMapLocation: {
                    lat: action.allCommunityData[0].lat,
                    lng: action.allCommunityData[0].lng,
                },
                loading: state.loading - 1,
            },
        );

    case "HANDLE_COUNTER":
        if (action.filterAction === "increment") {
            newNumber = oldNumber + 1;
        } else if (oldNumber <= 1) {
            if (action.filter === "activeBathrooms") {
                newNumber = 1;
            } else {
                newNumber = 0;
            }
        } else {
            newNumber = oldNumber - 1;
        }

        return Object.assign(
            {},
            state,
            {
                active: Object.assign(
                    {},
                    state.active,
                    {
                        [action.filter]: newNumber.toString(),
                    },
                ),
            },
        );

    case "MOBILE_MENU_CLICKED":
        console.log('mobile menu clicked'); // eslint-disable-line
        return state;

    case "RESET_FILTERS":
        return Object.assign(
            {},
            state,
            {
                active: initialState.active,
                activeFilter: "",
            },
        );

    case "STATES_SUCCESS":
        return Object.assign(
            {},
            state,
            { stateOptions: action.stateData, loading: state.loading - 1 },
        );

    case "SELECT_FILTER_ITEM":
        return Object.assign(
            {},
            state,
            {
                active: Object.assign({}, state.active, { [action.filter]: action.item }),
                activeFilter: "",
            },
        );

    case "SELECT_STATE":
        return Object.assign(
            {},
            state,
            {
                active: initialState.active,
                activeFilter: "",
                activeState: action.activeState,
            },
        );

    case "SET_MOBILE":
        return Object.assign({}, state, { mobile: action.mobile });

    case "TOGGLE_FILTER":
        return Object.assign({}, state, { activeFilter: action.filter });

    case "TOGGLE_SIDEBAR_FILTER_VISIBILITY":
        return Object.assign(
            {},
            state,
            { sidebarFilterVisibility: !state.sidebarFilterVisibility },
        );

    default:
        return state;
    }
}
