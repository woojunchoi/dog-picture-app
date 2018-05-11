import axios from 'axios';

export const RECEIVE_BREEDS = 'RECEIVE_BREEDS';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';


export const receiveBreeds = (json) => {
  return {
    type: RECEIVE_BREEDS,
    breeds: json.status === 'success' ? json.message : [],
  }
}

export const receiveImages = (json) => {
  return {
    type: RECEIVE_IMAGES,
    images: json.status === 'success' ? json.message : [],
  }
}

export const fetchBreeds = () => {
  return dispatch => {
    return axios('https://dog.ceo/api/breeds/list')
      .then(response => dispatch(receiveBreeds(response.data)))
  }
}

export const fetchImages = (breed_name) => {
  return dispatch => {
    return axios(`https://dog.ceo/api/breed/${breed_name}/images`)
      .then(response => response.data)
      .then(json => dispatch(receiveImages(json)))
  }
}
