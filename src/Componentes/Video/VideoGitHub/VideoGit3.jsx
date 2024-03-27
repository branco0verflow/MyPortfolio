import React from 'react';
import VideoPortada3 from '../../Video/CSharpPart2.mp4';

function VideoGit3() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada3} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit3;