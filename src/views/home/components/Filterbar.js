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
        activeRegion,
        allData,
        handleCounter,
        handleFilter,
        history,
        resetFilters,
        selectRegion,
        stateOptions,
        toggleFilterOptions,
        toggleSidebarFilter,
    } = props;

    return (
        <div id="filterbar">
            <StateFilter
                activeFilter={activeFilter}
                activeRegion={activeRegion}
                handleFilter={handleFilter}
                history={history}
                selectRegion={selectRegion}
                stateOptions={stateOptions}
                toggleFilterOptions={toggleFilterOptions}
            />
            <CityFilter
                activeCity={activeCity}
                activeFilter={activeFilter}
                activeRegion={activeRegion}
                handleFilter={handleFilter}
                allData={allData}
                toggleFilterOptions={toggleFilterOptions}
            />
            <BedroomsFilter
                activeBedrooms={activeBedrooms}
                activeRegion={activeRegion}
                allData={allData}
                handleCounter={handleCounter}
                handleFilter={handleFilter}
                toggleFilterOptions={toggleFilterOptions}
            />
            {/*<BathroomsFilter
                activeBathrooms={activeBathrooms}
                activeRegion={activeRegion}
                allData={allData}
                handleCounter={handleCounter}
                handleFilter={handleFilter}
                toggleFilterOptions={toggleFilterOptions}
            />*/}

            <img
                id="reset_arrow"
                className={!activeRegion && "disabled"}
                src={resetArrow}
                alt="Reset Filters"
                onClick={() => {
                    selectRegion('all');
                    history.push(history.location.pathname + '#region=all&view=list');
                    resetFilters();
                }}
            />
            <img
                id="sliders_thumb"
                className={!activeRegion && "disabled"}
                src={slidersThumb}
                alt="More Filters"
                onClick={activeRegion && toggleSidebarFilter}
            />
        </div>
    );
}

Filterbar.propTypes = {
    // activeBathrooms: PropTypes.string.isRequired,
    activeBedrooms: PropTypes.string.isRequired,
    activeCity: PropTypes.string.isRequired,
    activeFilter: PropTypes.string.isRequired,
    activeRegion: PropTypes.string.isRequired,
    allData: PropTypes.array.isRequired,
    handleCounter: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    resetFilters: PropTypes.func.isRequired,
    selectRegion: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
    toggleSidebarFilter: PropTypes.func.isRequired,
};

export default Filterbar;
