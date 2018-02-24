const initState = {
    pending: false,
    hasError: false,
    items: []
};

const addToFavorites = (action, state) => {
    const { id } = action;

    const updatedState = { ...state };
    const updatedStateItems = [...updatedState.items];
    const newItemIndex = updatedStateItems.findIndex(item => item.img === id);
    const newItem = { ...updatedStateItems[newItemIndex] };

    newItem.favorite = !newItem.favorite;

    updatedStateItems[newItemIndex] = newItem;

    updatedState.items = updatedStateItems;

    return updatedState;
};

const clothesItemsReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return addToFavorites(action, state);
        case "PENDING_GET_ITEMS":
            return { ...state, pending: true };
        case "ERROR_GET_ITEMS":
            return { ...state, hasError: true, pending: false };
        case "SUCCESS_GET_ITEMS":
            return { ...state, pending: false, items: action.itemsList };
        default:
            return state;
    }
};

export default clothesItemsReducer;