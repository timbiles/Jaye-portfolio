import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class eventMap extends Component {
  state = {
    events: [],
    change: false
  };

  componentDidMount() {
    this.getEvents();
  }
  
  componentWillReceiveProps(nextProps) {
    nextProps.add && this.getEvents();
  }

  getEvents = async () => {
    let event = await axios.get('/api/events')
    this.setState({ events: event.data })
  };

  removeEvent = async e => {
    try{
      await axios.delete(`/api/events/${e.id}`);
      await this.getEvents();
    } catch(err) {
      console.log(err)
    }
  };

  render() {
    const eventsMap = this.state.events.map((el, i) => {
      return (
        <div className={this.props.styling} key={i}>
          <p>{moment.utc(el.date).format('D MMM')}</p>
          <p>{el.event}</p>
          <p>{el.location}</p>
          {this.props.edit && (
            <button onClick={() => this.removeEvent(el)}>X</button>
          )}
        </div>
      );
    });
    return <div>{eventsMap}</div>;
  }
}

export default eventMap;
