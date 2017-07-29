import React from "react";
import PropTypes from "prop-types";
import { findAllCities } from "../../../../utils/setFilters";

function CityFilter(props) {
    const {
        activeCity,
        activeFilter,
        filteredData,
        handleFilter,
        toggleFilterOptions,
    } = props;

    const filterTitle = activeCity || "City";

    const options = findAllCities(filteredData).map(a => (
        <div
            key={a}
            className="filterbar-li"
            data-filter={"activeCity"}
            data-item={a}
            onClick={(e) => {
                e.stopPropagation();
                handleFilter(e)
            }}
        >
            {a}
        </div>
    ));

    return (
        <div
            id="city_filter"
            className="filterbar-select"
            onClick={(e) => {
                e.stopPropagation();
                toggleFilterOptions("city")
            }}
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
    activeCity: PropTypes.string.isRequired,
    activeFilter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default CityFilter;
