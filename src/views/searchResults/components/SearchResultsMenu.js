import React from "react";
import PropTypes from "prop-types";
import SearchMenuFilter from "./SearchMenuFilter";

function SearchResultsMenu(props) {
    const {
        activeSort,
        activeState,
        filteredData,
        handleResultsSort,
        // mobile,
        sortFilterStatus,
        stateOptions,
        toggleSortFilter,
    } = props;

    if (!filteredData || !filteredData.length) {
        return <div />;
    }

    const firstCommunity = filteredData[0];
    const stateDisplay = stateOptions.filter((a) => {
        if (a === firstCommunity.state) {
            return a;
        }
        return false;
    })[0];

    return (
        <div id="search_results_menu">
            <div id="search_menu_toggle" />
            <div id="search_menu_title">{activeState}</div>
            <SearchMenuFilter
                activeSort={activeSort}
                handleResultsSort={handleResultsSort}
                sortFilterStatus={sortFilterStatus}
                toggleSortFilter={toggleSortFilter}
            />
        </div>
    );
}

SearchResultsMenu.propTypes = {
    activeSort: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    filteredData: PropTypes.array.isRequired,
    handleResultsSort: PropTypes.func.isRequired,
    // mobile: PropTypes.bool.isRequired,
    sortFilterStatus: PropTypes.string.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleSortFilter: PropTypes.func.isRequired,
};

export default SearchResultsMenu;
