import { combineReducers } from "redux";
import home from "../views/home/reducers/homeReducer";
import results from "../views/searchResults/reducers/searchResultsReducer";
import sidebarFilter from "../views/sidebarFilter/reducers/sidebarFilterReducer";

export default combineReducers({ home, results, sidebarFilter });
