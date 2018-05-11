import { REQUEST_BREEDS, RECEIVE_BREEDS, REQUEST_IMAGES, RECEIVE_IMAGES, SEARCH_BREEDS } from '../actions/breeds';

const initialState = {
  loading: false,
  showBreeds: [],
  images: []
};

const data_reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BREEDS:
      return Object.assign({}, state, {
        loading: false,
        showBreeds: action.breeds,
      })
    case RECEIVE_IMAGES:
      return Object.assign({}, state, {
        loading: false,
        images: action.images,
      })
    default:
      return state
  }
}

export default data_reducer
