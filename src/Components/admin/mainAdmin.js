import React, { Component } from 'react';

import './mainAdmin.css';
import EventMap from '../tools/eventMap/eventMap';

class mainAdmin extends Component {

  render() {
    return (
      <div className="main_admin">
        <div className="ma_nav">
          <p>Events</p>
          <p>Music</p>
          <p>Bio</p>
        </div>
        <div className="ma_events">
          <div className='ma_events_top'>
            <h2>Events</h2>
            <EventMap styling='admin_events_map'/>
          </div>
          <div className="ma_events_right">
            <div>Music</div>
            <div>Bio</div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainAdmin;
