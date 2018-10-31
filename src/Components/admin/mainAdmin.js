import React, { Component } from 'react';
import axios from 'axios';
import ContentEditable from 'react-contenteditable';

import './mainAdmin.scss';
import EventMap from '../tools/eventMap/eventMap';
import Modal from '../tools/modal/modal';

class MainAdmin extends Component {
  state = {
    show: false,
    add: false,
    edit: true,
    editBio: false,
    toggleEdit: false,
    editMusic: false,
    toggleMusicEdit: false,
    event: '',
    date: '',
    location: '',
    bio: '',
    input: ['Event', 'Date', 'Location']
  };

  componentDidMount() {
    this.getBio();
  }

  handleClose = (e) => {
    if(e.target.id === 'modal'){
    this.setState({ show: false });      
    }
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getBio() {
    axios.get('/api/biography').then(res => {
      this.setState({ bio: res.data });
    });
  }

  updateBio = val => {
    axios.put('/api/biography', {bio: val})
  }

  submitEvent = async () => {
    const { event, date, location } = this.state;
    await axios.post('/api/events', { event, date, location }).then(res => {
      this.setState({ add: true, show: false });
    });
  };

  render() {
    const { add, edit, bio, input, editBio, toggleEdit, editMusic, toggleMusicEdit } = this.state;

    const eventInputs = input.map((el, i) => {
      return (
        <div className='events_mapper' key={i}>
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
          <p onClick={() => this.setState({ show: true })}>Add Event</p>
          <p onClick={() => this.setState({editMusic: true, toggleMusicEdit: !toggleMusicEdit})}>Music</p>
          <p onClick={() => this.setState({editBio: true, toggleEdit: !toggleEdit})}>Edit Bio</p>
        </div>
        <div className="ma_events">
          <div className="ma_events_top">
            <h2>Events</h2>
            <EventMap styling="admin_events_map" add={add} edit={edit} />
          </div>

          <div className="ma_events_btm">
            {
              editBio && 

            <div className={toggleEdit ? 'biography_info' : 'biography_info_exit'}>
              <h4>Biography</h4>
              <ContentEditable
                  html={bio && bio[0].biography}
                  onChange={e => this.updateBio(e.target.value)}
                  className='admin_bio'
                />
            </div>
            }
          </div>
          <div className="ma_events_btm">
            {
              editMusic && 

            <div className={toggleMusicEdit ? 'biography_info' : 'biography_info_exit'}>
              <h4>Music</h4>
              <p>This is where music stuff will go...</p>
            </div>
            }
          </div>
          
        </div>
        <Modal handleClose={this.handleClose} show={this.state.show}>
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
