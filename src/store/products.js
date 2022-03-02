let initialState = {
  allProducts: [
    {category: 'Clothing', name: 'pants', description: 'True Religion Jeans', price: 54, inventory: 100},
    {category: 'Clothing', name: 'shirt', description: 'Supreme Box-Logo', price: 50, inventory: 5},
    {category: 'Clothing', name: 'jacket', description: 'Plain Black Hoodie', price: 20, inventory: 110},
    {category: 'Clothing', name: 'shoe', description: 'Air Force Ones', price: 100, inventory: 4},
    {category: 'Books', name: 'horror', description: 'horror book', price: 19, inventory: 11},
    {category: 'Books', name: 'sci-fi', description: 'sci-fi book', price: 15, inventory: 10},
    {category: 'Books', name: 'fantasy', description: 'fantasy book', price: 20, inventory: 34},
    {category: 'Books', name: 'comic', description: 'comic book', price: 5, inventory: 80},
  ],
  activeProduct: '',
  products: [],
}

const productReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'SELECT_PRODUCT':
      const products = getProducts(payload.category);
      return { ...state, products: products }
    default:
      return state;
  }
}

export const getProducts = (category) => {
  const products = initialState.allProducts;
  const response = products.filter(product => product.category === category);
  return response;
}

export default productReducer;