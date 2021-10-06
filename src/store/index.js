import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlice from './cart';
import productSlice from './product'
import productReducerAPISlice from './productAPI'


const reducers = combineReducers({
    cart: cartSlice,
    store: productSlice,
    products:productReducerAPISlice
});

const store = configureStore({ reducer: reducers });


export default store;





// import { combineReducers, createStore,applyMiddleware } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
// import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./product"
// import cartReducer from "./cart"
// import thunk from '../middleware/thunk'
// import productReducerAPI from './productAPI'



// let reducers = combineReducers({
//     store: productsReducer,
//     cart: cartReducer,
//     products:productReducerAPI
// });

// const store = () => {
//     return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// }

// export default store();