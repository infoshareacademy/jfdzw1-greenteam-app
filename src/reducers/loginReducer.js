import * as actions from './actions/actions';
import {addInspirtaionToFavorites} from './actions/inspirations/addInspirtaionToFavorites';
import {removeFavorite} from './actions/favorites/removeFavorite';
import {updateUserData} from './actions/userAccount/updateUserData';

const initState = {
    pending: false,
    hasError: false,
    isLoged: null,
    isSaved: true,
    userData: {}
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_INSPIRATION_TO_FAVORITES:
            return addInspirtaionToFavorites(action, state);
        case 'REMOVE_FAVORITE':
            return removeFavorite(action, state);
        case actions.PENDING_LOGIN:
            return { ...state, pending: true };
        case actions.ERROR_LOGIN:
            return { ...state, hasError: true, pending: false, isLoged: false };
        case actions.SUCCESS_LOGIN:
            return { ...state, pending: false, isLoged: true, userData: action.userData };
        case 'PENDING_UPDATE_USER_DATA':
            return { ...state, pending: true };
        case 'ERROR_UPDATE_USER_DATA':
            return { ...state, hasError: true, pending: false, isSaved: false };
        case 'SUCCESS_UPDATE_USER_DATA':
            return updateUserData(action, state);
        case actions.LOG_OUT:
            return { ...state, isLoged: false };
        case actions.PENDING_REMOVE_USER:
            return { ...state, pending: true };
        case actions.ERROR_REMOVE_USER:
            return { ...state, hasError: true, pending: false, isSaved: false };
        case actions.SUCCESS_REMOVE_USER:
            return { ...state, hasError: false, pending: false };
        default:
            return state;
    }
};

export default loginReducer;