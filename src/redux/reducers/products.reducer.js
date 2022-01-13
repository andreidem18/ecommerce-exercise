import { productsActions } from "redux/actions";

const initialState = {
    productsList: [],
    productDetail: {}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case productsActions.setProductsList:
            return { ...state, productsList: action.payload }

        case productsActions.setProductDetail:
            return { ...state, productDetail: action.payload }
        
        default:
            return state;
    }
}

export default productsReducer;
