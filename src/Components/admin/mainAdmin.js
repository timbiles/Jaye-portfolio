import React, { Component } from 'react';
import axios from 'axios';

import './mainAdmin.css';

class mainAdmin extends Component {
    state = {
        events: []
    }

    componentDidMount(){
        this.getEvents()
    }

    getEvents = () => {
        axios.get('/api/events').then(res=> {
            this.setState({events: res.data})
        })
    }

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
          <div className='ma_events_left'>
            <h2>Events</h2>
            {/* <p>Add an event</p>
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
            </div> */}
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
