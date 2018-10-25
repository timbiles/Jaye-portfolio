import React, { Component } from 'react';

import Input from './input';
import './contact.css';

class form extends Component {
  state = {
    click: false,
    inputs: [
      {
        name: 'Contact Name',
        placeholder: 'Olive Leanne'
      },
      {
        name: 'Contact Email',
        placeholder: 'Olive@olivebranchdesigns.com'
      },
      {
        name: 'Contact Phone',
        placeholder: '505-148-3369'
      },
      {
        name: 'Date of Event',
        placeholder: '07/29/2017'
      },
      {
        name: 'Location / Time',
        placeholder: 'Dallas, 4:00'
      }
    ]
  };

  render() {
    const { inputs, click } = this.state;
    const inputMap = inputs.map((e, i) => {
      return <Input key={i} e={e} />;
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
              placeholder='Brief description..'
              onFocus={() => this.setState({ click: true })}
              onBlur={() => this.setState({ click: false })}
            />
            <button>Contact Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default form;
