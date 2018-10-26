import React, { Component } from 'react';
import axios from 'axios';

import Input from './input';
import data from './info.json';
import './contact.css';

class form extends Component {
  state = {
    click: false,
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    desc: ''
  };

  handleChange = e => {
      this.setState({[e.target.name]: e.target.value})
  }

  submit = () => {
      const {name, email, phone, date, location, desc} = this.state
    axios.put('/api/contacts', {name, email, phone, date, location, desc})
  }

  render() {
    const { click } = this.state;
    const inputMap = data.map((e, i) => {
      return <Input key={i} e={e} handleChange={this.handleChange}/>;
    });

    return (
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact_main">
          <h2>Need a singer?</h2>
          <h4>Give us a little more information, plz.</h4>
          <div className="contact_sub">
            {inputMap}
            <p className={click ? 'focus_p' : ''}>Description of Event</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Brief description.."
              onFocus={() => this.setState({ click: true })}
              onBlur={() => this.setState({ click: false })}
              onChange={e=> this.setState({desc: e.target.value})}
            />
            <button onClick={()=> this.submit()}>Contact Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default form;
