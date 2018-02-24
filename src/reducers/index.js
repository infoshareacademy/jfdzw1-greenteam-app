import { combineReducers } from "redux";

import registerReducer from "./register";
import clothesItemsReducer from "./inspirationsReducer"
import loginReducer from "./loginReducer";

export default combineReducers({
    clothesItems: clothesItemsReducer,
    register: registerReducer,
    login: loginReducer,
});

