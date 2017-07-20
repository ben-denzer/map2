/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import states from "../../../../utils/usStates";

function MobileHeader(props) {
    const { activeRegion, activeState, changeMobileView } = props;

    // Early return (remove hamburger) when on the mobile choose state page
    if (!activeRegion || /all/i.test(activeRegion)) {
        if (!activeState) {
            return (
                <div id="mobile_header">
                    <h3 id="mobile_header_title">Choose Your Region</h3>
                </div>
            );
        }
    }

    const getDisplayRegion = () => {
        if (activeRegion && !/all/i.test(activeRegion)) {
            return activeRegion;
        } else if (activeState) {
            return states[activeState];
        }
    };

    const displayRegion = getDisplayRegion();

    return (
        <div id="mobile_header">
            <div id="mobile_menu" onClick={() => changeMobileView('')}>
                <div className="hamburger-bar" />
                <div className="hamburger-bar" />
                <div className="hamburger-bar" />
            </div>
            <h3 id="mobile_header_title">{displayRegion}</h3>
        </div>
    );
}

MobileHeader.propTypes = {
    changeMobileView: PropTypes.func.isRequired,
};

export default MobileHeader;
