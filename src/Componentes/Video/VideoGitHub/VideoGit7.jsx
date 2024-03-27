import React from 'react';
import VideoPortada7 from '../../Video/Portafolio.mp4';

function VideoGit7() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada7} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit7;