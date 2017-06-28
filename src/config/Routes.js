/* eslint-disable */
import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import HomeContainer from "../views/home/containers/HomeContainer";
import HPSearchbarContainer from "../views/home/containers/HPSearchbarContainer";

function Routes(props) {
    const { onlySearch, store } = props;
    if (onlySearch) {
        return (
            <div id="hp_searchbar">
                <Route path="*" component={HPSearchbarContainer} />
            </div>
        );
    }
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
