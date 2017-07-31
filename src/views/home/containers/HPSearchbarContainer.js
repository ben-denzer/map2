import { connect } from "react-redux";
import {
    handleFilter,
    selectRegion,
    toggleFilterOptions
} from "../actions/filterActions";
import { getCommunitiesInState } from "../../../api/apiActions";

import HPSearchbar from "../components/HPSearchbar";

const mapStateToProps = (state) => {
    const {
        active,
        activeFilter,
        activeRegion,
        activeState,
        allData,
        stateOptions,
    } = state.home;

    const {
        activeBedrooms,
        activeCity,
    } = active;

    console.log(allData);

    return {
        activeBedrooms,
        activeCity,
        activeFilter,
        activeRegion,
        allData,
        stateOptions,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getCommunitiesInState: e => dispatch(getCommunitiesInState(e)),
    handleFilter: e => dispatch(handleFilter(e)),
    selectRegion: e => dispatch(selectRegion(e)),
    toggleFilterOptions: filter => dispatch(toggleFilterOptions(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HPSearchbar);
