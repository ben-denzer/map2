import React from "react";
import PropTypes from "prop-types";
import StateFilter from "./filters/StateFilter";
import BedroomsDropdown from "./filters/BedroomsDropdown";

function HPSearchbar(props) {
    const {
        activeBedrooms,
        activeFilter,
        activeState,
        handleFilter,
        history,
        selectState,
        stateOptions,
        toggleFilterOptions,
    } = props;

    const regionOptions = stateOptions.map(a => {
        return (
            <option value={a}>{a}</option>
        );
    });

    return (
        <form id="quick-search-form" className="form-inline">
            <div className="form-group">
                <select name="state" id="state-selector" data-placeholder="Select a state">
                    <option selected disabled>Select a state</option>
                    {regionOptions}
                </select>
            </div>
        </form>
    );

    // return (
    //     <div id="hp_search">

    //         {/*<StateFilter
    //             activeFilter={activeFilter}
    //             activeState={activeState}
    //             handleFilter={handleFilter}
    //             history={history}
    //             selectState={selectState}
    //             stateOptions={stateOptions}
    //             toggleFilterOptions={toggleFilterOptions}
    //         />
    //         <BedroomsDropdown
    //             activeFilter={activeFilter}
    //             activeBedrooms={activeBedrooms}
    //             handleFilter={handleFilter}
    //             history={history}
    //             toggleFilterOptions={toggleFilterOptions}
    //         />*/}
    //     </div>
    // );
}

HPSearchbar.propTypes = {
    activeBedrooms: PropTypes.string.isRequired,
    activeFilter: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    selectState: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default HPSearchbar;
