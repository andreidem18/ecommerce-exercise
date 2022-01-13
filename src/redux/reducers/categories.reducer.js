import { categoriesActions } from "redux/actions";

const initialState = [];

const categoriesReducer = (state=initialState, action) => {
    switch (action.type){

        case categoriesActions.setCategories:
            return action.payload

        default:
            return state
    }
}

export default categoriesReducer
