import { combineReducers } from "redux";
import appReducer from './app.reducer';
import cartReducer from "./cart.reducer";
import categoriesReducer from "./categories.reducer";
import ordersReducer from "./order.reducer";
import productsReducer from "./products.reducer";


export default combineReducers({
    app: appReducer,
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    orders: ordersReducer
});
