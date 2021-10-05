import { combineReducers, createStore,applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import productsReducer from "./product"
import cartReducer from "./cart"
import thunk from '../middleware/thunk'
import productReducerAPI from './productAPI'


let reducers = combineReducers({
    store: productsReducer,
    cart: cartReducer,
    products:productReducerAPI
});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();