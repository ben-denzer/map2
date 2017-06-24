import React, { Component } from "react";
import PropTypes from "prop-types";
import { initMap } from "../../../services/mapService";
import changeMap from "../../../utils/changeMap";

class MapContainer extends Component {
    componentDidMount() {
        // if (!this.props.mobile) {
        //     initMap();
        // } else {
            const {
                activeCity,
                defaultMapLocation,
                filteredData,
                highlightedCommunity,
                toggleHighlight,
            } = this.props;
            const options = { filteredData, activeCity, defaultMapLocation };
            changeMap(options, highlightedCommunity, toggleHighlight);
        // }
    }

    componentWillReceiveProps(nextProps) {
        const {
            activeCity,
            activeState,
            defaultMapLocation,
            filteredData,
            highlightedCommunity,
            toggleHighlight,
        } = nextProps;

        const options = { filteredData, activeCity, defaultMapLocation };

        if (filteredData.length !== this.props.filteredData.length) {
            setTimeout(() => changeMap(options, highlightedCommunity, toggleHighlight), 0);
        } else if (activeCity !== this.props.activeCity) {
            setTimeout(() => changeMap(options, highlightedCommunity, toggleHighlight), 0);
        } else if (activeState !== this.props.activeState) {
            setTimeout(() => changeMap(options, highlightedCommunity, toggleHighlight), 0);
        } else if (highlightedCommunity !== this.props.highlightedCommunity) {
            setTimeout(() => changeMap(options, highlightedCommunity, toggleHighlight), 0);
        }
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.activeState !== nextProps.activeState) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div id="map" className={this.props.activeState && "sidebar-open"} />
        );
    }
}

MapContainer.defaultProps = {
    highlightedCommunity: null,
};

MapContainer.propTypes = {
    activeCity: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
    defaultMapLocation: PropTypes.object.isRequired,
    filteredData: PropTypes.array.isRequired,
    highlightedCommunity: PropTypes.number,
    toggleHighlight: PropTypes.func.isRequired,
};

export default MapContainer;
