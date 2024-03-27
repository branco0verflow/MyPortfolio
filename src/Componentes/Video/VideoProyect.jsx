import React from 'react';
import Video2 from '../../images/proyect.mp4';

function VideoProyect() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={Video2} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoProyect;