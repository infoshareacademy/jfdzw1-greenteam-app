
export const updateUserData = (action, state) => {
    const { userDataUpdated } = action;

    const updatedState = { ...state, pending: false, isSaved: true };
    const updatedStateUserDate = { ...updatedState.userData };

    const dataToUpdate = { ...updatedStateUserDate, userDataUpdated };

    updatedState.userData = dataToUpdate;

    return updatedState;
};