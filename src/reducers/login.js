const initState = {
    pending: false,
    hasError: false,
    isLoged:null
};

const login= (state = initState, action) => {
    switch (action.type) {
        case "PENDING":
            return {...state, pending: true};
        case "ERROR":
            return {...state, hasError: true, pending: false, isLoged:false};
        case "SUCCESS":
            return {...state, pending: false, isLoged:action.isLoged};
        default:
            return state;
    }
};


export {login};