import React from 'react';
import VideoPortada10 from '../../Video/NOTFOUND.mp4';

function VideoGit10() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada10} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit10;