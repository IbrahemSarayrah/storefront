const initialState = {
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
  product:[
    {
      category:'food',
      name:'food 1',
      description:'food 1',
      price:"10",
      inventoryCount:'99',
      image:'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg?w=1155&h=1528'
    },
    {
      category:'food',
      name:'food 2',
      description:'food 2',
      price:"50",
      inventoryCount:'50',
      image:'https://media.baamboozle.com/uploads/images/221598/1608102785_81663'
    },
    {
      category:'electronics',
      name:'electronics 1',
      description:'electronics 1',
      price:"123",
      inventoryCount:'500',
      image:'https://www.justchinait.com/wp-content/uploads/2020/12/Where-electronics-are-cheapest-in-China.jpeg'
    },
    {
      category:'electronics',
      name:'electronics 2',
      description:'electronics 2',
      price:"123",
      inventoryCount:'900',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuT6Tx1k3JZMAqQYqslknwB3T7UWjp-qUzA&usqp=CAU'
    },
    {
      category:'video games',
      name:'video games 1',
      description:'video games 1',
      price:"321",
      inventoryCount:'499',
      image:'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBnYW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      category:'video games',
      name:'video games 2',
      description:'video games 2',
      price:"321",
      inventoryCount:'399',
      image:'https://i1.wp.com/www.thexboxhub.com/wp-content/uploads/2020/01/videogames.jpg?fit=767%2C511&ssl=1'
    }
    
  ],
  activeCategory: '',
}


function productsReducer(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case 'ACTIVE_CATEGORY':
      return { ...state, activeCategory: payload }
      default:
        return state;
  };
}


// action

export const setCatogery = (category) => {
  return {
    type: 'ACTIVE_CATEGORY',
    payload: category
  }
};



export default productsReducer;