/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Checkbox from "react-md/lib/SelectionControls/Checkbox";
// import SelectField from 'react-md/lib/SelectFields';
import RangeSlider from "../../sharedComponents/RangeSlider";

function SidebarFilter(props) {
    const {
        allData,
        amenitiesSelected,
        catsSelected,
        dogsSelected,
        featuresSelected,
        handleCheckbox,
        handleMultiSelect,
        handleSliderChange,
        sidebarFilterVisibility,
        toggleMultiSelect,
    } = props;

    const allAmenities = new Set(
        allData.map(a => [...a.community_features]).filter((b) => {
            // dishwasher also shows up in fp_features so it is really confusing
            // to have it here too - plus it makes it give bad results
            if (!/dishwasher/i.test(b)) {
                return b;
            }
        }).reduce((c, d) => [...c, ...d], []),
    );

    const amenities = [...allAmenities].map(a => (
        <div
            key={a}
            className="multi-filter-option"
            data-li={a}
            data-filter="amenitiesSelected"
            onClick={handleMultiSelect}
        >
            <div
                className={`multi-checkbox ${amenitiesSelected.indexOf(a) === -1 ? "" : "checked"}`}
                data-li={a}
                data-filter="amenitiesSelected"
            />
            {a}
        </div>
    ));

    const allFeatures = new Set(
        allData.map(a => [...a.floorplan_features]).reduce((b, c) => [...b, ...c], []),
    );

    const features = [...allFeatures].map(a => (
        <div
            key={a}
            className="multi-filter-option"
            data-li={a}
            data-filter="featuresSelected"
            onClick={handleMultiSelect}
        >
            <div
                className={`multi-checkbox ${featuresSelected.indexOf(a) === -1 ? "" : "checked"}`}
                data-li={a}
                data-filter="featuresSelected"
            />
            {a}
        </div>
    ));

    const openFilter = props.sidebarMultiSelectStatus;
    const possibleMin = Math.min(...allData.map(a => a.parsedPrices.min));
    const possibleMax = Math.max(...allData.map(a => a.parsedPrices.max));
    const minPrice = isFinite(possibleMin) ? possibleMin : null;
    const maxPrice = isFinite(possibleMax) ? possibleMax : null;

    return (
        <div
            className={`sidebar-container${sidebarFilterVisibility ? " open" : ""}`}
            id="sidebar_filter_container"
        >
            <div className="sidebar-title">Refine Your Options</div>
            <div className="sidebar-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
            </div>

            <div className="multi-filter" id="amenities_filter" hidden={!amenities.length}>
                <div
                    className="multi-filter-title"
                    data-filter="amenities"
                    onClick={toggleMultiSelect}
                >
                    Amenities
                    <div
                        className="multi-count"
                        data-filter="amenities"
                        hidden={Number(amenitiesSelected.length) <= 0}
                    >
                        {amenitiesSelected.length}
                    </div>
                </div>
                <div
                    className={`multi-filter-options ${openFilter === "amenities" ? "open" : ""}`}
                    hidden={openFilter !== "amenities"}
                >
                    {amenities}
                </div>
            </div>

            <div className="multi-filter" id="amenities_filter" hidden={!features.length}>
                <div
                    className="multi-filter-title"
                    data-filter="features"
                    onClick={toggleMultiSelect}
                >
                    Features
                    <div
                        className="multi-count"
                        data-filter="features"
                        hidden={Number(featuresSelected.length) <= 0}
                    >
                        {featuresSelected.length}
                    </div>
                </div>
                <div
                    className={`multi-filter-options ${openFilter === "features" ? "open" : ""}`}
                    hidden={openFilter !== "features"}
                >
                    {features}
                </div>
            </div>

            { minPrice && maxPrice &&
                <RangeSlider
                    label="Price"
                    handleSliderChange={handleSliderChange}
                    id="priceFilter"
                    max={maxPrice}
                    min={minPrice}
                    step={100}
                />
            }


            <div id="filter_pets_container">
                <Checkbox
                    id="filter_cats"
                    data-filter="catsFilter"
                    name="cats"
                    label="Cats"
                    checked={catsSelected}
                    onChange={() => handleCheckbox("catsSelected")}
                />

                <Checkbox
                    id="filter_dogs"
                    data-filter="dogsFilter"
                    label="Dogs"
                    name="dogs"
                    checked={dogsSelected}
                    onChange={() => handleCheckbox("dogsSelected")}
                />
            </div>
        </div>
    );
}

SidebarFilter.propTypes = {
    allData: PropTypes.array.isRequired,
    amenitiesSelected: PropTypes.array.isRequired,
    catsSelected: PropTypes.bool.isRequired,
    dogsSelected: PropTypes.bool.isRequired,
    featuresSelected: PropTypes.array.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
    handleMultiSelect: PropTypes.func.isRequired,
    handleSliderChange: PropTypes.func.isRequired,
    sidebarFilterVisibility: PropTypes.bool.isRequired,
    sidebarMultiSelectStatus: PropTypes.string.isRequired,
    toggleMultiSelect: PropTypes.func.isRequired,
};

export default SidebarFilter;
