/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import StateFilter from "../filters/StateFilter";

function MobileChooseState(props) {
    const {
        activeFilter,
        activeRegion,
        handleFilter,
        history,
        selectRegion,
        stateOptions,
        toggleFilterOptions,
    } = props;

    return (
        <div className="first-page">
            <img id="mobile_logo" src="/gridmedia/img/app-logo.png" alt="Community Name" />
            <StateFilter
                activeFilter={activeFilter}
                activeRegion={activeRegion}
                handleFilter={handleFilter}
                history={history}
                selectRegion={selectRegion}
                stateOptions={stateOptions}
                toggleFilterOptions={toggleFilterOptions}
            />
        </div>
    );
}

MobileChooseState.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    activeRegion: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    selectRegion: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default MobileChooseState;
