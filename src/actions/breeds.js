import axios from 'axios';

export const REQUEST_BREEDS = 'REQUEST_BREEDS';
export const RECEIVE_BREEDS = 'RECEIVE_BREEDS';
export const REQUEST_IMAGES = 'REQUEST_IMAGES';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const SEARCH_BREEDS = 'SEARCH_BREEDS';

export const requestBreeds = () => {
  return {
    type: REQUEST_BREEDS
  }
}

export const receiveBreeds = (json) => {
  return {
    type: RECEIVE_BREEDS,
    breeds: json.status === 'success' ? json.message : [],
  }
}

export const requestImages = (breed_name) => {
  return {
    type: REQUEST_IMAGES,
    breed_name,
  }
}

export const receiveImages = (json) => {
  return {
    type: RECEIVE_IMAGES,
    images: json.status === 'success' ? json.message : [],
  }
}

export const searchBreeds = (value) => {
  return {
    type: SEARCH_BREEDS,
    value,
  }
}

export const fetchBreeds = () => {
  return dispatch => {
    dispatch(requestBreeds())
    return axios('https://dog.ceo/api/breeds/list')
      .then(response => dispatch(receiveBreeds(response.data)))
  }
}

export const fetchImages = (breed_name) => {
  return dispatch => {
    dispatch(requestImages(breed_name))
    return axios(`https://dog.ceo/api/breed/${breed_name}/images`)
      .then(response => response.data)
      .then(json => dispatch(receiveImages(json)))
  }
}
