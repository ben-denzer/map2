import React from "react";
import PropTypes from "prop-types";
// import BathroomsFilter from "./filters/BathroomsFilter";
import BedroomsFilter from "./filters/BedroomsFilter";
import CityFilter from "./filters/CityFilter";
import StateFilter from "./filters/StateFilter";
import slidersThumb from "../../../img/sliders_thumb.png";
import resetArrow from "../../../img/reset_arrow.png";

function Filterbar(props) {
    const {
        // activeBathrooms,
        activeBedrooms,
        activeCity,
        activeFilter,
        activeState,
        allData,
        handleCounter,
        handleFilter,
        history,
        resetFilters,
        selectState,
        stateOptions,
        toggleFilterOptions,
        toggleSidebarFilter,
    } = props;

    return (
        <div id="filterbar">
            <StateFilter
                activeFilter={activeFilter}
                activeState={activeState}
                handleFilter={handleFilter}
                history={history}
                selectState={selectState}
                stateOptions={stateOptions}
                toggleFilterOptions={toggleFilterOptions}
            />
            <CityFilter
                activeCity={activeCity}
                activeFilter={activeFilter}
                activeState={activeState}
                handleFilter={handleFilter}
                allData={allData}
                toggleFilterOptions={toggleFilterOptions}
            />
            <BedroomsFilter
                activeBedrooms={activeBedrooms}
                activeState={activeState}
                allData={allData}
                handleCounter={handleCounter}
                handleFilter={handleFilter}
                toggleFilterOptions={toggleFilterOptions}
            />
            {/*<BathroomsFilter
                activeBathrooms={activeBathrooms}
                activeState={activeState}
                allData={allData}
                handleCounter={handleCounter}
                handleFilter={handleFilter}
                toggleFilterOptions={toggleFilterOptions}
            />*/}

            <img
                id="reset_arrow"
                className={!activeState && "disabled"}
                src={resetArrow}
                alt="Reset Filters"
                onClick={() => {
                    selectState('all');
                    history.push(history.location.pathname + '#region=all&view=list');
                    resetFilters();
                }}
            />
            <img
                id="sliders_thumb"
                className={!activeState && "disabled"}
                src={slidersThumb}
                alt="More Filters"
                onClick={activeState && toggleSidebarFilter}
            />
        </div>
    );
}

Filterbar.propTypes = {
    // activeBathrooms: PropTypes.string.isRequired,
    activeBedrooms: PropTypes.string.isRequired,
    activeCity: PropTypes.string.isRequired,
    activeFilter: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    allData: PropTypes.array.isRequired,
    handleCounter: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    resetFilters: PropTypes.func.isRequired,
    selectState: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
    toggleSidebarFilter: PropTypes.func.isRequired,
};

export default Filterbar;
