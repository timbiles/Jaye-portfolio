import React, { Component } from 'react';
import axios from 'axios';

import sing from '../files/sing.png';
import './bio.css';

class bio extends Component {

  state = {
    bio: ''
}

componentDidMount() {
    this.getBio()
}

getBio() {            
    axios.get('/api/biography').then(res => {
        const {biography} = res.data[0]
        console.log(biography)
        const bio = biography.replace(/<br>/gi, "\n").replace(/<div>/gi, "\n").replace(/<\/div>/gi, '')
      this.setState({ bio: bio });
    })
  }

  render() {
    const {bio} = this.state
    
    return (
      <div className="bio">
      <div className='image_cont'>

        <img src={sing} alt="" />
      </div>
        <div className='bio_right'>
          <h1>About</h1>
          <div className="bio_text">
          <pre>
                {bio && bio}
          </pre>

          </div>
        </div>
      </div>
    );
  }
}

export default bio;
