import React, { useState } from 'react';
import axios from 'axios';

import Input from './input';
import data from './info.json';
import './contact.scss';

// class form extends Component {
  const contact = () => {
  
    const [click, setClick] = useState(false)
    const [completed, setCompleted] = useState(true)
    const [form, setForm] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      location: '',
      desc: ''
    });
  
    const inputChange = e => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

  // handleChange = e => {
  //     this.setState({[e.target.name]: e.target.value})
  // }

  // submit = async () => {
  //     const {name, email, phone, date, location, desc} = this.state

  //   if (!name || !email || !phone || !date || !location || !desc) {
  //     this.setState({completed: false})
  //   } else {
  //     await axios.put('/api/contacts', {name, email, phone, date, location, desc})
  //     this.setState({completed: true})
  //   }
  // }

    // const { click, completed } = this.state;
    const inputMap = data.map((e, i) => {
      return <Input key={i} e={e} inputChange={inputChange}/>;
    });

    console.log(form)

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
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="Brief description.."
              onFocus={() => setClick(true)}
              onBlur={() => setClick(false)}
              onChange={inputChange}
            />
            <button onClick={()=> this.submit()}>Contact Now</button>
            {!completed && <p className='error'>** Please fill out each input field.</p> }
          </div>
        </div>
      </div>
    );
  }


export default contact;
