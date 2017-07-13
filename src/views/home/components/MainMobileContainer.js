/* eslint-disable */
import React from "react";
import PropTypes from 'prop-types';
import MobileChooseState from "./mobile/MobileChooseState";
import MobileListAndMap from "./mobile/MobileListAndMap";

class MainMobileContainer extends React.Component {
    render() {
        const {
            activeFilter,
            activeRegion,
            handleFilter,
            history,
            selectRegion,
            stateOptions,
            toggleFilterOptions,
        } = this.props;

        if (!history.location.hash) {
            return (
                <MobileChooseState
                    activeFilter={activeFilter}
                    activeRegion={activeRegion}
                    handleFilter={handleFilter}
                    history={history}
                    selectRegion={selectRegion}
                    stateOptions={stateOptions}
                    toggleFilterOptions={toggleFilterOptions}
                />
            );
        }

        return (
            <MobileListAndMap {...this.props} />
        );
    }
}

MainMobileContainer.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    activeRegion: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    selectRegion: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default MainMobileContainer;
