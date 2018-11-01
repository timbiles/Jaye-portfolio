import React, { Component } from 'react';
import axios from 'axios';

import sing from '../files/sing.png';
import './bio.scss';

class bio extends Component {
  state = {
    bio: ''
  };

  componentDidMount() {
    this.getBio();
  }

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
    const { bio } = this.state;
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
        </div>
      </div>
    );
  }
}

export default bio;
