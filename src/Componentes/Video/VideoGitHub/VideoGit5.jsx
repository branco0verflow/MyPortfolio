import React from 'react';
import VideoPortada5 from '../../Video/TAU.mp4';

function VideoGit5() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada5} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit5;