import React from "react";
import PropTypes from "prop-types";

function SearchMenuFilter(props) {
    const {
        handleResultsSort,
        sortFilterStatus,
        toggleSortFilter,
    } = props;

    return (
        <div id="results_menu_filter">
            <div id="results_menu_button_container">
                <div
                    id="results_menu_button"
                    onClick={toggleSortFilter}
                >
                    X
                </div>
            </div>
            <div
                id="results_menu_filter_options"
                onClick={handleResultsSort}
                className={sortFilterStatus}
            >
                <div className="filter-option" data-sortby="rentLtoH">
                    Rent (low to high)
                </div>
                <div className="filter-option" data-sortby="rentHtoL">
                    Rent (high to low)
                </div>
            </div>
        </div>
    );
}

SearchMenuFilter.propTypes = {
    handleResultsSort: PropTypes.func.isRequired,
    sortFilterStatus: PropTypes.string.isRequired,
    toggleSortFilter: PropTypes.func.isRequired,
};

export default SearchMenuFilter;
