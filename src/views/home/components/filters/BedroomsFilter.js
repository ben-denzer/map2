import React from "react";
import PropTypes from "prop-types";

function BedroomsFilter(props) {
    const { activeBedrooms, activeRegion, handleCounter } = props;

    if (!activeRegion) {
        return (
            <div id="bedrooms_filter" className="filterbar-select select-disabled">
                <div className="filterbar-title">Bedrooms</div>
            </div>
        );
    }

    return (
        <div id="bedrooms_filter" className="filterbar-select filterbar-with-buttons">
            <div className="filterbar-title">
                {`${activeBedrooms} ${activeBedrooms === 1 ? "Bedroom" : "Bedrooms"}`}
                <div className="filter-buttons-container">
                    <div
                        className="filter-button"
                        id="bedrooms_plus_button"
                        data-action="increment"
                        data-filter="activeBedrooms"
                        onClick={handleCounter}
                    >
                        +
                    </div>
                    <div
                        className="filter-button"
                        id="bedrooms_minus_button"
                        data-action="decrement"
                        data-filter="activeBedrooms"
                        onClick={handleCounter}
                    >
                        -
                    </div>
                </div>
            </div>
        </div>
    );
}

BedroomsFilter.propTypes = {
    activeBedrooms: PropTypes.string.isRequired,
    activeRegion: PropTypes.string.isRequired,
    handleCounter: PropTypes.func.isRequired,
};

export default BedroomsFilter;
