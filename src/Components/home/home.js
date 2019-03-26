import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import './home.scss';
import jaye from '../../assets/images/jaye.JPG';
import music from '../../assets/images/music-sheet.jpg';

const home = () => {
    return (
      <Home>
        <div className="home">
          <img src={jaye} alt="Profile pic" />
        </div>
      </Home>
    );
  }

export default home;

const Home = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  /* height: 100vw;
  width: 100vw;
  background: url(${music}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: -1;
  opacity: 0.7; */

  .home {
  position: relative;
  margin: auto;
  margin-top: 10vh;
  min-height: 90vh;
  width: 90vw;

    img {
      height: 80vh; 
      border-radius: 2px;
    }

    .staff {
      height: 60vh;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      z-index: -1;
    }
  }
`
