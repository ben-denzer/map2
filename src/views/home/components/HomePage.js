import React, { Component } from "react";
import PropTypes from "prop-types";
import MainMobileContainer from "./MainMobileContainer";
import MobileHeader from "./mobile/MobileHeader";
import Filterbar from "./Filterbar";
import MapContainer from "./MapContainer";
import SearchResultsContainer from "../../searchResults/containers/SearchResultsContainer";
import SidebarFilterContainer from "../../sidebarFilter/containers/SidebarFilterContainer";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.changeMobileView = this.changeMobileView.bind(this);
    }
    componentDidMount() {
        if (!this.props.activeState) {
            // const hash = this.props.history.location.hash;
            // if (hash) {
            //     const stateIndex = hash.search(/state=\w\w/);
            //     // const cityIndex = hash.search(/city=/);
            //     if (stateIndex === 0 || stateIndex) {
            //         const stateToFind = hash.slice(stateIndex + 6, stateIndex + 8);
            //         this.props.selectState({ stateToFind });
            //     }
            //     // if (cityIndex) {
            //     //     const cityToTheEnd = hash.slice(cityIndex + 5);
            //     //     const cityToFind = cityToTheEnd.slice(0, cityToTheEnd.indexOf('&'));
            //     // }
            // }
        }
        // Close the filter options if they click anywhere else on the page
        document.addEventListener("click", (e) => {
            if (!/filterbar/.test(e.target.className)) {
                this.props.toggleFilterOptions();
            }
        });
    }

    changeMobileView(newView) {
        const oldPathname = this.props.history.location.pathname;
        if (!newView) {
            this.props.history.push(oldPathname);
            return;
        }
        const oldHash = this.props.history.location.hash;
        const newHash = oldHash.slice(0, oldHash.lastIndexOf('=') + 1) + newView;
        this.props.history.push(oldPathname + newHash);
    }

    render() {
        if (this.props.mobile) {
            return (
                <div id="mobile_container" className={!this.props.history.location.hash && 'first-page'}>
                    <MobileHeader
                        changeMobileView={this.changeMobileView}
                    />
                    <MainMobileContainer {...this.props} changeMobileView={this.changeMobileView} />
                </div>
            );
        }

        return (
            <div id="home_page_container">
                <div id="top_bar">
                    Our Communities
                    <div id="house_icon_container">
                        <img src="/gridmedia/img/house.png" alt="" />
                    </div>
                    Where Would You Like To Live
                </div>
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
    history: PropTypes.object.isRequired,
    selectState: PropTypes.func.isRequired,
    sidebarFilterVisibility: PropTypes.bool.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default HomePage;
