
const initState = {
    pending: false,
    hasError: false,
    userData: {}
};

const register= (state = initState, action) => {
    switch (action.type) {
        case "PENDING":
            return {...state, pending: true};
        case "ERROR":
            return {...state, hasError: true, pending: false};
        case "SUCCESS":
            return {...state, pending: false, userData: action.usersCreate};
        default:
            return state;
    }
};




/*const login = (state = initState, action) => {

    switch (action.type) {
        case 'REGISTERING':
            console.log(action)
            return state;
        default:
            return state;
    }
};*/


export {register};