const initState = {
    pending: false,
    hasError: false,
    isLoged: null,
    isSaved: true,
    userData: {}
};

const login= (state = initState, action) => {

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

        const updatedStateRemove = {...state};
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
            return {...state, hasError: true, pending: false, isSaved:false};
        case "SUCCESS_UPDATE_USER_DATA":
            return {...state, pending: false, isSaved:action.isSaved, userData:action.userUpdated};
        default:
            return state;
    }
};


export {login};