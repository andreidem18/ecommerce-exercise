import { appActions } from "redux/actions";

const initialState = {
    isLoading: false,
    notification: ""
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case appActions.setLoading:
            return { ...state, isLoading: action.payload }

        case appActions.setNotification:
            return { ...state, notification: action.payload }

        default:
            return state;
    }
}

export default appReducer;
