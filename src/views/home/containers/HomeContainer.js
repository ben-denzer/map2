import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import filterData from "../../../utils/filterData";
import {
    handleCounter,
    handleFilter,
    resetFilters,
    selectRegion,
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
        dogsSelected,
        featuresSelected,
        priceFilter,
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
            dogs: dogsSelected,
            features: featuresSelected,
            priceFilter,
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
        allData,
        defaultMapLocation,
        filteredData,
        highlightedCommunity,
        isLoading,
        mobile,
        sidebarFilterVisibility,
        stateOptions,
    };
};

const mapDispatchToProps = dispatch => ({
    handleCounter: e => dispatch(handleCounter(e)),
    handleFilter: e => dispatch(handleFilter(e)),
    resetFilters: () => dispatch(resetFilters()),
    selectRegion: region => dispatch(selectRegion(region)),
    setBedrooms: num => dispatch(setBedrooms(num)),
    setCity: city => dispatch(setCity(city)),
    toggleSidebarFilter: () => dispatch(toggleSidebarFilter()),
    toggleFilterOptions: filter => dispatch(toggleFilterOptions(filter)),
    toggleHighlight: id => dispatch(toggleHighlight(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
