import {combineReducers} from "redux";

import {register} from "./register";
import {clothesItemsReducer} from "./inspirationsReducer"
import {login} from "./login";
export default combineReducers({
    clothesItems: clothesItemsReducer,
    register: register,
    login: login,
});

