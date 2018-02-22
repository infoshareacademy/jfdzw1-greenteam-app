const initState = {
    pending: false,
    hasError: false,
    isLoged: null,
    isSaved: true,
    userData: {}
};

const login= (state = initState, action) => {
    console.log(state)

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

    switch (action.type) {
        case "ADD_INSPIRATION_TO_FAVORITES":
            return addInspirtaionToFavorites();
        case "PENDING_LOGIN":
            return {...state, pending: true};
        case "ERROR_LOGIN":
            return {...state, hasError: true, pending: false, isLoged:false};
        case "SUCCESS_LOGIN":
            return {...state, pending: false, isLoged:action.isLoged, userData:action.userData};
        default:
            return state;
    }
};


export {login};