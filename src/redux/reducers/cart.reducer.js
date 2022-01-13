import { cartActions } from "redux/actions";

const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case cartActions.setCart:
            return action.payload

        default:
            return state;
    }
}

export default cartReducer;
