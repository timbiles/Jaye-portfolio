import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

import './home.scss';

import Eighth from '../musicNotes/EighthNotes';
import jaye from '../files/jaye.JPG';

class home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home_name">
          <h1>Jaye</h1>
          <h1>Biles</h1>
          <div className='name_ab'>
            <p>Worshiper</p>
            <p>Singer</p>
            <p>Performer</p>
          </div>
        </div>
        <div>
          <img src={jaye} alt="Family pic" />
        </div>
        <Container>
          <Eighth />
        </Container>
      </div>
    );
  }
}

export default home;

const falling = keyframes`
0% {
  transform: translateY(-100vh);
  opacity: 0;
}

20% {
  opacity: 0;
}

50% {
  opacity: 1
}

70% {
  opacity: 0;
}
100% {
  transform: translateY(100vh);
  opacity: 0;
}
`

const Container = styled.div`
  width: 40px;
  height: 40px;
  animation: ${falling} 10s;
`