/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import SearchResultsContainer from "../../../searchResults/containers/SearchResultsContainer";
import MobileBottomNav from "./MobileBottomNav";

function MobileListAndMap(props) {
    const currentHash = props.history.location.hash;
    const currentView = currentHash.slice(currentHash.lastIndexOf('=') + 1);
    const { changeMobileView } = props;
    return (
        <div id="mobile_list_and_map_container">
            <div id="mobile_top_view_options">
                <div
                    className={`mobile-top-option${currentView === "list" ? " active" : ""}`}
                    onClick={() => currentView !== "list" && changeMobileView('list')}
                >
                    List
                </div>
                <div
                    className={`mobile-top-option${currentView === "map" ? " active" : ""}`}
                    onClick={() => currentView !== "map" && changeMobileView('map')}
                >
                    Map
                </div>

            </div>
            <SearchResultsContainer {...props} />
            {currentView !== 'filter' && <MobileBottomNav {...props} />}
        </div>
    );
}

MobileListAndMap.propTypes = {
};

export default MobileListAndMap;
