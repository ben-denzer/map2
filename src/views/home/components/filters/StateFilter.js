import React from "react";
import PropTypes from "prop-types";

function StateFilter(props) {
    const {
        activeFilter,
        activeRegion,
        history,
        selectRegion,
        stateOptions,
        toggleFilterOptions,
    } = props;

    const options = stateOptions.map(a => (
        <div
            key={a}
            className="filterbar-li"
            data-state={a.state}
            onClick={() => {
                selectRegion(a);
                history.push(`${history.location.pathname}#region=${encodeURI(a)}&view=list`);
            }}
        >
            {a}
        </div>
    ));

    let filterTitle = "Choose A Region";
    if (activeRegion && activeRegion !== "all") {
        filterTitle = decodeURI(activeRegion);
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
    history: PropTypes.object.isRequired,
    selectRegion: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default StateFilter;
