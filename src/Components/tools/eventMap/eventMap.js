import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class eventMap extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents();
  }

  componentWillReceiveProps(nextProps) {
    nextProps.add && this.getEvents();
  }

  getEvents = () => {
    axios.get('/api/events').then(res => {
      this.setState({ events: res.data });
    });
  };

  removeEvent = async e => {
    await axios.delete(`/api/events/${e.id}`);
    await this.getEvents();
  };

  render() {
    const eventsMap = this.state.events.map((e, i) => {
      return (
        <div className={this.props.styling} key={i}>
          <p>{moment.utc(e.date).format('D MMM')}</p>
          <p>{e.event}</p>
          <p>{e.location}</p>
          {this.props.edit && (
            <button onClick={() => this.removeEvent(e)}>X</button>
          )}
        </div>
      );
    });
    return <div>{eventsMap}</div>;
  }
}

export default eventMap;
