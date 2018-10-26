import React, { Component } from 'react';

import './mainAdmin.css';

class mainAdmin extends Component {
  render() {
    return (
      <div className="main_admin">
        <div className="ma_nav">
          <p>Menu</p>
          <p>Events</p>
          <p>Music</p>
          <p>Bio</p>
        </div>
        <div className="ma_events">
          <div>
            <h2>Events</h2>
            <div>
              <p>Date</p>
              <input type="text" />
            </div>
            <div>
              <p>Title</p>
              <input type="text" />
            </div>
            <div>
              <p>Location</p>
              <input type="text" />
            </div>
          </div>
          <div className="ma_bio">
            <div>Music</div>
            <div>Bio</div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainAdmin;
