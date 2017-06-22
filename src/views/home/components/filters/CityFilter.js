import React from "react";
import PropTypes from "prop-types";
import { findAllCities } from "../../../../utils/setFilters";

function CityFilter(props) {
    const {
        activeCity,
        activeFilter,
        activeState,
        allData,
        handleFilter,
        toggleFilterOptions,
    } = props;

    const filterTitle = activeCity || "City";

    const options = findAllCities(allData).map(a => (
        <div
            key={a}
            className="filterbar-li"
            data-filter={"activeCity"}
            data-item={a}
            onClick={handleFilter}
        >
            {a}
        </div>
    ));

    // Early return if no state is selected
    if (!activeState) {
        return (
            <div id="city_filter" className="filterbar-select select-disabled">
                <div className="filterbar-title">Choose a State First</div>
            </div>
        );
    }

    return (
        <div id="city_filter" className="filterbar-select">
            <div
                className="filterbar-title"
                onClick={() => toggleFilterOptions("city")}
            >
                {filterTitle}
            </div>
            <div className="filterbar-options" hidden={activeFilter !== "city"}>
                {options}
            </div>
        </div>
    );
}

CityFilter.propTypes = {
    allData: PropTypes.array.isRequired,
    activeCity: PropTypes.string.isRequired,
    activeFilter: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default CityFilter;
