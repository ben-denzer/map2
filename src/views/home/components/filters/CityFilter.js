import React from "react";
import PropTypes from "prop-types";
import { findAllCities } from "../../../../utils/setFilters";

function CityFilter(props) {
    const {
        activeCity,
        activeFilter,
        activeRegion,
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
    if (!activeRegion) {
        return (
            <div id="city_filter" className="filterbar-select select-disabled">
                <div className="filterbar-title">Choose a State First</div>
            </div>
        );
    }

    return (
        <div
            id="city_filter"
            className="filterbar-select"
            onClick={() => toggleFilterOptions("city")}
        >
            <div className="filterbar-title with-arrow">
                <span className="filterbar-title-span">{filterTitle}</span>
                <span className={`filterbar-dropdown-arrow ${activeFilter === "city" ? "up" : ""}`} />
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
    activeRegion: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default CityFilter;
