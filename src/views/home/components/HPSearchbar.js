import React, { Component } from "react";
import PropTypes from "prop-types";

class HPSearchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            communities: [],
            options: {
                region: "",
                br: "",
            },
        };

        this.getCommunities = this.getCommunities.bind(this);
    }

    getCommunities(e) {
        fetch(`http://www.solomon.aptdemo.com.apartmentdemo.com:1024/api/v5/corporation/communities/region/${encodeURI(e.target.value)}/`)
            .then(res => res.json())
            .then(communities => this.setState({ communities }))
            .catch(err => console.log(err));
        }

    render() {
        const {
            stateOptions,
        } = this.props;

        const { communities } = this.state;

        // Making a set, ie11 doesn't like sets so doing it the old way
        let bedroomOptions = [];
        communities.forEach(a => {
            const communityBedrooms = Object.keys(a.bed_bath_combos);
            if (communityBedrooms || communityBedrooms.length) {
                communityBedrooms.forEach(b => {
                    if (bedroomOptions.indexOf(b) === -1) {
                        bedroomOptions.push(b);
                    }
                });
            }
        });

        // Remove 0 and keep 'Studio'
        const indexOfZeroBrs = bedroomOptions.indexOf("0");
        if (indexOfZeroBrs >= 0) {
            bedroomOptions = [
                ...bedroomOptions.slice(0, indexOfZeroBrs),
                ...bedroomOptions.slice(indexOfZeroBrs + 1)
            ];
        }

        const brOptionsList = bedroomOptions.map(a => {
            let display;
            if (a === "Studio") {
                display = "Studio";
            } else if (a === "1") {
                display = "1 Bedroom";
            } else {
                display = `${a} Bedrooms`;
            }
            return (
                <option key={a} value={a}>{display}</option>
            )
        });

        const regionOptions = stateOptions.map(a => {
            return (
                <option key={a} value={a}>{a}</option>
            );
        });

        return (
            <form id="quick-search-form" className="form-inline">
                <div className="form-group">
                    <select
                        name="state"
                        id="state-selector"
                        data-placeholder="Select a state"
                        onChange={this.getCommunities}
                    >
                        <option defaultValue>Select a Region</option>
                        {regionOptions}
                    </select>
                </div>
                <div className="form-group start_hidden">
                    <select
                        id="city-selector"
                        disabled={communities.length === 0}
                    >
                        {!communities.length && <option defaultValue>Select a Region First</option>}
                        {communities.length && brOptionsList}
                    </select>
                </div>
                <div className="form-group start_hidden" />
                <button
                    type="submit"
                    id="quick-search"
                    className="btn btn-default"
                    disabled={communities.length === 0}
                >
                    {!communities.length ? 'Select a Region' : 'Go'}
                </button>
            </form>
        );
    }
}

HPSearchbar.propTypes = {
    stateOptions: PropTypes.array.isRequired,
};

export default HPSearchbar;
