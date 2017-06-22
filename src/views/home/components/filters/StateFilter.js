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
            key={a.state}
            className="filterbar-li"
            data-state={a.state}
            onClick={(e) => {
                selectState(e);
                history.push(`/#state=${a.state}&view=list`);
            }}
        >
            {a.state_display}
        </div>
    ));

    const filterTitle = activeState && stateOptions.length ?
        stateOptions.filter(a => a.state === activeState)[0].state_display :
        "Choose A State";

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
