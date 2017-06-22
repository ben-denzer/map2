import React, { Component } from "react";
import PropTypes from "prop-types";
import MainMobileContainer from "./MainMobileContainer";
import MobileHeader from "./mobile/MobileHeader";
import Filterbar from "./Filterbar";
import MapContainer from "./MapContainer";
import SearchResultsContainer from "../../searchResults/containers/SearchResultsContainer";
import SidebarFilterContainer from "../../sidebarFilter/containers/SidebarFilterContainer";

class HomePage extends Component {
    componentDidMount() {
        if (!this.props.activeState) {
            const hash = this.props.history.location.hash;
            if (hash) {
                const stateIndex = hash.search(/state=\w\w/);
                const stateToFind = hash.slice(stateIndex + 6, stateIndex + 8);
                this.props.selectState({ stateToFind });
            }
        }
        // Close the filter options if they click anywhere else on the page
        document.addEventListener("click", (e) => {
            if (!/filterbar/.test(e.target.className)) {
                this.props.toggleFilterOptions();
            }
        });
    }
    render() {
        if (this.props.mobile) {
            return (
                <div id="mobile_container">
                    <MobileHeader
                        handleMobileMenuClick={this.props.handleMobileMenuClick}
                    />
                    <MainMobileContainer {...this.props} />
                </div>
            );
        }

        return (
            <div id="home_page_container">
                <div id="top_bar">Our Communities - Where Would You Like To Live</div>
                <Filterbar {...this.props} />
                <MapContainer {...this.props} />
                <div
                    id="sidebar"
                    className={this.props.sidebarFilterVisibility ? "open" : ""}
                >
                    <SearchResultsContainer {...this.props} />
                    <SidebarFilterContainer {...this.props} />
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    activeState: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired,
    handleMobileMenuClick: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    selectState: PropTypes.func.isRequired,
    sidebarFilterVisibility: PropTypes.bool.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default HomePage;
