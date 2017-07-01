import { connect } from "react-redux";
import {
    handleFilter,
    selectState,
    toggleFilterOptions
} from "../actions/filterActions";
import { getCommunitiesInState } from "../../../api/apiActions";

import HPSearchbar from "../components/HPSearchbar";

const mapStateToProps = (state) => {
    const {
        active,
        activeFilter,
        activeState,
        allData,
        stateOptions,
    } = state.home;

    const {
        activeBedrooms,
        activeCity,
    } = active;

    return {
        activeBedrooms,
        activeCity,
        activeFilter,
        activeState,
        allData,
        stateOptions,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getCommunitiesInState: e => dispatch(getCommunitiesInState(e)),
    handleFilter: e => dispatch(handleFilter(e)),
    selectState: e => dispatch(selectState(e)),
    toggleFilterOptions: filter => dispatch(toggleFilterOptions(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HPSearchbar);
