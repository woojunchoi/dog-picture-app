import React, { Component } from 'react';
import styles from './breeds.css';

export default class BreedsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { breeds, selectedBreed,onClick } = this.props;
    const breedsList = [];

    for (let i = 0; i < breeds.length && i<24; i += 1) {
      breedsList.push(
        <button className='breed-button'
                              key={breeds[i]}
                              id={breeds[i]}
                              onClick={onClick}>
          <span className='button-background'></span>
          <span className='button-text'>{breeds[i]}</span>
        </button>
      );
    }

    return (
      <div className='breeds-list'>
        {breedsList}
      </div>
    );
  }
}

