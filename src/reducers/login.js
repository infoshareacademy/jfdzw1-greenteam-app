const initState = {
    pending: false,
    hasError: false,
    isLoged: null,
    userData: {}
};

const login= (state = initState, action) => {

    switch (action.type) {
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