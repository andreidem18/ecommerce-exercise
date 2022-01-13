import { get } from "utils";
import { setLoading } from ".";


export const productsActions = {
    setProductsList: "SET_PRODUCTS_LIST",
    setProductDetail: "SET_PRODUCT_DETAIL"
}

export const setProductsList = products => ({ 
    type: productsActions.setProductsList,
    payload: products
});

export const setProductDetail = product => ({
    type: productsActions.setProductDetail,
    payload: product
})


export const getProductsThunk = (category, productName) => {
    let endpoint = 'products/'
    if (category) endpoint += `?category=${category}`;
    if (productName) endpoint += `${category ? '&&' : '?'}name__icontains=${productName}`
    return dispatch => {
        dispatch(setLoading(true));
        return get(endpoint)
            .then(res => dispatch(setProductsList(res.data)))
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)))
    }
}


export const getProductDetailThunk = id => {
    return dispatch => {
        dispatch(setLoading(true));
        return get(`products/${id}/`)
            .then(res => dispatch(setProductDetail(res.data)))
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)))
    }
}
