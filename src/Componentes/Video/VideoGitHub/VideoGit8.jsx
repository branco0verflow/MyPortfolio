import React from 'react';
import VideoPortada8 from '../../Video/AppGym.mp4';

function VideoGit8() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada8} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit8;