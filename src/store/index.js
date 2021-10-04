import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import productsReducer from "./product"
import cartReducer from "./cart"


let reducers = combineReducers({
    store: productsReducer,
    cart: cartReducer
});

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();