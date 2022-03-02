let initialState = {
  cart: [],
}

const cartReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, payload] }
      case 'REMOVE_FROM_CART':
        let removeProduct = true;
        const updatedCart = [...state.cart].filter(product => {
          if(product === payload && removeProduct) {
            removeProduct = false;
            return false;
          } else {
            return true;
          }
        })
        return { ...state, cart: [...updatedCart] }
    default:
      return state;
  }
}

export const addToCart = name => async (dispatch) => {
  dispatch ({
    type: 'ADD_TO_CART',
    payload: name
  });
};

export const removeFromCart = name => async (dispatch) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: name
  });
};

export default cartReducer;