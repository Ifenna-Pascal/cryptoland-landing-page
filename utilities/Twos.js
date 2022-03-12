import React from 'react';
import { Fade } from 'react-reveal';

function Twos({ img, content, pos }) {
  return (
    <div className="container px-4 md:px-1 py-4 sm:h-[50rem] lg:h-[32rem] h-[50rem] mb-40 md:mb-36 lg:mb-24">
      <div
        className={`flex ${
          pos ? 'lg:flex-row sm:flex-col' : 'lg:flex-row-reverse sm:flex-col'
        } flex-col items-center gap-y-6 justify-center md:justify-between `}
      >
        <Fade left={true}>
          <div
            className={`flex-1 p-3  flex ${
              pos ? 'md:jsutify-start' : 'md:justify-end'
            } justify-center items-center`}
          >
            <img src={img} alt="image" className="lg:w-[80%]  sm:w-full bg-cover" />
          </div>
        </Fade>
        <Fade right={true} delay={500}>
          <div className="flex-1 px-4 text-left">{content}</div>
        </Fade>
      </div>
    </div>
  );
}

export default Twos;
