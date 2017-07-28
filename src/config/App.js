import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getRegions, getStates } from "../api/apiActions";
import Routes from "./Routes";
import configureStore from "./configureStore";
import { SET_MOBILE } from "../views/actionTypes";
import "../css/main.css";
import "../../node_modules/react-md/dist/react-md.light_blue-cyan.min.css";

const store = configureStore();

// Load all possible states (states as-in New York, Texas, etc.)
// window.corpId = document.getElementsByTagName('body')[0].dataset.corporationId;
// console.log(window.corpId);
if (window.stateOrRegion === 'state') {
    store.dispatch(getStates());
} else {
    store.dispatch(getRegions());
}

// Check for mobile
let resizeTimer;
const checkForMobile = (noTimer) => {
    if (noTimer) {
        const mobile = window.innerWidth < 1100;
        store.dispatch({ type: SET_MOBILE, mobile });
    } else {
        if (resizeTimer) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(() => {
            const mobile = window.innerWidth < 1100;
            store.dispatch({ type: SET_MOBILE, mobile });
        }, 500);
    }
};

checkForMobile(true);
window.addEventListener("resize", checkForMobile);

function App(props) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes store={store} onlySearch={props.onlySearch} />
            </BrowserRouter>
        </Provider>
    );
}

App.defaultProps = {
    onlySearch: false,
};

App.propTypes = {
    onlySearch: PropTypes.bool,
};

export default App;
