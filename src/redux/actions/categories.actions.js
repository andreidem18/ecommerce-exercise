import { get } from "utils";
import { setLoading } from ".";


export const categoriesActions = {
    setCategories: "SET_CATEGORIES"
}

export const setCategories = categories => ({ 
    type: categoriesActions.setCategories,
    payload: categories
});


export const getCategoriesThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('categories/')
            .then(res => dispatch(setCategories(res.data)))
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)))
    }
}
