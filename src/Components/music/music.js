import React from 'react';
import styled from 'styled-components';

const music = () => {
  return (
    <Container className="music">
      <iframe
        width="70%"
        height="345"
        src="https://www.youtube.com/embed/gShDVt7IVko"
        title="Jaye_video"
        allowFullScreen
        frameBorder="0"
      />
    </Container>
  );
};

export default music;

const Container = styled.div`
  min-height: 90vh;
  margin-top: 10vh;
`