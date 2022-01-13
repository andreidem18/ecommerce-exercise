import { get } from "utils";
import { setLoading } from ".";


export const ordersActions = {
    setOrders: "SET_ORDERS"
}

export const setOrders = categories => ({ 
    type: ordersActions.setOrders,
    payload: categories
});


export const getOrdersThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('orders/')
            .then(res => dispatch(setOrders(res.data)))
            .catch(error => console.log(error))
            .finally(() => dispatch(setLoading(false)));
    }
}
