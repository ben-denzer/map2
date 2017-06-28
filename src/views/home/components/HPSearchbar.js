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
    console.log('act filter', activeFilter); // eslint-disable-line
    return (
        <div id="hp_search">
            <StateFilter
                activeFilter={activeFilter}
                activeState={activeState}
                handleFilter={handleFilter}
                history={history}
                selectState={selectState}
                stateOptions={stateOptions}
                toggleFilterOptions={toggleFilterOptions}
            />
            <BedroomsDropdown
                activeFilter={activeFilter}
                activeBedrooms={activeBedrooms}
                handleFilter={handleFilter}
                history={history}
                toggleFilterOptions={toggleFilterOptions}
            />
        </div>
    );
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
