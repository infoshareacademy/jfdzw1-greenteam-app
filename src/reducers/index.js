import {combineReducers} from "redux";

import {register} from "./register";
import {clothesItemsReducer} from "./clothesItemsReducer"
import {login} from "./login";
export default combineReducers({
    clothesItems: clothesItemsReducer,
    register: register,
    login: login,
});

