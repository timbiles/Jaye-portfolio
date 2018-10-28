import React, { Component } from 'react';
import axios from 'axios';

import './mainAdmin.css';
import EventMap from '../tools/eventMap/eventMap';
import Modal from '../tools/modal/modal';

class MainAdmin extends Component {
  state = {
    show: false,
    add: false,
    edit: true,
    event: '',
    date: '',
    location: ''
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitEvent = async () => {
    const { event, date, location } = this.state;
    await axios.post('/api/events', { event, date, location }).then(res => {
    this.setState({ add: true });        
      })
    await this.hideModal()      
  };

  render() {
      const {add, edit} = this.state;
    return (
      <div className="main_admin">
        <div className="ma_nav">
          <p>Events</p>
          <p>Music</p>
          <p>Bio</p>
        </div>
        <div className="ma_events">
          <div className="ma_events_top">
            <h2>Events</h2>
            <EventMap
              styling="admin_events_map"
              add={add}
              edit={edit}
            />
            <p>Modal</p>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <div>
                <p>Event</p>
                <input
                  type="text"
                  name="event"
                  onChange={e => this.updateInput(e)}
                />
                <p>Date</p>
                <input
                  type="text"
                  name="date"
                  onChange={e => this.updateInput(e)}
                />
                <p>Location</p>
                <input
                  type="text"
                  name="location"
                  onChange={e => this.updateInput(e)}
                />
                <button onClick={this.submitEvent}>Add Event</button>
              </div>
            </Modal>
            <button type="button" onClick={this.showModal}>
              open
            </button>
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

export default MainAdmin;
