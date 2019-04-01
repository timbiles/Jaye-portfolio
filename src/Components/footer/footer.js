import React from 'react';
import styled, { css } from 'styled-components';

import Youtube from '../tools/icons/Youtube';

const footer = () => {
  return (
    <Container primary>
      <Container style={{display: 'flex'}}>
        <Text style={{ color: '#000' }}>© 2018 Olive Branch Designs</Text>
        <Img
          className="olive"
          src="https://image.flaticon.com/icons/svg/85/85254.svg"
          alt="Olive Branch"
        />
        <Text margin='0 15px'>|</Text>
        <Text borderBottom='1px solid #808080'>www.jayebiles.com</Text>
      </Container>
      <Youtube />
    </Container>
  );
};

export default footer;

const Container = styled.div`
  display: flex;

  ${props => props.primary && css`
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    margin: 1% 2%;
  `}
`

const Text = styled.p`
    font-size: 1em;
    margin: ${props => props.margin};
    border-bottom: ${props => props.borderBottom};
`

const Img = styled.img`
    height: 20px;
`