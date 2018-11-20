import React, { Component } from 'react';
import axios from 'axios';

import sing from '../files/sing.png';
import './bio.scss';

class bio extends Component {
  state = {
    bio: '',
    image: '',
    imageList: [
      'https://images-na.ssl-images-amazon.com/images/I/41sfz8dKX1L.jpg',
      'https://cdn2.vectorstock.com/i/1000x1000/33/91/green-olive-branch-symbol-vector-1023391.jpg'
    ],
    style: true
  };

  componentDidMount() {
    this.getBio();
    this.imageSlider();
  }

  imageSlider = () => {
    const { image, imageList, style } = this.state;
    let newImage;
    let counter = 0;

    if (counter <= imageList.length) {
      if (!image) {
        this.setState({ image: imageList[0] });
        counter++;
      }
      setInterval(() => {
        newImage = imageList[counter];
        this.setState({ image: newImage, style: !this.state.style });
        counter++;
        if (counter === imageList.length) {
          counter = 0;
        }
      }, 5000);
    }
  };

  getBio() {
    axios.get('/api/biography').then(res => {
      const { biography } = res.data[0];
      const bio = biography
        .replace(/<br>/gi, '\n')
        .replace(/<div>/gi, '\n')
        .replace(/<\/div>/gi, '')
        .replace(/&nbsp;/gi, '');
      this.setState({ bio: bio });
    });
  }

  render() {
    const { bio, images, style } = this.state;
    const web = <a href="http://www.thenostalgics.org/">thenostalgics.org</a>;

    return (
      <div className="bio">
        <div className="image_cont">
          <img src={sing} alt="" />
        </div>
        <div className="bio_right">
          <h1>About</h1>
          {bio && (
            <div className="bio_text">
              <pre>{bio}</pre>
              <pre>
                {`
Check out my band's website here!
`}
                {web}
              </pre>
            </div>
          )}


            <img className={style ? 'image_scroll' : 'image_scroll2'} src={this.state.image} alt="Image scroll" />

        </div>
      </div>
    );
  }
}

export default bio;
