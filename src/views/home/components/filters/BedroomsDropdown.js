import React from "react";
import PropTypes from "prop-types";

function BedroomsDropdown(props) {
    const {
        activeFilter,
        activeBedrooms,
        handleFilter,
        // history,
        toggleFilterOptions,
    } = props;

    const options = [1, 2, 3].map(a => (
        <div
            key={a}
            className="filterbar-li"
            data-filter={"activeBedrooms"}
            data-item={a}
            onClick={handleFilter}
        >
            {a}
        </div>
    ));

    const filterTitle = activeBedrooms ? activeBedrooms : "Bedrooms";

    return (
        <div id="state_filter" className="filterbar-select">
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
    activeFilter: PropTypes.string.isRequired,
    activeBedrooms: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    // history: PropTypes.object.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default BedroomsDropdown;
