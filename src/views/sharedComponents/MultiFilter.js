import React from "react";
import PropTypes from "prop-types";

function MultiFilter(props) {
    return (
        <div className="multi-filter" id="amenities_filter">
            <div
                className="multi-filter-title"
                data-filter="amenities"
                onClick={toggleMultiSelect}
            >
                Amenities
                <div
                    className="multi-count"
                    data-filter="amenities"
                    hidden={Number(amenitiesSelected.length) <= 0}
                >
                    {amenitiesSelected.length}
                </div>
            </div>
            <div
                className={`multi-filter-options ${openFilter === "amenities" ? "open" : ""}`}
                hidden={openFilter !== "amenities"}
            >
                {amenities}
            </div>
        </div>
    );
}

MultiFilter.propTypes = {
};

export default MultiFilter;
