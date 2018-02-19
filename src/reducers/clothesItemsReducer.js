const initState = {
    pending: false,
    hasError: false,
    items: []
};

const clothesItemsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PENDING_GET_ITEMS":
            return {...state, pending: true};
        case "ERROR_GET_ITEMS":
            return {...state, hasError: true, pending: false};
        case "SUCCESS_GET_ITEMS":
            return {...state, pending: false, items: action.itemsList};
        default:
            return state;
    }
};

export {clothesItemsReducer};