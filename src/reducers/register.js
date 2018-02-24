import * as actions from './actions/actions';

const initState = {
    pending: false,
    hasError: false,
    userData: {}
};

const registerReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.PENDING:
            return { ...state, pending: true };
        case actions.ERROR:
            return { ...state, hasError: true, pending: false };
        case actions.SUCCESS:
            return { ...state, pending: false, userData: action.usersCreate };
        default:
            return state;
    }
};

export default registerReducer;
