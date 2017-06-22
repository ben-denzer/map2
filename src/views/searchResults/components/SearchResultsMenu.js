import React from "react";
import PropTypes from "prop-types";
import SearchMenuFilter from "./SearchMenuFilter";

function SearchResultsMenu(props) {
    const {
        activeSort,
        filteredData,
        handleResultsSort,
        sortFilterStatus,
        stateOptions,
        toggleSortFilter,
    } = props;

    if (!filteredData || !filteredData.length) {
        return <div />;
    }

    const firstCommunity = filteredData[0];
    const stateDisplay = stateOptions.filter((a) => {
        if (a.state === firstCommunity.state) {
            return a;
        }
    })[0].state_display;

    return (
        <div id="search_results_menu">
            <div id="search_menu_toggle" />
            <div id="search_menu_title">{stateDisplay}</div>
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
    filteredData: PropTypes.array.isRequired,
    handleResultsSort: PropTypes.func.isRequired,
    sortFilterStatus: PropTypes.string.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleSortFilter: PropTypes.func.isRequired,
};

export default SearchResultsMenu;
