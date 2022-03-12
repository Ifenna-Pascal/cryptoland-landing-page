import React from 'react';
// import img1 from '/assets/statistics.png';
// import img3 from '/assets/statistics_mb.png';
// import img2 from '/assets/round-white.svg';

function Statistics() {
  return (
    <div
      id="statistics"
      className="w-screen relative md:mt-0  mb-12 h-[34rem]"
      style={{ backgroundImage: `url('/assets/statistics_mb.png')` }}
    >
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1  text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 185.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div
        className="absolute lg:block hidden bg-no-repeat w-[12rem] h-[12rem] top-[1rem] left-[0.2rem]"
        // style={{ backgroundImage: `url(${img2})` }}
      >
        <img src='/assets/round-white.svg' className="w-full" />
      </div>
      <div className="container  h-full flex flex-col items-center justify-center gap-y-4 md:gap-y-7">
        <span className="text-blue-300 font-bold text-sm capitalize">INFOBLOCK</span>
        <h1 className="text-white font-Raleway text-3xl md:text-4xl font-[1000]  lg:mb-10 text-center">
          Huge and Diverse Market
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 px-4 md:px-1 justify-center text-center items-center md:gap-x-8  md:gap-y-5">
          <div className="mb-8">
            <span className="text-white lg:text-xl text-lg  md:mb-24 tracking-wide font-Catamaran font-bold">
              Sports fans world-wide
            </span>
            <h1 className="text-yellow-200 mt-3 md:mt-6 text-center mx-auto font-Catamaran text-3xl md:text-4xl lg:text-5xl font-[1000] md:mb-0 text-center w-[85%]">
              1 billion
            </h1>
          </div>
          <div className="mb-8">
            <span className="text-white tracking-wide lg:text-xl text-lg md:mb-24 font-Catamaran font-bold">
              Betting and Fantasy sports cap
            </span>
            <h1 className="text-red-600 mt-3 font-[1000] md:mt-6 mx-auto font-Catamaran text-3xl md:text-4xl lg:text-5xl md:mb-0 text-center w-[85%]">
              1 trillion
            </h1>
          </div>
          <div className="mb-8">
            <span className="text-white tracking-wide lg:text-xl text-lg  font-Catamaran font-bold">
              Sports fans world-wide
            </span>
            <h1 className="text-blue-400 mt-3 font-[1000] mx-auto font-Catamaran text-3xl lg:text-5xl md:text-4xl md:mt-6 md:mb-0 text-center w-[85%]">
              1 billion
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
