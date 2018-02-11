import {combineReducers} from "redux";

import login from "./login";
import clothesItemsReducer from "./clothesItemsReducer"

export default combineReducers({
    login,clothesItemsReducer
});

