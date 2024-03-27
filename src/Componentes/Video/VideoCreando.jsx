import React from 'react';
import Video1 from '../../images/VideoCreando.mp4';

function VideoPlayer() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={Video1} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoPlayer;
