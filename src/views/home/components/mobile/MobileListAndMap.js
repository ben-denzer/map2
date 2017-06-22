/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import SearchResultsContainer from "../../../searchResults/containers/SearchResultsContainer";

function MobileListAndMap(props) {
    return (
        <div id="mobile_list_and_map_container">
            <SearchResultsContainer {...props} />
        </div>
    );
}

MobileListAndMap.propTypes = {
};

export default MobileListAndMap;
