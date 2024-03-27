import React from 'react';
import VideoPortada2 from '../../Video/CSharpPart1.mp4';

function VideoGit2() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={VideoPortada2} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoGit2;