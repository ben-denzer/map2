/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";

function MobileHeader(props) {
    const { handleMobileMenuClick } = props;
    return (
        <div id="mobile_header">
            <div id="mobile_menu" onClick={handleMobileMenuClick}>
                <div className="hamburger-bar" />
                <div className="hamburger-bar" />
                <div className="hamburger-bar" />
            </div>
            <h3 id="mobile_header_title">The Solomon Organization</h3>
        </div>
    );
}



MobileHeader.propTypes = {
    handleMobileMenuClick: PropTypes.func.isRequired,
};

export default MobileHeader;
