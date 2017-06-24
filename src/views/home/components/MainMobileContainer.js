/* eslint-disable */
import React from "react";
import PropTypes from 'prop-types';
import MobileChooseState from "./mobile/MobileChooseState";
import MobileListAndMap from "./mobile/MobileListAndMap";

class MainMobileContainer extends React.Component {
    render() {
        const {
            activeFilter,
            activeState,
            handleFilter,
            history,
            selectState,
            stateOptions,
            toggleFilterOptions,
        } = this.props;

        if (!history.location.hash) {
            return (
                <MobileChooseState
                    activeFilter={activeFilter}
                    activeState={activeState}
                    handleFilter={handleFilter}
                    history={history}
                    selectState={selectState}
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
    activeState: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    selectState: PropTypes.func.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default MainMobileContainer;
