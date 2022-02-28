import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories.js';
import productReducer from './products.js';
import cartReducer from './cart';

const reducers = combineReducers({categories: categoriesReducer, products: productReducer, cart: cartReducer})

const store = () => {
  return createStore(reducers);
}

export default store;