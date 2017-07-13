import React from "react";
import PropTypes from "prop-types";

function BathroomsFilter(props) {
    const { activeBathrooms, activeRegion, handleCounter } = props;

    if (!activeRegion) {
        return (
            <div id="bathrooms_filter" className="filterbar-select select-disabled">
                <div className="filterbar-title">Bathrooms</div>
            </div>
        );
    }

    return (
        <div id="bathrooms_filter" className="filterbar-select filterbar-with-buttons">
            <div className="filterbar-title">
                {`${activeBathrooms} ${activeBathrooms === "" ? "Bathrooms" : "Bath"}`}
                <div className="filter-buttons-container">
                    <div
                        className="filter-button"
                        id="bathrooms_plus_button"
                        data-action="increment"
                        data-filter="activeBathrooms"
                        onClick={handleCounter}
                    >
                        +
                    </div>
                    <div
                        className="filter-button"
                        id="bathrooms_minus_button"
                        data-action="decrement"
                        data-filter="activeBathrooms"
                        onClick={handleCounter}
                    >
                        -
                    </div>
                </div>
            </div>
        </div>
    );
}

BathroomsFilter.propTypes = {
    activeBathrooms: PropTypes.string.isRequired,
    activeRegion: PropTypes.string.isRequired,
    handleCounter: PropTypes.func.isRequired,
};

export default BathroomsFilter;
