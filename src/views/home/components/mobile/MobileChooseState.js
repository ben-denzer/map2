/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import StateFilter from "../filters/StateFilter";

function MobileChooseState(props) {
    const {
        activeFilter,
        activeState,
        handleFilter,
        history,
        selectState,
        stateOptions,
        toggleFilterOptions,
    } = props;

    return (
        <div className="first-page">
            <img id="mobile_logo" src="/img/logo.png" alt="Community Name" />
            <StateFilter
                activeFilter={activeFilter}
                activeState={activeState}
                handleFilter={handleFilter}
                history={history}
                selectState={selectState}
                stateOptions={stateOptions}
                toggleFilterOptions={toggleFilterOptions}
            />
        </div>
    );
}

MobileChooseState.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    selectState: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default MobileChooseState;
