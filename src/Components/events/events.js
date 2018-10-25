import React, { Component } from 'react';

import './events.css';

class events extends Component {
  state = {
    events: [
      {
        name: 'Church gig',
        date: '16 Nov',
        location: 'Fort Worth, TX'
      },
      {
        name: 'Singing',
        date: '10 Dec',
        location: 'Dallas, TX'
      }
    ]
  };
  render() {
    const eventsMap = this.state.events.map((e, i) => {
      return (
        <div className="events_map" key={i}>
          <p>{e.date}</p>
          <p>{e.name}</p>
          <p>{e.location}</p>
        </div>
      );
    });
    return (
      <div className="events">
        <div className='events_top'>
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
