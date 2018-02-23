const initState = {
    pending: false,
    hasError: false,
    isLoged: null,
    isSaved: true,
    editMode: false,
    userData: {}
};

const login = (state = initState, action) => {

    const addInspirtaionToFavorites = () => {
        const {id} = action;

        const newFavorite = {
            img: id
        };

        const updatedState = {...state, isSaved: false};
        const updatedStateUserDate = {...updatedState.userData};
        const newItem = [...updatedStateUserDate.favorites, newFavorite];
        updatedStateUserDate.favorites = newItem;
        updatedState.userData = updatedStateUserDate;

        return updatedState
    };


    const removeFavorite = () => {
        const {id} = action;

        const updatedStateRemove = {...state, isSaved: false};
        const updatedStateUserDate = {...updatedStateRemove.userData};
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

    const updateUserData = () => {
        const {userDataUpdated} = action;

        const updatedState = {...state, pending:false, isSaved: true};
        const updatedStateUserDate = {...updatedState.userData};

        const dataToUpdate = {...updatedStateUserDate, userDataUpdated};

        updatedState.userData = dataToUpdate;

        return updatedState;
    };

    switch (action.type) {
        case "ADD_INSPIRATION_TO_FAVORITES":
            return addInspirtaionToFavorites();
        case "REMOVE_FAVORITE":
            return removeFavorite();
        case "PENDING_LOGIN":
            return {...state, pending: true};
        case "ERROR_LOGIN":
            return {...state, hasError: true, pending: false, isLoged:false};
        case "SUCCESS_LOGIN":
            return {...state, pending: false, isLoged:action.isLoged, userData:action.userData};
        case "PENDING_UPDATE_USER_DATA":
            return {...state, pending: true};
        case "ERROR_UPDATE_USER_DATA":
            return {...state, hasError: true, pending:false, isSaved:false};
        case "SUCCESS_UPDATE_USER_DATA":
            return updateUserData();
        case "LOG_OUT":
            return {...state, isLoged:false, editMode:false};
        case "EDIT_MODE":
            return {...state, editMode:true};
        case "DISCARD_EDIT_MODE":
            return {...state, editMode:false};
        case "PENDING_REMOVE_USER":
            return {...state, pending: true};
        case "ERROR_REMOVE_USER":
            return {...state, hasError: true, pending:false, isSaved:false};
        case "SUCCESS_REMOVE_USER":
            return {...state, hasError: false, pending: false};

        default:
            return state;
    }
};


export {login};