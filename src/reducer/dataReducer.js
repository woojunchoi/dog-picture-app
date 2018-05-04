import { REQUEST_BREEDS, RECEIVE_BREEDS, REQUEST_IMAGES, RECEIVE_IMAGES, SEARCH_BREEDS } from '../actions/breeds';

const initialState = {
  loading: false,
  allBreeds: [],
  showBreeds: [],
  selectedBreed: '',
  images: [],
  searchCache: {},
};

const data_reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BREEDS:
      return Object.assign({}, state, {
        loading: true,
      })
    case RECEIVE_BREEDS:
      return Object.assign({}, state, {
        loading: false,
        allBreeds: action.breeds,
        showBreeds: action.breeds,
      })
    case REQUEST_IMAGES:
      return Object.assign({}, state, {
        loading: true,
        selectedBreed: action.breed_name,
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
