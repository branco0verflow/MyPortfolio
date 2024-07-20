import React from 'react';
import VideoPortada9 from '../../Video/Gym24.mp4';

function VideoGit9() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada9} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit9;