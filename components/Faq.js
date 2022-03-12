import React, { useState } from 'react';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { Fade } from 'react-reveal';
// import img from '/assets/faq_bg.png';

function Item({ text, body }) {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <Fade bottom={true} delay={500}>
      <div className="w-full shadow-lg flex flex-col items-center justify-center rounded-[3rem]  mb-4">
        <div className="flex items-center  text-center w-full  px-8 justify-between hover:cursor-pointer hover:text-[rgb(82,147,245)] ">
          <h1
            className={`font-Catamaran flex items-center justify-center  text-[1.2rem] hover:text-[rgb(82,147,245) hover:cursor-pointer font-extrabold text-left ${
              show ? 'text-[rgb(82,147,245)' : 'text-gray-800'
            }`}
          >
            {text}
          </h1>
          <div onClick={toggle}>{show ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
        </div>
        <p className="text-lg px-8 pb-6 w-[97%] mx-auto text-left text-gray-600 px-4 font-Catamaran">
          {show && body}
        </p>
      </div>
    </Fade>
  );
}

function Faq() {
  return (
    <div
      id="faq"
      className="container relative mt-24 mb-24 flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden">
        <div
          className="absolute -z-10 top-[10%] left-[84%] overflow-hidden w-full bg-no-repeat  h-full"
          style={{ backgroundImage: `url('/assets/faq_bg.png')` }}
        ></div>
      </div>
      <span className="text-blue-500 tracking-widest font-semibold text-sm uppercase mb-4 md:mb-8 font-Catamaran">
        FAQ
      </span>
      <h1 className="md:text-4xl text-3xl font-Raleway text-center font-semibold mb-7 md:mb-16 text-gray-700">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col w-full gap-y-4 mt-5 md:mt-0 justify-center items-center">
        <Item
          text="Can American sitizens take part in the crowd funding"
          body="JavaScript is also used in environments that aren’t web-based, such as PDF documents, site-specific browsers, and desktop widgets. Newer and faster JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side web applications. On the client side, JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation."
        />
        <Item
          text="Can American sitizens take part in the crowd funding"
          body="JavaScript is also used in environments that aren’t web-based, such as PDF documents, site-specific browsers, and desktop widgets. Newer and faster JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side web applications. On the client side, JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation."
        />
        <Item
          text="Can American sitizens take part in the crowd funding"
          body="JavaScript is also used in environments that aren’t web-based, such as PDF documents, site-specific browsers, and desktop widgets. Newer and faster JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side web applications. On the client side, JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation."
        />
        <Item
          text="Can American sitizens take part in the crowd funding"
          body="JavaScript is also used in environments that aren’t web-based, such as PDF documents, site-specific browsers, and desktop widgets. Newer and faster JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side web applications. On the client side, JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation."
        />
        <Item
          text="Can American sitizens take part in the crowd funding"
          body="JavaScript is also used in environments that aren’t web-based, such as PDF documents, site-specific browsers, and desktop widgets. Newer and faster JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side web applications. On the client side, JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation."
        />
      </div>
    </div>
  );
}

export default Faq;
