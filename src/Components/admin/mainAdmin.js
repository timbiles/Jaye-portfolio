import React, { Component } from 'react';

import './mainAdmin.css';
import EventMap from '../tools/eventMap/eventMap';
import Modal from '../tools/modal/modal';

class MainAdmin extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
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
            <EventMap styling="admin_events_map" />
            <p>Modal</p>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>Modal</p>
                <p>Data</p>
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
