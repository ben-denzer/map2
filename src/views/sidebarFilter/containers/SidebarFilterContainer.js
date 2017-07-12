import { connect } from "react-redux";
import {
    handleCheckbox,
    handleLocationChange,
    handleMultiSelect,
    handleSliderChange,
    toggleMultiSelect,
} from "../actions/sidebarFilterActions";
import SidebarFilter from "../components/SidebarFilter";

const mapStateToProps = state => ({
    amenitiesSelected: state.sidebarFilter.amenitiesSelected,
    catsSelected: state.sidebarFilter.catsSelected,
    dogsSelected: state.sidebarFilter.dogsSelected,
    featuresSelected: state.sidebarFilter.featuresSelected,
    location: state.sidebarFilter.location,
    priceFilter: state.sidebarFilter.priceFilter,
    sidebarFilterVisibility: state.home.sidebarFilterVisibility,
    sidebarMultiSelectStatus: state.sidebarFilter.sidebarMultiSelectStatus,
});

const mapDispatchToProps = dispatch => ({
    handleCheckbox: filter => dispatch(handleCheckbox(filter)),
    handleLocationChange: e => dispatch(handleLocationChange(e)),
    handleMultiSelect: e => dispatch(handleMultiSelect(e)),
    handleSliderChange: (id, valArray) => dispatch(handleSliderChange(id, valArray)),
    toggleMultiSelect: e => dispatch(toggleMultiSelect(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarFilter);
