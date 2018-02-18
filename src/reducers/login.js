const initState = {
    pending: false,
    hasError: false,
    loginData: {}
};

const login= (state = initState, action) => {
    switch (action.type) {
        case "PENDING":
            return {...state, pending: true};
        case "ERROR":
            return {...state, hasError: true, pending: false};
        case "SUCCESS":
            return {...state, pending: false, userDataLogin: action.loginAccount};
        default:
            return state;
    }
};


export {login};