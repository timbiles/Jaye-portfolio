import React, { Component } from 'react';
import axios from 'axios';
import ContentEditable from 'react-contenteditable';

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
    location: '',
    bio: '',
    input: ['Event', 'Date', 'Location']
  };

  componentDidMount() {
    this.getBio();
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getBio() {
    axios.get('/api/biography').then(res => {
      console.log(res.data);
      this.setState({ bio: res.data });
    });
  }

  updateBio = val => {
    axios.put('/api/biography', {bio: val})
  }

  submitEvent = async () => {
    const { event, date, location } = this.state;
    await axios.post('/api/events', { event, date, location }).then(res => {
      this.setState({ add: true });
    });
    await this.hideModal();
  };

  render() {
    const { add, edit, bio, input } = this.state;

    const eventInputs = input.map((el, i) => {
      return (
        <div key={i}>
          <p>{el}</p>
          <input
            type="text"
            name={el.toLowerCase()}
            onChange={e => this.updateInput(e)}
          />
        </div>
      );
    });

    return (
      <div className="main_admin">
        <div className="ma_nav">
          <p onClick={this.showModal}>Add Event</p>
          <p>Music</p>
          <p>Bio</p>
        </div>
        <div className="ma_events">
          <div className="ma_events_top">
            <h2>Events</h2>
            <EventMap styling="admin_events_map" add={add} edit={edit} />
          </div>
          <div className="ma_events_btm">
            <div>Music</div>
            <div>
              <h4>Biography</h4>
              <ContentEditable
                  html={bio && bio[0].biography}
                  onChange={e => this.updateBio(e.target.value)}
                  className='admin_bio'
                />
            </div>
          </div>
        </div>
        <Modal handleClose={this.hideModal} show={this.state.show}>
          <div className="modal_admin">
            {eventInputs}
            <button onClick={this.submitEvent}>Add Event</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MainAdmin;
