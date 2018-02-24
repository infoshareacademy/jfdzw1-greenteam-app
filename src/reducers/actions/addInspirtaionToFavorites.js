
export const addInspirtaionToFavorites = (action, state) => {
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