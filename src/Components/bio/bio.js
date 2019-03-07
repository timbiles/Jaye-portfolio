import React, { Component } from 'react';
import GetBio from '../tools/queries/GetBio';

import sing from '../../assets/images/sing.png';
import './bio.scss';

class bio extends Component {
  state = {
    image: '',
    imageList: [
      'https://images-na.ssl-images-amazon.com/images/I/41sfz8dKX1L.jpg',
      'https://cdn2.vectorstock.com/i/1000x1000/33/91/green-olive-branch-symbol-vector-1023391.jpg'
    ],
    style: true
  };

  componentDidMount() {
    this.imageSlider();
  }

  imageSlider = () => {
    const { image, imageList, style } = this.state;
    let counter = 0;

    if (counter <= imageList.length) {
      if (!image) {
        this.setState({ image: imageList[0] });
        counter++;
      }
      this.timer = setInterval(() => {
        let newImage = imageList[counter];
        this.setState({ image: newImage, style: !style });
        counter++;
        if (counter === imageList.length) {
          counter = 0;
        }
      }, 5000);
    }
  };

  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  render() {
    const { style } = this.state;

    return (
      <div className="bio">
        <div className="image_cont">
          <img src={sing} alt="" />
        </div>
        <div className="bio_right">
          <h1>About</h1>
            <GetBio />
            <img className={style ? 'image_scroll' : 'image_scroll2'} src={this.state.image} alt="Carousel" />

        </div>
      </div>
    );
  }
}

export default bio;
