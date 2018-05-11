import React, { Component } from 'react';
import { connect } from 'react-redux';

import BreedsList from '../../components/BreedsList'
import ImagesList from '../../components/ImagesList'
import * as breedsActions from '../../src/actions/breeds';
import styles from './Breeds.css';


const mapStateToProps = store => ({
  showBreeds: store.data_reducer.showBreeds,
  images: store.data_reducer.images,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBreeds: () => dispatch(breedsActions.fetchBreeds()),
  fetchImages: (e) => dispatch(breedsActions.fetchImages(e.target.id)),
});

class BreedsContainer extends Component {

  componentDidMount() {
    this.props.fetchBreeds();
  }

  render() {
    const { showBreeds, fetchImages, images} = this.props

    return (
      <div className='breeds-container'>
        <div className='page-top'>
          <div className='page-top-inside'>
            <div className='header'>
              <img className='image' src='https://static1.squarespace.com/static/573f8037ab48dec01e52ac1c/t/5a00e752085229b51defa422/1510878370246/?format=1500w'/>
              <p>UNUM DOGS</p>
            </div>
            <BreedsList breeds={showBreeds}
                        onClick={fetchImages} />
          </div>
        </div>
        <div className='page-bottom'>
          <ImagesList images={images} />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedsContainer);
