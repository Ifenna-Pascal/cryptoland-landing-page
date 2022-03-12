import React, { useEffect, useRef, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Zoom } from 'react-reveal';

function Circular({ time, period }) {
  return (
    <CircularProgressbarWithChildren
      value={60}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 0.25,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',

        // Text size
        textSize: '16px',

        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: `rgba(83,130,247, ${time / 60}})`,
        textColor: '#f88',
        trailColor: 'rgb(226,231,248)',
        backgroundColor: 'red'
      })}
    >
      {' '}
      <span className="font-Catamaran text-blue-600 font-semibold tracking-widest  text-center uppercase text-[0.6rem] md:text-lg">
        {period}
      </span>
      <span className="text-gray-600 text-lg  md:text-3xl font-bold font-Raleway tracking-widest text-center">
        {time}
      </span>
    </CircularProgressbarWithChildren>
  );
}

function Hero() {
  let [days, setDays] = useState('00');
  let [hours, setHours] = useState('00');
  let [mins, setMins] = useState('00');
  let [secs, setSecs] = useState('00');
  const [display, setDisplay] = useState(false);
  let interval = useRef();

  let startTimer = () => {
    let countdownDate = new Date('March 30, 2022 00:00:00').getTime();
    interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        setDisplay(false);
      } else {
        setDisplay(true);
        setDays(days);
        setHours(hours);
        setMins(mins);
        setSecs(secs);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <Zoom delay={600}>
      <div
        id="home"
        className="container mt-12 mx-auto h-full flex text-center flex-col items-center gap-y-8 justify-center p-4"
      >
        <div>
          <h1 className="md:text-5xl text-4xl sm:text-4xl tracking-wider font-Raleway font-[1000] mb-4 text-gray-800">
            Cryptoland Just Landed
          </h1>
          <p className="lg:text-5xl text-3xl font-[50] font-Raleway text-gray-500 tracking-wider text-center">
            the Real World
          </p>
        </div>
        <p className="font-Catamaran md:w-[85%] sm:text-lg text-base text-gray-500 tracking-wide">
          Archerfish pipefish mora silver hake lumpsucker perch black dragonfish California
          smoothtongue. Poacher golden trout Atlantic cod medaka sandfish scat goby arapaima taimen
          trout cod
        </p>
        <div className="flex md:w-[70%] lg:w-[53%] w-full overflow-hidden p-4 md:px-6 gap-x-3 md:gap-x-7">
          <Circular time={days} period="Days" />
          <Circular time={hours} period="Hours" />
          <Circular time={mins} period="Mins" />
          <Circular time={secs} period="Secs" />
        </div>
        <div className="flex flex-col md:flex-row justify-center md:max-w-[65%] md:mt-0 mb-7 w-full mx-auto text-base gap-x-8 items-center">
          <button className="text-center shadow-2xl md:mb-0 mb-5 w-full shadow-[rgb(242,101,82)] backdrop-blur-lg drop-shadow-lg px-10 md:py-4 py-4 text-base rounded-md font-medium bg-[rgb(242,101,82)] text-white text-sm font-Catamaran hover:bg-green-400">
            Buy Token 47% Off
          </button>
          <button className="text-center shadow-[rgb(85,126,248)] w-full shadow-2xl px-10 py-4 text-base  md:py-4 font-medium rounded-md bg-[rgb(85,126,248)] text-white text-sm font-Catamaran hover:bg-green-400">
            White Pappers
          </button>
        </div>
        <div className="flex  justify-center md:max-w-[50%] max-w-[70%] mb-8 md:mb-0 mx-auto text-base gap-x-5 items-center">
          <img src="/Imgs/visa.png" alt="Image" />
          <img src="/Imgs/mc.png" alt="Image" />
          <img src="/Imgs/bitcoin.png" alt="Image" />
          <img src="/Imgs/paypal.png" alt="Image" />
        </div>
      </div>
    </Zoom>
  );
}

export default Hero;
