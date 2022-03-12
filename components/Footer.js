import React from 'react';
// import bg from '/assets/footer_bg.png';
// import img from '/assets/round-white.svg';
import { AiFillVideoCamera } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter, FaGithub, FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <div
      className="w-screen relative mt-32 md:mt-20 bg-red-300"
      style={{ background: `url('/assets/footer_bg.png')` }}
    >
      <img src='/assets/round-white.svg' className="absolute w-52 h-52 -top-16" />
      <div className="pt-24 mb-12 mx-auto grid lg:grid-cols-3 grid-cols-1 max-w-full lg:max-w-[60%] px-3 md:px-8 md:justify-center justify-start items-start md:items-center mx-auto">
        <div className="col-span-1 mb-8 md:mb-0 px-4 mr-4">
          <div className="flex items-center mb-5 justify-start">
            <span className="bg-gray-300 w-8 h-[0.1rem] justify-self-end mr-2"></span>
            <span className="text-sm font-bold text-gray-300 font-Catamaran uppercase">
              Contact us
            </span>
          </div>
          <h1 className="text-white font-Raleway font-extrabold text-3xl mb-8">Get in Touch</h1>
          <div className="text-white font-Catamaran text-base font-semibold tracking-wider mb-4 flex flex-col gap-y-1">
            <span>523 Sylvan Ave, 5th Floor Mountain View, CA</span>
            <span>+1 (234) 56789, +1 987 654 328</span>
            <span>info@cryptoland.com</span>
            <span>supportcenter@cryptoland.com </span>
          </div>
          <div className="flex flex-col items-start justify-start text-white">
            <span className="text-white font-Catamaran text-base font-semibold tracking-wider">
              Stay connected
            </span>
            <div className="py-6 flex gap-x-4 items-start">
              <span className="border-white hover:cursor-pointer rounded-full flex items-center justify-center  w-8 border-[0.11rem] h-8">
                <FaLinkedinIn />
              </span>
              <span className="border-white hover:cursor-pointer rounded-full flex items-center border-[0.11rem] justify-center   w-8 h-8">
                <FaTwitter />
              </span>
              <span className="border-white hover:cursor-pointer rounded-full flex items-center border-[0.11rem] justify-center   w-8 h-8">
                <AiFillVideoCamera />
              </span>
              <span className="border-white hover:cursor-pointer rounded-full flex items-center border-[0.11rem] justify-center   w-8 h-8">
                <FaFacebookF />
              </span>
              <span className="border-white hover:cursor-pointer rounded-full flex items-center border-[0.11rem] justify-center    w-8 h-8">
                <FaGithub />
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full">
          <form className="flex flex-col w-full gap-y-4">
            <input
              className="rounded-md w-full  px-8 py-4 border-none text-base text-gray-400 bg-gray-100 opacity-30 hover:bg-white hover:opacity-90"
              type="text"
              placeholder="Name"
            />
            <input
              className="rounded-md w-full  px-8 py-4 border-none text-base text-gray-400 bg-gray-100 opacity-30 hover:bg-white hover:opacity-90 hover:bg-white"
              placeholder="Email"
              type="email"
            />
            <textarea
              rows={5}
              className="rounded-md w-full bg-gray-100 opacity-30 hover:bg-white hover:opacity-90  px-8 py-4 border-none text-base text-gray-400 hover:bg-white"
              placeholder="Message"
            ></textarea>
            <div className="md:max-w-[30%] max-w-[50%] flex items-start mt-2 justify-start">
              <button className="bg-white shadow-lg text-base font-Catamaran w-full hover:text-white hover:bg-green-400 rounded-lg py-4 px-4">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:max-w-[60%] max-w-full py-5 px-4 mx-auto">
        <div className="w-full grid lg:grid-cols-5 grid-cols-2 gap-x-3">
          <div className="flex flex-col col-span-2 lg:col-span-1 items-start px-4 mb-8 lg:mb-0 lg:items-center justify-center gap-y-3">
            <div className="flex flex-col items-center mb-2 justify-center w-16 h-16">
              <img src="/Imgs/Logo_white.svg" alt="white_logo" className="w-full" />
            </div>
            <span className="text-center text-sm text-gray-300">@ 2022 Cryptoland</span>
          </div>
          <ul className="flex flex-col items-start px-4 lg:items-center font-bold justify-center gap-y-1 text-lg md:text-base text-white font-Catamaran">
            <li>About us</li>
            <li>Road map</li>
            <li>Team</li>
            <li>token</li>
          </ul>
          <ul className="flex flex-col items-start lg:items-center font-bold justify-center gap-y-1 text-lg md:text-base text-white font-Catamaran">
            <li>About us</li>
            <li>Road map</li>
            <li>Team</li>
            <li>token</li>
          </ul>
          <div className="col-span-2 pb-12  md:pb-0 px-4 lg:mt-0 mt-8">
            <span className="md:text-base text-lg font-bold  text-white  mb-4">Subscribe</span>
            <form className="flex mt-4 md:flex-row flex-col  items-start lg:items-center ">
              <input
                className="rounded-md px-8 w-full sm:w-[80%] lg:w-fit mb-3 md:mb-0 py-3 sm:mr-2 lg:mr-3 border-none text-base text-gray-400 bg-gray-100 opacity-30 hover:bg-white hover:opacity-90"
                type="Email"
                placeholder="Email"
              />
              <div className="flex items-start w-full  sm:w-[20%]  justify-center">
                <button className="bg-white text-base shadow-lg font-Catamaran w-full hover:text-white hover:bg-green-400 rounded-lg py-3 px-6">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
