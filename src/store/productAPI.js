import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const APIurl = 'https://lab-38-api.herokuapp.com/items'


const productReducerAPISlice = createSlice({
  name: 'API',
  initialState: [],
  reducers: {
    getProducts(state, action) {
      return action.payload
    }
  }
})

export const { getProducts } = productReducerAPISlice.actions


export const get = () => async (dispatch, state) => {
  let response = await axios.get(APIurl);
  let data = response.data;
  dispatch(getProducts(data));
};

export default productReducerAPISlice.reducer;





// const initialState = [];

// function productReducerAPI (state = initialState, action){
//   const { type, payload } = action;
//   switch (type) {
//     case 'GET_PRODUCTS':
//       return payload;
//     default:
//       return state;
//   }
// };


// // async action
// export const getProducts = () => async (dispatch, state) => {
//   let response = await axios.get(APIurl);
//   let getProducts = response.data;
//     console.log(getProducts);
//   dispatch(getProductAction(getProducts));

// };


// //action

// export function getProductAction(products) {
//   return {
//     type: 'GET_PRODUCTS',
//     payload: products,
//   }
// }

// export default productReducerAPI;