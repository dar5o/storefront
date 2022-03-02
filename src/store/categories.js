import axios from 'axios';

const initialState = {
  allCategories: [
    {name: 'Clothing', description: 'Select Type' },
    {name: 'Books', description: 'Select Genre' }
  ],
  activeCategory: '',
  activeDescription: '',
}

const categoryReducer = (state = initialState, action) => {

  let { type, payload } = action;
  
  switch (type) {
    case 'SELECT_CATEGORY':
      return { ...state, activeCategory: payload.category, activeDescription: payload.description }
    default:
      return state;
  }
}

export const selectCategory = (category, description) => async (dispatch) => {
  dispatch ({
    type: 'SELECT_CATEGORY',
    payload: {
      category,
      description
    }
  });
}

export const getCategories = () => async (dispatch) => {
  let response = null;
  try{
    response = await axios.get('http://localhost:3000/categories')
  } catch (error) {
    console.log(error, 'ERROR FROM FUNCTION: getCategories()')
  }
  dispatch({
    type: 'GET_CATEGORIES',
    payload: response.data.results
  });
}

export default categoryReducer;