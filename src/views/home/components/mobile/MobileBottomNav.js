/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import slidersThumbDark from "../../../../img/sliders_thumb_dark.png";

function MobileBottomNav(props) {
    const { changeMobileView } = props;
    return (
        <div id="mobile_bottom_nav">
            <img
                src={slidersThumbDark}
                id="filter_button"
                onClick={() => {changeMobileView('filter')}}
            />
            <div className="bottom-nav-button" id="sort_button" onClick={() => {}} />
        </div>
    );
}

MobileBottomNav.propTypes = {
};

export default MobileBottomNav;
