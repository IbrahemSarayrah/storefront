const initialState = [];

function cartReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART':
            return state = [...state, payload];
        case 'REMOVE_FROM_CART':
            const cartItems = state.filter((items) => items !== payload);
            return (cartItems)
        default:
            return state;
    }
}

// action
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    }
}

export const removeFromCart = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product,
    }
}

export default cartReducer;