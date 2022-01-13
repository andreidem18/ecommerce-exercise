import { ordersActions } from "redux/actions";

const initialState = [];

const ordersReducer = (state=initialState, action) => {
    switch (action.type){

        case ordersActions.setOrders:
            return action.payload

        default:
            return state
    }
}

export default ordersReducer
