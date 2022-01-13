import { get, post, remove } from "utils";
import { setLoading, setNotification } from ".";


export const cartActions = {
    setCart: "SET_CART"
}

export const setCart = cartProducts => ({ 
    type: cartActions.setCart,
    payload: cartProducts
});



export const getCartThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('cart/')
            .then(res => dispatch(setCart(res.data)))
            .catch(error => console.log(error))
            .finally(() => dispatch(setLoading(false)));
    }
}


export const addToCartThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return post('products/add_to_cart/', data)
            .then(() => dispatch(setNotification("Product added to cart")))
            .catch(error => console.log(error))
            .finally(() => dispatch(setLoading(false)))
    }
}


export const deleteCartItem = id => {
    return dispatch => {
        dispatch(setLoading(true));
        return remove(`cart/${id}/remove_item/`)
            .then(() => dispatch(getCartThunk()))
            .catch(error => console.log(error))
            .finally(() => dispatch(setLoading(false)));
    }
}


export const buyCart = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return post('cart/buy/')
            .then(() => {
                dispatch(getCartThunk());
                dispatch(setNotification('Successful purchase! Thanks for buy with us'));
            })
            .catch(error => console.log(error))
            .finally(() => dispatch(setLoading(false)));
    }
}
