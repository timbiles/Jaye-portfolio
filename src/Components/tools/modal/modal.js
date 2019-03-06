import React from 'react';
import styled from 'styled-components';

const modal = ({ handleClose, show, children }) => {
  return (
    show && (
      <Container id='modal' onClick={e => handleClose(e)}>
        <Section>
          {children}
        </Section>
      </Container>
    )
  );
};

export default modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;
const Section = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 40vw;
  height: 50vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;