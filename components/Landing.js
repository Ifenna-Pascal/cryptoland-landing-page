import React from 'react';
// import img1 from '/assets/hero_white.png';
// import img2 from '/assets/hero_blue.png';
// import img3 from '/assets/round-blue.svg';
// import img4 from '/assets/round-white.svg';
import Hero from './Hero';
import { Nav } from './Nav2';

function Landing() {
  return (
    <div className="relative overflow-hidden h-screen md:h-[58rem] w-screen">
      <div
        className="absolute top-0 left-0 w-full -z-30 bg-no-repeat  h-full"
        style={{ backgroundImage: `url('/assets/hero_white.png')` }}
      ></div>
      <div
        className="absolute top-[20%] hidden lg:block -z-30  w-full bg-no-repeat h-full"
        style={{ backgroundImage: `url('/assets/round-blue.svg')` }}
      >
        <img className="absolute inset-36 bg-no-repeat  hidden md:block -z-30" src='/assets/round-white.svg' />
      </div>
      {/* <NavBar /> */}
      <Nav />
      <Hero />
      <div
        className="absolute  top-[10%] left-[84%]  hidden md:block overflow-hidden w-full bg-no-repeat  h-full"
        style={{ backgroundImage: `url('/assets/hero_blue.png')` }}
      >
        <div
          className="absolute lg:block md:hidden top-[60%] left-[3%] w-full bg-no-repeat h-full"
          style={{ backgroundImage: `url('/assets/round-white.svg')` }}
        ></div>
      </div>
    </div>
  );
}

export default Landing;
