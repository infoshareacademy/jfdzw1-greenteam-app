const initState = {
    login :'',
    gender : 'men'

};

const login = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case '':
            console.log(state)
            const {colorName} = action;
            return {
                ...state,
                [colorName]: state[colorName] + action.base
            };

        default:
            return state;
    }
};

export {login};