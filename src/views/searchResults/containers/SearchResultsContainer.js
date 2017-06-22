import { connect } from "react-redux";
import { handleResultsSort, toggleHighlight, toggleSortFilter } from "../actions/searchResultsActions";
import SearchResultsPage from "../components/SearchResultsPage";

const mapStateToProps = state => ({
    activeSort: state.results.activeSort,
    highlightedCommunity: state.results.highlightedCommunity,
    sortFilterStatus: state.results.sortFilterStatus,
});

const mapDispatchToProps = dispatch => ({
    handleResultsSort: e => dispatch(handleResultsSort(e)),
    toggleHighlight: id => dispatch(toggleHighlight(id)),
    toggleSortFilter: () => dispatch(toggleSortFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
