import React, { Component } from 'react';

import './music.scss';

const music = () => {
  return (
    <div className="music">
      <iframe
        width="420"
        height="345"
        src="https://www.youtube.com/embed/gShDVt7IVko"
        title="Jaye_video"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
};

export default music;
