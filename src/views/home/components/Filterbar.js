import React from "react";
import PropTypes from "prop-types";
import BedroomsFilter from "./filters/BedroomsFilter";
import CityFilter from "./filters/CityFilter";
import StateFilter from "./filters/StateFilter";
import slidersThumb from "../../../img/sliders_thumb.png";
import resetArrow from "../../../img/reset_arrow.png";

function Filterbar(props) {
    const {
        activeBedrooms,
        activeCity,
        activeFilter,
        activeRegion,
        activeState,
        allData,
        filteredData,
        handleCounter,
        handleFilter,
        history,
        resetFilters,
        selectRegion,
        selectState,
        stateOptions,
        toggleFilterOptions,
        toggleSidebarFilter,
    } = props;

    return (
        <div id="filterbar">
            <div id="filterbar_left">
                <StateFilter
                    activeFilter={activeFilter}
                    activeRegion={activeRegion}
                    activeState={activeState}
                    handleFilter={handleFilter}
                    history={history}
                    selectRegion={selectRegion}
                    selectState={selectState}
                    stateOptions={stateOptions}
                    toggleFilterOptions={toggleFilterOptions}
                />
                <CityFilter
                    activeCity={activeCity}
                    activeFilter={activeFilter}
                    activeRegion={activeRegion}
                    handleFilter={handleFilter}
                    filteredData={filteredData}
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
            </div>
            <div id="filterbar_right">
                <img
                    id="reset_arrow"
                    className={!activeRegion && "disabled"}
                    src={resetArrow}
                    alt="Reset Filters"
                    onClick={() => {
                        selectRegion('all');
                        selectState('');
                        history.push(`${history.location.pathname}#region=all&view=list`);
                        resetFilters();
                    }}
                />
                <img
                    id="sliders_thumb"
                    src={slidersThumb}
                    alt="More Filters"
                    onClick={toggleSidebarFilter}
                />
            </div>
        </div>
    );
}

Filterbar.propTypes = {
    activeBedrooms: PropTypes.string.isRequired,
    activeCity: PropTypes.string.isRequired,
    activeFilter: PropTypes.string.isRequired,
    activeRegion: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    allData: PropTypes.array.isRequired,
    filteredData: PropTypes.array.isRequired,
    handleCounter: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    resetFilters: PropTypes.func.isRequired,
    selectRegion: PropTypes.func.isRequired,
    selectState: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
    toggleSidebarFilter: PropTypes.func.isRequired,
};

export default Filterbar;
