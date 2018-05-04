import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './images.css';
const cx = classNames.bind(styles);

export default class ImagesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;
    const imagesList = [];

    // Chose to limit to 24 images for now.  Paginination/load-on-scroll would be nice.
    for (let i = 0; i < images.length && i < 24; i += 1) {
      const key = images[i].split('/').slice(-1)[0];
      console.log(images[i].split('/').slice(-1))
      
      imagesList.push(
        <img src={images[i]} className={cx('one-image')} key={key} />
      );
    }

    return (
      <div className={cx('images-list')}>
        {imagesList}
      </div>
    );
  }
}
