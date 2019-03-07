import React, { Component } from 'react';

import './mainAdmin.scss';
import AddEvent from '../tools/mutations/AddEvent';
import GetBio from '../tools/queries/GetBio';
import EventMap from '../tools/eventMap/eventMap';
import Modal from '../tools/modal/modal';

class MainAdmin extends Component {
  state = {
    show: false,
    edit: true,
    editBio: false,
    toggleEdit: false,
    editMusic: false,
    toggleMusicEdit: false,
  };

  handleClose = e => {
    if (e.target.id === 'modal') {
      this.setState({ show: false });
    }
  };

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {
    const {
      edit,
      editBio,
      toggleEdit,
      editMusic,
      toggleMusicEdit
    } = this.state;

    return (
      <div className="main_admin">
        <div className="ma_nav">
          <p onClick={() => this.setState({ show: true })}>Add Event</p>
          <p
            onClick={() =>
              this.setState({
                editMusic: true,
                toggleMusicEdit: !toggleMusicEdit
              })
            }
          >
            Music
          </p>
          <p
            onClick={() =>
              this.setState({ editBio: true, toggleEdit: !toggleEdit })
            }
          >
            Edit Bio
          </p>
        </div>
        <div className="ma_events">
          <div className="ma_events_top">
            <h2>Events</h2>
            <EventMap styling="admin_events_map" edit={edit} />
          </div>

          <div className="ma_events_btm">
            {editBio && (
              <div
                className={
                  toggleEdit ? 'biography_info' : 'biography_info_exit'
                }
              >
                <h4>Biography</h4>
                <GetBio admin/>
              </div>
            )}
          </div>

          <div className="ma_events_btm">
            {editMusic && (
              <div
                className={
                  toggleMusicEdit ? 'biography_info' : 'biography_info_exit'
                }
              >
                <h4>Music</h4>
                <p>This is where music stuff will go...</p>
              </div>
            )}
          </div>
        </div>
        <Modal handleClose={this.handleClose} show={this.state.show}>
          <div className="modal_admin">
            <AddEvent closeModal={this.closeModal}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MainAdmin;
