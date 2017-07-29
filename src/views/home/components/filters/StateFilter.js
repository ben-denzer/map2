import React from "react";
import PropTypes from "prop-types";

function StateFilter(props) {
    const {
        activeFilter,
        activeRegion,
        activeState,
        history,
        selectRegion,
        selectState,
        stateOptions,
        toggleFilterOptions,
    } = props;

    const options = stateOptions.map(a => {
        const state_region = window.stateOrRegion === 'state' ? a.state : a;
        const display = window.stateOrRegion === 'state' ? a.state_display : a;

        return (
            <div
                key={a.state}
                className="filterbar-li"
                data-state={state_region}
                onClick={() => {
                    if (window.stateOrRegion === 'state') {
                        selectState(state_region);
                        history.push(`${history.location.pathname}#state=${encodeURI(state_region)}&view=list`);
                    } else {
                        selectRegion(state_region);
                        history.push(`${history.location.pathname}#region=${encodeURI(state_region)}&view=list`);
                    }
                }}
            >
                {display}
            </div>
        );
    });

    let filterTitle = window.stateOrRegion === "state" ? "Choose A State" : "Choose A Region";
    if (activeRegion && activeRegion !== "all") {
        filterTitle = decodeURI(activeRegion);
    } else if (activeState) {
        filterTitle = activeState;
    }

    // activeRegion && stateOptions.length ?
    //     stateOptions.filter(a => a === activeRegion)[0] :
    //     "Choose A Region";

    return (
        <div
            id="state_filter"
            className="filterbar-select"
            onClick={(e) => {
                e.stopPropagation();
                toggleFilterOptions("state");
            }}
        >
            <div className="filterbar-title with-arrow">
                <span className="filterbar-title-span">{filterTitle}</span>
                <span className={`filterbar-dropdown-arrow ${activeFilter === "state" ? "up" : ""}`} />
            </div>
            <div className="filterbar-options" hidden={activeFilter !== "state"}>
                {options}
            </div>
        </div>
    );
}

StateFilter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    activeRegion: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    selectRegion: PropTypes.func.isRequired,
    selectState: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default StateFilter;
