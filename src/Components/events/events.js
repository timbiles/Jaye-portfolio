import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import './events.css';

class events extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    axios.get('/api/events').then(res => {
      this.setState({ events: res.data });
    });
  };

  render() {
    const eventsMap = this.state.events.map((e, i) => {
      return (
        <div className="events_map" key={i}>
          <p>{moment.utc(e.date).format('D MMM')}</p>
          <p>{e.event}</p>
          <p>{e.location}</p>
        </div>
      );
    });
    return (
      <div className="events">
        <div className="events_top">
          <h1>Jaye Biles</h1>
          <h1>Upcoming Events</h1>
        </div>
        <div className="tour">
          <div className="tour_top">
            <p>Dates</p>
            <p>Upcoming Shows</p>
          </div>
          {eventsMap}
        </div>
      </div>
    );
  }
}

export default events;
