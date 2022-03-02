import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoriesReducer from './categories.js';
import productReducer from './products.js';
import cartReducer from './cart';
import thunk from '../store/middleware/thunk.js';

const reducers = combineReducers({categories: categoriesReducer, products: productReducer, cart: cartReducer})

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
}

export default store;