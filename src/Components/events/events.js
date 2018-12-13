import React, { Component } from 'react';

import './events.scss';
import EventMap from '../tools/eventMap/eventMap';

class events extends Component {

  render() {
    return (
      <div className="events">
        <div className="events_top">
          <h1>Upcoming Events</h1>
        </div>
        <div className="tour">
          <div className="tour_top">
            <p>Dates</p>
            <p>Upcoming Shows</p>
          </div>
          <EventMap styling='events_map'/>
        </div>
      </div>
    );
  }
}

export default events;
