import React from "react";
import PropTypes from "prop-types";
import { findAllCities } from "../../../../utils/setFilters";

function BedroomsDropdown(props) {
    const {
        activeBedrooms,
        activeFilter,
        activeState,
        allData,
        handleFilter,
        toggleFilterOptions,
    } = props;

    const filterTitle = activeBedrooms ? `${activeBedrooms} Bedrooms` : "Bedrooms";

    const options = findAllCities(allData).map(a => (
        <div
            key={a}
            className="filterbar-li"
            data-filter={"bedroomsDropdown"}
            data-item={a}
            onClick={handleFilter}
        >
            {a}
        </div>
    ));

    // Early return if no state is selected
    if (!activeState) {
        return (
            <div id="bedrooms_dropdown" className="filterbar-select select-disabled">
                <div className="filterbar-title">Choose a State First</div>
            </div>
        );
    }

    return (
        <div id="bedrooms_dropdown" className="filterbar-select">
            <div
                className="filterbar-title"
                onClick={() => toggleFilterOptions("bedroomsDropdown")}
            >
                {filterTitle}
            </div>
            <div className="filterbar-options" hidden={activeFilter !== "bedroomsDropdown"}>
                {options}
            </div>
        </div>
    );
}

BedroomsDropdown.propTypes = {
    allData: PropTypes.array.isRequired,
    activeBedrooms: PropTypes.string.isRequired,
    activeFilter: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default BedroomsDropdown;
