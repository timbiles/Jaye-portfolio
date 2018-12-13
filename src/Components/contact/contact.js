import React, { Component } from 'react';
import axios from 'axios';

import Input from './input';
import data from './info.json';
import './contact.scss';

class form extends Component {
  state = {
    click: false,
    completed: true,
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

    name === '' || email === '' || phone === '' || date == '' || location === '' || desc === '' 
      ? this.setState({completed: false})
      : axios.put('/api/contacts', {name, email, phone, date, location, desc}).then(() => this.setState({completed: true}))
  }

  render() {
    const { click, completed } = this.state;
    const inputMap = data.map((e, i) => {
      return <Input key={i} e={e} handleChange={this.handleChange}/>;
    });

    return (
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact_main">
          <h2>Need an entertainer?</h2>
          <h4>Send Jaye a message to get started!</h4>
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
    {!completed && <p className='error'>** Please fill out each input field.</p> }
          </div>
        </div>
      </div>
    );
  }
}

export default form;
