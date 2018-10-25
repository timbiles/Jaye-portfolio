import React, { Component } from 'react';

import sing from '../files/sing.png';
import './bio.css';

class bio extends Component {
  render() {
    return (
      <div className="bio">
      <div className='image_cont'>

        <img src={sing} alt="" />
      </div>
        <div className='bio_right'>
          <h1>About</h1>
          <div className="bio_text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              atque, repellat numquam alias dolorum adipisci vel delectus est
              accusamus hic obcaecati ut labore, repudiandae deserunt aperiam et
              nobis at. Autem! Magni
              atque, repellat numquam alias dolorum adipisci vel delectus est
              accusamus hic obcaecati ut labore, repudiandae deserunt aperiam et
              nobis at. Autem!
            </p>
            <p>This is another paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam maiores iste aperiam, accusantium sit qui aut officiis suscipit culpa quam sequi blanditiis ipsa placeat rem amet hic eligendi nisi!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default bio;
