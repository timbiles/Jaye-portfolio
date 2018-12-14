import React from 'react';

const editMusic = (props) => {
  return (
    <div className="ma_events_btm">
      {props.editMusic && (
        <div
          className={props.toggleMusicEdit ? 'biography_info' : 'biography_info_exit'}
        >
          <h4>Music</h4>
          <p>This is where music stuff will go...</p>
        </div>
      )}
    </div>
  );
};

export default editMusic;
