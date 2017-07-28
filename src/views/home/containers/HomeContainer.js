import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import filterData from "../../../utils/filterData";
import {
    handleCounter,
    handleFilter,
    resetFilters,
    selectRegion,
    selectState,
    setBedrooms,
    setCity,
    toggleSidebarFilter,
    toggleFilterOptions,
} from "../actions/filterActions";

import { toggleHighlight } from "../../searchResults/actions/searchResultsActions";

const mapStateToProps = (state) => {
    const { highlightedCommunity } = state.results;

    const {
        active,
        activeFilter,
        activeRegion,
        activeState,
        allData,
        defaultMapLocation,
        loading,
        mobile,
        sidebarFilterVisibility,
        stateOptions,
    } = state.home;

    const {
        amenitiesSelected,
        catsSelected,
        communityArray,
        dogsSelected,
        featuresSelected,
        priceFilter,
        radiusChanged,
    } = state.sidebarFilter;

    const {
        activeAmenities,
        activeBathrooms,
        activeBedrooms,
        activeCity,
        activeFpFeatures,
    } = active;

    const filteredData = filterData(
        allData,
        {
            amenities: amenitiesSelected,
            bathrooms: activeBathrooms,
            bedrooms: activeBedrooms,
            cats: catsSelected,
            city: activeCity,
            communityArray,
            dogs: dogsSelected,
            features: featuresSelected,
            priceFilter,
            region: activeRegion,
            state: activeState,
        },
    );

    const isLoading = Boolean(loading);

    return {
        activeAmenities,
        activeBathrooms,
        activeBedrooms,
        activeCity,
        activeFilter,
        activeFpFeatures,
        activeRegion,
        activeState,
        allData,
        defaultMapLocation,
        filteredData,
        highlightedCommunity,
        isLoading,
        mobile,
        radiusChanged,
        sidebarFilterVisibility,
        stateOptions,
    };
};

const mapDispatchToProps = dispatch => ({
    handleCounter: e => dispatch(handleCounter(e)),
    handleFilter: e => dispatch(handleFilter(e)),
    resetFilters: () => dispatch(resetFilters()),
    selectRegion: region => dispatch(selectRegion(region)),
    selectState: state => dispatch(selectState(state)),
    setBedrooms: num => dispatch(setBedrooms(num)),
    setCity: city => dispatch(setCity(city)),
    toggleSidebarFilter: () => dispatch(toggleSidebarFilter()),
    toggleFilterOptions: filter => dispatch(toggleFilterOptions(filter)),
    toggleHighlight: id => dispatch(toggleHighlight(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
