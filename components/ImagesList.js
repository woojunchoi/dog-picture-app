import React, { Component } from 'react';
import styles from './images.css';

export default class ImagesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;
    const imagesList = [];

    for (let i = 0; i < images.length && i < 37; i += 1) {
      const key = images[i].split('/').slice(-1)[0];
      console.log(images[i].split('/').slice(-1))
      
      imagesList.push(
        <img src={images[i]} className='one-image' key={key} />
      );
    }

    return (
      <div className='images-list'>
        {imagesList}
      </div>
    );
  }
}
