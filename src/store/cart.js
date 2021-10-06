import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            console.log(state);
        },
        removeFromCart(state, action) {
            console.log(action.payload);
            return state.filter(items => items.name !== action.payload);
        }
    }
});


export const {addToCart, removeFromCart} = cartSlice.actions


export default cartSlice.reducer;







// const initialState = [];

// function cartReducer(state = initialState, action) {

//     const { type, payload } = action;

//     switch (type) {
//         case 'ADD_TO_CART':
//             return state = [...state, payload];
//         case 'REMOVE_FROM_CART':
//             const cartItems = state.filter((items) => items !== payload);
//             return (cartItems)
//         default:
//             return state;
//     }
// }

// // action
// export const addToCart = (product) => {
//     return {
//         type: 'ADD_TO_CART',
//         payload: product,
//     }
// }

// export const removeFromCart = (product) => {
//     return {
//         type: 'REMOVE_FROM_CART',
//         payload: product,
//     }
// }

// export default cartReducer;