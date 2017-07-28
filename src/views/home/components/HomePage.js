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
        this.getStateFromUrl();
        // Close the filter options if they click anywhere else on the page
        document.addEventListener("click", (e) => {
            if (!/filterbar/.test(e.target.className)) {
                this.props.toggleFilterOptions();
            }
        });
    }

    componentWillReceiveProps(prevProps) {
        if (this.props.history.location.hash !== prevProps.history.location.hash) {
            this.getStateFromUrl();
        }
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

    getStateFromUrl() {
        console.log(this.props.activeRegion);
        if (!this.props.activeRegion) {
            const hash = this.props.history.location.hash;
            if (hash) {
                if (/state=/.test(hash)) {
                    console.log('hit in test', hash.slice(7, 9));
                    const stateInUrl = hash.slice(7, 9);
                    this.props.selectState(stateInUrl);
                    this.props.selectRegion('all');
                } else {
                    const regionIndex = hash.search(/region=/);
                    const bedroomIndex = hash.search(/br=/);
                    if (regionIndex === 0 || regionIndex) {
                        const rawRegion = hash.slice(regionIndex + 7);
                        const stateToFind = rawRegion.slice(0, rawRegion.indexOf('&'));
                        this.props.selectRegion(decodeURI(stateToFind));
                    }

                    if (bedroomIndex && parseInt(bedroomIndex, 10) >= 0) {
                        const rawBedrooms = hash.slice(bedroomIndex + 3);
                        const brText = rawBedrooms.slice(0, rawBedrooms.indexOf('&'));
                        const brToFind = /studio/i.test(brText) ? 0 : brText;
                        setTimeout(() => this.props.setBedrooms(brToFind), 2000);
                    }
                }
            } else {
                this.props.selectRegion('all');
            }
        }
    }

    render() {
        const { activeRegion, activeState, history, sidebarFilterVisibility } = this.props;
        if (this.props.mobile) {
            return (
                <div id="mobile_container" className={!history.location.hash && 'first-page'}>
                    <MobileHeader
                        activeRegion={activeRegion}
                        activeState={activeState}
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
                    className={sidebarFilterVisibility ? "open" : ""}
                >
                    <SearchResultsContainer {...this.props} />
                    <SidebarFilterContainer {...this.props} />
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    activeRegion: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    selectRegion: PropTypes.func.isRequired,
    selectState: PropTypes.func.isRequired,
    setBedrooms: PropTypes.func.isRequired,
    sidebarFilterVisibility: PropTypes.bool.isRequired,
    toggleFilterOptions: PropTypes.func.isRequired,
};

export default HomePage;
