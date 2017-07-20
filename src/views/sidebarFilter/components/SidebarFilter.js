/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Checkbox from "react-md/lib/SelectionControls/Checkbox";
import Slider from 'react-md/lib/Sliders';
// import SelectField from 'react-md/lib/SelectFields';
import RangeSlider from "../../sharedComponents/RangeSlider";
import catIcon from "../../../img/cat.png";
import dogIcon from "../../../img/dog.png";

function SidebarFilter(props) {
    const {
        allData,
        amenitiesSelected,
        catsSelected,
        distanceVal,
        dogsSelected,
        featuresSelected,
        location,
        handleCheckbox,
        handleLocationChange,
        handleDistanceChange,
        handleMultiSelect,
        handleSliderChange,
        sidebarFilterVisibility,
        toggleMultiSelect,
    } = props;

    const allAmenities = [];
    allData.forEach(a => {
        const communityAmen = a.community_features;
        communityAmen.forEach(b => {
            if (!/dishwasher/i.test(b) && allAmenities.indexOf(b) === -1) {
                allAmenities.push(b);
            }
        });
    });

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

    const allFeatures = [];
    allData.forEach(a => {
        const commFeatures = a.floorplan_features;
        commFeatures.forEach(b => {
            if (allFeatures.indexOf(b) === -1) {
                allFeatures.push(b);
            }
        });
    });

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
                Discover what Solomon has to offer. Whether you're looking for an apartment close to work or a pet-friendly home with great amenities, our wide range of communities and locations fit any lifestyle. Schedule a tour with us today; we'd love to welcome you home!
            </div>

            <div className="text-box" id="location_filter">
                <input
                    type="text"
                    placeholder="Location (City, State)"
                    value={location}
                    onChange={(e) => handleLocationChange}
                />
            </div>

            <div id="distance_slider_container">
                <Slider
                    defaultValue={distanceVal}
                    discrete
                    id="distance_slider"
                    label="Search Radius (Miles)"
                    max={40}
                    min={0}
                    step={10}
                    onChange={(val) => handleDistanceChange(val)}
                />
            </div>

            <div className="multi-filter" id="amenities_filter" hidden={!amenities.length}>
                <div
                    className="multi-filter-title"
                    data-filter="amenities"
                    onClick={toggleMultiSelect}
                >
                    <div className="filter-title-left" data-filter="amenities">
                        Amenities
                    </div>
                    <div className="filter-title-right">
                        <div
                            className="multi-count"
                            data-filter="amenities"
                            hidden={Number(amenitiesSelected.length) <= 0}
                        >
                            {amenitiesSelected.length}
                        </div>
                        <div className="expand-button-container">
                            {openFilter === "amenities" ? " - " : " + "}
                        </div>
                    </div>
                </div>
                <div
                    className={`multi-filter-options ${openFilter === "amenities" ? "open" : ""}`}
                >
                    {amenities}
                </div>
            </div>

            <div className="multi-filter" id="features_filter" hidden={!features.length}>
                <div
                    className="multi-filter-title"
                    data-filter="features"
                    onClick={toggleMultiSelect}
                >
                    <div className="filter-title-left" data-filter="features">
                        Features
                    </div>
                    <div className="filter-title-right">
                        <div
                            className="multi-count"
                            data-filter="features"
                            hidden={Number(featuresSelected.length) <= 0}
                        >
                            {featuresSelected.length}
                        </div>
                        <div className="expand-button-container">
                            {openFilter === "features" ? " - " : " + "}
                        </div>
                    </div>
                </div>
                <div
                    className={`multi-filter-options ${openFilter === "features" ? "open" : ""}`}
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

            <div id="filter_pets_label" className="filter-label">
                Pet Friendly <i className="fa fa-paw" />
            </div>

            <div id="filter_pets_container">
                <Checkbox
                    id="filter_dogs"
                    data-filter="dogsFilter"
                    label={<img className="pet-icon" src={dogIcon} alt="dogs" />}
                    name="dogs"
                    checked={dogsSelected}
                    onChange={() => handleCheckbox("dogsSelected")}
                />

                <Checkbox
                    id="filter_cats"
                    data-filter="catsFilter"
                    name="cats"
                    label={<img className="pet-icon" src={catIcon} alt="cats" />}
                    checked={catsSelected}
                    onChange={() => handleCheckbox("catsSelected")}
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
    handleDistanceChange: PropTypes.func.isRequired,
    handleLocationChange: PropTypes.func.isRequired,
    handleMultiSelect: PropTypes.func.isRequired,
    handleSliderChange: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
    sidebarFilterVisibility: PropTypes.bool.isRequired,
    sidebarMultiSelectStatus: PropTypes.string.isRequired,
    toggleMultiSelect: PropTypes.func.isRequired,
};

export default SidebarFilter;
