import React from 'react';
import { Fade } from 'react-reveal';
// import img1 from '/assets/video-bg.png';

function Video() {
  return (
    <Fade right={true} delay={600}>
      <div className="container my-10 h-[20rem] md:h-[28rem] sm:px-8 flex flex-col items-center justify-center">
        <div
          className="w-full h-full flex bg-cover rounded-xl shadow-xl flex-col items-center justify-center text-center"
          style={{ backgroundImage: `url('/assets/video-bg.png')` }}
        >
          <div className="flex flex-col justify-center items-center w-30 p-6 p-8 hover:cursor-pointer h-30 justify-self-center bg-[rgb(0,209,228)] rounded-full">
            <img src="/Imgs/video-btn.svg" alt="video-icon" className="text-center" />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Video;
