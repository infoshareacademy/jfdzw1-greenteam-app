
export const removeFavorite = (action, state) => {
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