import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// import './home.scss';
import jaye from '../../assets/images/jaye.JPG';

const home = () => {
    return (
      <Home>
        <div className="home_container">
          <img src={jaye} alt="Profile pic" />
        </div>
      </Home>
    );
  }

export default home;

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  /* background: green; */

  .home_container {
    height: 90%;
    width: 90%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90%;
    /* background: blue; */

    img {
      height: 100%; 
      border-radius: 3px;
    }
  }
`