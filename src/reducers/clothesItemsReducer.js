const initState = {
    pending: false,
    hasError: false,
    items: []
};

const clothesItemsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PENDING":
            return {...state, pending: true};
        case "ERROR":
            return {...state, hasError: true, pending: false};
        case "SUCCESS":
            return {...state, pending: false, items: action.itemsList};
        default:
            return state;
    }
};

export {clothesItemsReducer};