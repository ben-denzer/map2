import React from "react";
import PropTypes from "prop-types";
import sortData from "../../../utils/sortData";
import CommunityPreview from "./CommunityPreview";
import SearchResultsMenu from "./SearchResultsMenu";

class SearchResultsPage extends React.Component { // eslint-disable-line
    componentDidUpdate(prevProps) {
        const { highlightedCommunity } = this.props;
        if (highlightedCommunity && highlightedCommunity !== prevProps.highlightedCommunity) {
            const highlight = document.getElementsByClassName("highlighted")[0];
            const rect = highlight.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            if (!(rect.bottom < -150 || rect.top - viewHeight >= -150)) {
                return;
            }
            highlight.scrollIntoView();
        }
    }

    render() {
        const {
            activeSort,
            filteredData,
            handleResultsSort,
            highlightedCommunity,
            mobile,
            sortFilterStatus,
            stateOptions,
            toggleHighlight,
            toggleSortFilter,
        } = this.props;
        const sortedData = sortData(filteredData, activeSort);

        const previewPanels = sortedData.map(a => (
            <CommunityPreview
                key={a.id}
                allCommunityData={a}
                highlightedCommunity={highlightedCommunity}
                toggleHighlight={toggleHighlight}
            />
        ));

        return (
            <div
                className={`sidebar-container${mobile ? " mobile" : ""}`}
                id="search_results_container"
            >
                <SearchResultsMenu
                    activeSort={activeSort}
                    filteredData={filteredData}
                    handleResultsSort={handleResultsSort}
                    sortFilterStatus={sortFilterStatus}
                    stateOptions={stateOptions}
                    toggleSortFilter={toggleSortFilter}
                />
                {previewPanels}
            </div>
        );
    }
}

SearchResultsPage.defaultProps = {
    highlightedCommunity: null,
};

SearchResultsPage.propTypes = {
    activeSort: PropTypes.string.isRequired,
    filteredData: PropTypes.array.isRequired,
    handleResultsSort: PropTypes.func.isRequired,
    highlightedCommunity: PropTypes.number,
    mobile: PropTypes.bool.isRequired,
    sortFilterStatus: PropTypes.string.isRequired,
    stateOptions: PropTypes.array.isRequired,
    toggleHighlight: PropTypes.func.isRequired,
    toggleSortFilter: PropTypes.func.isRequired,
};

export default SearchResultsPage;
