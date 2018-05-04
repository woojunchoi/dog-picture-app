import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './breeds.css';
const cx = classNames.bind(styles);

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

    for (let i = 0; i < breeds.length; i += 1) {
      breedsList.push(
        <button className={cx('breed-button', {selected: selectedBreed === breeds[i]})}
                              key={breeds[i]}
                              id={breeds[i]}
                              onClick={this.handleClick}>
          <span className={cx('button-background')}></span>
          <span className={cx('button-text')}>{breeds[i]}</span>
        </button>
      );
    }

    return (
      <div className={cx('breeds-list')}>
        {breedsList}
      </div>
    );
  }
}

