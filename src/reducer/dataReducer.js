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
    case SEARCH_BREEDS:
      // start with base case so list of all breeds is returned if search value is blank.
      let filtered = state.allBreeds.slice();
      const valueReg = new RegExp(action.value.toLowerCase());
      console.log(valueReg)
      if (action.value.trim() !== '') {
        // Find in or store to cache of previous search results
        if (state.searchCache[action.value]) filtered = state.searchCache[action.value];
        else {
          filtered = state.allBreeds.filter(el => el.match(valueReg));
          state.searchCache[action.value] = filtered;
        }
      }
      return Object.assign({}, state, {
        showBreeds: filtered,
      })
    default:
      return state
  }
}

export default data_reducer
