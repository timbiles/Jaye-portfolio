import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
const Section = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const modal = ({ handleClose, show, children }) => {
  return (
    show && (
      <Container>
        <Section onBlur={() => handleClose}>
          {children}
          <button onClick={handleClose}>close</button>
        </Section>
      </Container>
    )
  );
};

export default modal;
