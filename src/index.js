import React from "react";
import ReactDOM from "react-dom";
import App from "./config/App";
import apiUrl from './api/apiUrl';

if (document.getElementById("root")) {
    ReactDOM.render(
        <App />,
        document.getElementById("root"),
    );
}

if (document.getElementById("quick-search-form-region")) {
    ReactDOM.render(
        <App onlySearch />,
        document.getElementById("quick-search-form-region")
    );
}
