import Image from 'next/image';
import React from 'react';
// import img from '/assets/faq_bg.png';

function GridItems({ img, heading, content }) {
  return (
    <div className="flex md:flex-row flex-col md:mb-2 p-4 justify-center gap-x-1  md:gap-x-4 md:justify-start items-center md:items-start">
      <div className="flex flex-col p-6 md:w-40 w-24 h-24 md:mb-1 mb-5 items-center justify-center rounded-full shadow-[rgb(166,186,245)] content-center justify-self-center md:content-start md:justify-self-start bg-white shadow-2xl">
        <img src={img} alt="services icon"  className=" md:w-40 md:h-40" />
      </div>
      <div className="md:px-2 px-0 text-center md:text-left">
        <h1 className="text-xl font-Raleway font-semibold mb-4 md:mb-5 text-gray-600">{heading}</h1>
        <p className="text-lg tracking-wider w-full text-gray-600 font-Catamaran">{content}</p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div
      id="services"
      className="container relative mt-40  lg:mt-16 mb-24 flex flex-col items-center justify-center"
    >
      <div
        className="absolute top-[10%] -z-30 left-[84%] overflow-hidden w-full bg-no-repeat  h-full"
        style={{ backgroundImage: `url('/assets/faq_bg.png')` }}
      ></div>
      <span className="text-[rgb(124,156,250)] font-semibold text-sm uppercase mb-2 md:mb-4 font-Catamaran">
        Services
      </span>
      <h1 className="md:text-4xl text-2xl font-Raleway text-center font-semibold mb-5 md:mb-7 md:mb-16 text-gray-700">
        Cryptoland Theme
      </h1>
      <div className="grid  md:grid-cols-2 gap-x-3 md:gap-x-8 gap-y-5  grid-cols-1">
        <GridItems
          img="/Imgs/services1.svg"
          heading="General ecosystem"
          content="Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff."
        />
        <GridItems
          img="/Imgs/services2.svg"
          heading="General ecosystem"
          content="Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff."
        />
        <GridItems
          img="/Imgs/services3.svg"
          heading="Exchange for other crypto currencies"
          content="Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff."
        />
        <GridItems
          img="/Imgs/services4.svg"
          heading="Transfer to Debit card"
          content="Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff."
        />
        <GridItems
          img="/Imgs/services5.svg"
          heading="Protection against fraud"
          content="Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff."
        />
        <GridItems
          img="/Imgs/services6.svg"
          heading="Anonymity"
          content="Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff."
        />
      </div>
    </div>
  );
}

export default Services;
