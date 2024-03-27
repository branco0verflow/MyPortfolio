import React from 'react';
import VideoPortada from '../../Video/777302027.mp4';

function VideoGit1() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit1;