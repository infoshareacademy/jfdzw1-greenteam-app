import * as actions from './actions/actions';

const initState = {
    pending: false,
    hasError: false,
    isLoged: null,
    isSaved: true,
    userData: {}
};

const addInspirtaionToFavorites = (action, state) => {
    const { id } = action;

    const newFavorite = {
        img: id
    };

    const updatedState = { ...state, isSaved: false };
    const updatedStateUserDate = { ...updatedState.userData };
    const newItem = [...updatedStateUserDate.favorites, newFavorite];
    updatedStateUserDate.favorites = newItem;
    updatedState.userData = updatedStateUserDate;

    return updatedState
};

const removeFavorite = (action, state) => {
    const { id } = action;

    const updatedStateRemove = { ...state, isSaved: false };
    const updatedStateUserDate = { ...updatedStateRemove.userData };
    const updatedStateItemsRemove = [...updatedStateUserDate.favorites];

    const itemToRemoveIndex = updatedStateItemsRemove.findIndex(item => item.img === id);

    const itemToRemove = [
        ...updatedStateItemsRemove.slice(0, itemToRemoveIndex),
        ...updatedStateItemsRemove.slice(itemToRemoveIndex + 1)
    ];

    updatedStateUserDate.favorites = itemToRemove;
    updatedStateRemove.userData = updatedStateUserDate;

    return updatedStateRemove;
};

const updateUserData = (action, state) => {
    const { userDataUpdated } = action;

    const updatedState = { ...state, pending: false, isSaved: true };
    const updatedStateUserDate = { ...updatedState.userData };

    const dataToUpdate = { ...updatedStateUserDate, userDataUpdated };

    updatedState.userData = dataToUpdate;

    return updatedState;
};


const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_INSPIRATION_TO_FAVORITES':
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