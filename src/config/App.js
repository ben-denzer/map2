import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getStateData } from "../api/apiActions";
import Routes from "./Routes";
import configureStore from "./configureStore";
import { SET_MOBILE } from "../views/actionTypes";
import "../css/main.css";
// import "../../node_modules/react-md/dist/react-md.light_blue-cyan.min.css";

const store = configureStore();

// Load all possible states (states as-in New York, Texas, etc.)
document.addEventListener('DOMContentLoaded', () => {
    store.dispatch(getStateData());
});

// Check for mobile
let resizeTimer;
const checkForMobile = () => {
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(() => {
        const mobile = window.innerWidth < 1100;
        store.dispatch({ type: SET_MOBILE, mobile });
    }, 500);
};
checkForMobile();
window.addEventListener("resize", checkForMobile);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes store={store} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
