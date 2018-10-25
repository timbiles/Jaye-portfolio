import React, { Component } from 'react';

import './home.css';
import family from '../files/family.jpg';
// import main from '../files/main.png'

class home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home_name">
          <h1>Jaye</h1>
          <h1>Biles</h1>
          <div className='name_ab'>
            <p>Singer</p>
            <p>Worshiper</p>
          </div>
        </div>
        <div>
          <img src={family} alt="Family pic" />
        </div>
      </div>
    );
  }
}

export default home;
