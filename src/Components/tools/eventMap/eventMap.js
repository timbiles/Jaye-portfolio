import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class eventMap extends Component {
  state = {
    events: []
  };

  componentWillReceiveProps(nextprops) {
    // console.log(nextprops)
    if (this.props.add) {
      const { event, date, location } = this.props.obj;
      axios.post('/api/events', { event, date, location }).then(res => {
        console.log('hit', res.data);
        this.getEvents();
      });
    }
  }

  componentDidMount() {
    console.log('hit')
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
        <div className={this.props.styling} key={i}>
          <p>{moment.utc(e.date).format('D MMM')}</p>
          <p>{e.event}</p>
          <p>{e.location}</p>
        </div>
      );
    });
    return <div>{eventsMap}</div>;
  }
}

export default eventMap;
