import React from 'react';
import VideoPortada6 from '../../Video/RedPelis.mp4';

function VideoGit6() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada6} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit6;