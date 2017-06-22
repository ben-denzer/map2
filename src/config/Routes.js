/* eslint-disable */
import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import HomeContainer from "../views/home/containers/HomeContainer";

function Routes(props) {
    const { store } = props;
    if (props.store.getState().home.mobile) {
        return (
            <div id="mobile_page_container">
                <Route path="/" component={HomeContainer} />
            </div>
        );
    }
    return (
        <div id="page_container">
            <Route path="/" component={HomeContainer} />
        </div>
    );
}

Routes.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Routes;
