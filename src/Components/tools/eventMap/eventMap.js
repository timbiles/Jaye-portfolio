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
        return (
            <div>
                {eventsMap}
            </div>
        );
    }
}

export default eventMap;