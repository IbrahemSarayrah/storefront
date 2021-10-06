import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      {
        displayName: 'FOOD',
        normalizedName: 'food',
        description: 'FOOD Category'
      },
      {
        displayName: 'ELECTRONICS',
        normalizedName: 'electronics',
        description: 'Elecronics Category'
      },
      {
        displayName: 'VIDEO GAMES',
        normalizedName: 'video games',
        description: 'Video Games Category'
      },
    ],
    activeCategory: '',
  },
  reducers: {
    setCatogery(state, action) {
      return { ...state, activeCategory: action.payload }
    },
  }
});



export const { setCatogery } = productSlice.actions



export default productSlice.reducer;











// const initialState = {
//   categories: [
//     {
//       displayName: 'FOOD',
//       normalizedName: 'food',
//       description: 'FOOD Category'
//     },
//     {
//       displayName: 'ELECTRONICS',
//       normalizedName: 'electronics',
//       description: 'Elecronics Category'
//     },
//     {
//       displayName: 'VIDEO GAMES',
//       normalizedName: 'video games',
//       description: 'Video Games Category'
//     },
//   ],
//   activeCategory: '',
// }


// function productsReducer(state = initialState, action) {

//   const { type, payload } = action;

//   switch (type) {
//     case 'ACTIVE_CATEGORY':
//       return { ...state, activeCategory: payload }
//       default:
//         return state;
//   };
// }


// // action

// export const setCatogery = (category) => {
//   return {
//     type: 'ACTIVE_CATEGORY',
//     payload: category
//   }
// };



// export default productsReducer;