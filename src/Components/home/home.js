import React, { Component } from 'react';
// import styled, {keyframes} from 'styled-components';

import './home.scss';
import musicStaff from './staff.png'

// import Eighth from '../musicNotes/EighthNotes';
import jaye from '../files/jaye.JPG';

class home extends Component {
  render() {
    return (
      <>
        <div className='home'>
          <img src={jaye} alt=""/>
          {/* <img className='staff' src={musicStaff} alt=""/> */}
        </div>
      </>
    );
  }
}

export default home;

// const falling = keyframes`
// 0% {
//   transform: translateY(-100vh);
//   opacity: 0;
// }

// 20% {
//   opacity: 0;
// }

// 50% {
//   opacity: 1
// }

// 70% {
//   opacity: 0;
// }
// 100% {
//   transform: translateY(100vh);
//   opacity: 0;
// }
// `

// const Container = styled.div`
//   width: 40px;
//   height: 40px;
//   animation: ${falling} 10s;
// `