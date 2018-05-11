import { RECEIVE_BREEDS,RECEIVE_IMAGES } from '../actions/breeds';

const initialState = {
  showBreeds: [],
  images: []
};

const data_reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BREEDS:
      return Object.assign({}, state, {
        showBreeds: action.breeds,
      })
    case RECEIVE_IMAGES:
      return Object.assign({}, state, {
        images: action.images,
      })
    default:
      return state
  }
}

export default data_reducer
