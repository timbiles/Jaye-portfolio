import React from 'react';

import './home.scss';
import jaye from '../../assets/images/jaye.JPG';

const home = () => {
    return (
      <>
        <div className="home">
          <img src={jaye} alt="Profile pic" />
        </div>
      </>
    );
  }

export default home;
