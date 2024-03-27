import React from 'react';
import VideoPortada4 from '../../Video/FirstProyect.mp4';

function VideoGit4() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada4} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit4;