import React, { Component } from 'react';
import styles from './breeds.css';

export default class BreedsList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  }

  render() {
    const { breeds, selectedBreed } = this.props;
    const breedsList = [];

    for (let i = 0; i < breeds.length && i<24; i += 1) {
      breedsList.push(
        <button className='breed-button'
                              key={breeds[i]}
                              id={breeds[i]}
                              onClick={this.handleClick}>
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

