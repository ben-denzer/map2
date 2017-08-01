import React, { Component } from "react";
import PropTypes from "prop-types";
import makeSet from "../../../utils/makeSet";
import apiUrl from '../../../api/apiUrl';

class HPSearchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            communities: [],
            options: {
                state: "",
                region: "",
                br: "",
            },
        };

        this.getCommunities = this.getCommunities.bind(this);
        this.setActiveState = this.setActiveState.bind(this);
        this.sortAndMapBedrooms = this.sortAndMapBedrooms.bind(this);
    }

    componentDidMount() {
        this.getCommunities();
    }

    getCommunities(e) {
        fetch(`${apiUrl.domainUrl}api/v5/corporation/communities/region/all/`)
            .then(res => res.json())
            .then(communities => {
                this.setState({ communities })
            })
            .catch(err => console.log(err));
    }

    setActiveState(e) {
        const options = Object.assign({}, this.state.options, { state: e.target.value });
        this.setState({ options });
    }

    sortAndMapBedrooms(communities) {
        let bedroomOptions = [];
        communities.forEach(a => {
            const commBedrooms = Object.keys(a.bed_bath_combos);
            bedroomOptions = makeSet([...bedroomOptions, ...commBedrooms]).sort((a, b) => {
                if (a === b) return 0;
                return a < b ? -1 : 1;
            });
        });

        // Remove 0 and keep 'Studio'
        const indexOfZeroBrs = bedroomOptions.indexOf("0");
        if (indexOfZeroBrs >= 0) {
            bedroomOptions = ["Studio", ...bedroomOptions.slice(1, -1)];
        }

        return bedroomOptions.map(a => {
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
    }

    render() {
        const { stateOptions } = this.props;
        const { communities } = this.state;

        const brOptionsList = this.sortAndMapBedrooms(communities);

        const regionOptions = stateOptions.map(a => {
            if (window.stateOrRegion === "state") {
                return (
                    <option key={a.state} value={a.state}>{a.state_display}</option>
                )
            } else {
                return (
                    <option key={a} value={a}>{a}</option>
                );
            }
        });

        const rawCityOptions = [];
        for (let i = 0; i < communities.length; i++) {
            if (communities[i].state === this.state.options.state) {
                if (rawCityOptions.indexOf(communities[i].city) === -1) {
                    rawCityOptions.push(communities[i].city);
                }
            }
        }

        const cityOptions = rawCityOptions.map(a => (
            <option key={a} value={a}>{a}</option>
        ));

        return (
            <form id="quick-search-form" className="form-inline">
                <div className="form-group">
                    <select
                        name="state"
                        id="state-selector"
                        data-placeholder="Select a state"
                        onChange={this.setActiveState}
                    >
                        <option defaultValue>Select a {window.stateOrRegion === "state" ? "State" : "Region"}</option>
                        {regionOptions}
                    </select>
                </div>
                {window.stateOrRegion === 'state' ?
                    <div className="form-group start_hidden">
                        <select
                            id="city-selector"
                            disabled={!this.state.options.state}
                        >
                            {<option defaultValue>Select City</option>}
                            {window.stateOrRegion === 'state' ? cityOptions : brOptionsList}
                        </select>
                    </div>

                : <div className="form-group start_hidden">
                    <select
                        id="city-selector"
                        disabled={communities.length === 0}
                    >
                        {!communities.length && <option defaultValue>Select Bedrooms</option>}
                        {communities.length && brOptionsList}
                    </select>
                </div>}
                <div className="form-group start_hidden" />
                <button
                    type="submit"
                    id="quick-search"
                    className="btn btn-default"
                >
                    Go
                </button>
            </form>
        );
    }
}

HPSearchbar.propTypes = {
    stateOptions: PropTypes.array.isRequired,
};

export default HPSearchbar;
