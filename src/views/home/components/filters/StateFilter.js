import React from "react";
import PropTypes from "prop-types";

function StateFilter(props) {
    const {
        activeFilter,
        activeState,
        history,
        selectState,
        stateOptions,
        toggleFilterOptions,
    } = props;

    const options = stateOptions.map(a => (
        <div
            key={a}
            className="filterbar-li"
            data-state={a.state}
            onClick={() => {
                selectState(a);
                history.push(`/#region=${encodeURI(a)}&view=list`);
            }}
        >
            {a}
        </div>
    ));

    let filterTitle = "Choose A Region";
    if (activeState && activeState !== "all") {
        filterTitle = decodeURI(activeState);
    }

    // activeState && stateOptions.length ?
    //     stateOptions.filter(a => a === activeState)[0] :
    //     "Choose A Region";

    return (
        <div id="state_filter" className="filterbar-select">
            <div
                className="filterbar-title"
                onClick={() => toggleFilterOptions("state")}
            >
                {filterTitle}
            </div>
            <div className="filterbar-options" hidden={activeFilter !== "state"}>
                {options}
            </div>
        </div>
    );
}

StateFilter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    selectState: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default StateFilter;
