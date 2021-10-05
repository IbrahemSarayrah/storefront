import axios from 'axios';

const APIurl = 'https://lab-38-api.herokuapp.com/items'

const initialState = [];

function productReducerAPI (state = initialState, action){
  const { type, payload } = action;
  switch (type) {
    case 'GET_PRODUCTS':
      return payload;
    default:
      return state;
  }
};


// async action
export const getProducts = () => async (dispatch, state) => {
  let response = await axios.get(APIurl);
  let getProducts = response.data;
    console.log(getProducts);
  dispatch(getProductAction(getProducts));

};


//action

export function getProductAction(products) {
  return {
    type: 'GET_PRODUCTS',
    payload: products,
  }
}

export default productReducerAPI;