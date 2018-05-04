import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import BreedsList from '../../components/BreedsList'
import ImagesList from '../../components/ImagesList'
import * as breedsActions from '../../src/actions/breeds';
import styles from './breeds.css';

const cx = classNames.bind(styles);

const mapStateToProps = store => ({
  allBreeds: store.data_reducer.allBreeds,
  showBreeds: store.data_reducer.showBreeds,
  selectedBreed: store.data_reducer.selectedBreed,
  images: store.data_reducer.images,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBreeds: () => dispatch(breedsActions.fetchBreeds()),
  fetchImages: (e) => dispatch(breedsActions.fetchImages(e.target.id)),
  searchBreeds: (e) => dispatch(breedsActions.searchBreeds(e.target.value)),
});

class BreedsContainer extends Component {
  // Retrieve list of breeds once component mounts
  componentDidMount() {
    this.props.fetchBreeds();
  }

  render() {
    const { showBreeds, selectedBreed, fetchImages, images, searchBreeds } = this.props

    return (
      <div className={cx('breeds-container')}>
        <div className={cx('page-top')}>
          <div className={cx('page-top-inside')}>
            <div className={cx('header')}>
              <img className='image' src='https://static1.squarespace.com/static/573f8037ab48dec01e52ac1c/t/5a00e752085229b51defa422/1510878370246/?format=1500w'/>
              <p>UNUM DOGS</p>
            </div>
            <BreedsList breeds={showBreeds}
                        selectedBreed={selectedBreed}
                        onClick={fetchImages} />
          </div>
        </div>
        <div className={cx('page-bottom')}>
          <ImagesList images={images} />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedsContainer);
