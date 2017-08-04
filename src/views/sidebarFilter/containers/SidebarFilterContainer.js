import { connect } from "react-redux";
import {
    getByRadius,
    handleCheckbox,
    handleAddressChange,
    handleCityStateChange,
    handleMultiSelect,
    handleSliderChange,
    toggleMultiSelect,
} from "../actions/sidebarFilterActions";
import SidebarFilter from "../components/SidebarFilter";

const mapStateToProps = state => ({
    amenitiesSelected: state.sidebarFilter.amenitiesSelected,
    catsSelected: state.sidebarFilter.catsSelected,
    distanceVal: state.sidebarFilter.distanceVal,
    dogsSelected: state.sidebarFilter.dogsSelected,
    featuresSelected: state.sidebarFilter.featuresSelected,
    locationText1: state.sidebarFilter.locationText1,
    locationText2: state.sidebarFilter.locationText2,
    priceFilter: state.sidebarFilter.priceFilter,
    radiusError: state.sidebarFilter.radiusError,
    sidebarFilterVisibility: state.home.sidebarFilterVisibility,
    sidebarMultiSelectStatus: state.sidebarFilter.sidebarMultiSelectStatus,
});

const mapDispatchToProps = dispatch => ({
    getByRadius: address => dispatch(getByRadius(address)),
    handleCheckbox: filter => dispatch(handleCheckbox(filter)),
    handleAddressChange: e => dispatch(handleAddressChange(e)),
    handleCityStateChange: e => dispatch(handleCityStateChange(e)),
    handleMultiSelect: e => dispatch(handleMultiSelect(e)),
    handleSliderChange: (id, valArray) => dispatch(handleSliderChange(id, valArray)),
    toggleMultiSelect: e => dispatch(toggleMultiSelect(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarFilter);
