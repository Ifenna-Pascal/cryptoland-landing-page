import React from 'react';
import Twos from '../utilities/Twos';

function List({ bold, text, check }) {
  return (
    <div className="flex items-start justify-start gap-x-3 mb-4">
      <div>
        {check ? (
          <img src="/Imgs/check4.svg" className="mt-3" alt="checker" />
        ) : (
          <div className="bg-[rgb(124,156,250)] p-1 justify-self-start content-start mt-3 rounded-full"></div>
        )}
      </div>
      <p className="text-lg text-gray-400 font-Catamaran">
        <strong>{bold} </strong>
        {text}
      </p>
    </div>
  );
}

function Content({ check, topic1, topic2, topic3, body }) {
  return (
    <div>
      <div className="flex gap-x-2 items-center justify-start mb-4 md:mb-8">
        <div className="w-8 h-[3px] bg-[rgb(124,156,250)]"></div>
        <span className="text-[rgb(124,156,250)] font-semibold text-sm uppercase font-Catamaran">
          {topic1}
        </span>
      </div>
      <div className="mb-4 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-Raleway font-semibold mb-1 text-gray-700">
          {topic2}
        </h1>
        <p className="text-2xl md:text-3xl font-[50] font-Raleway text-gray-500 tracking-wider text-left">
          {topic3}
        </p>
      </div>
      <p className="text-lg text-gray-400 font-Catamaran mb-8">{body}</p>
      <List
        check={check}
        bold="Modular Structure"
        text="enabling easy implementation for different softwares"
      />
      <List
        check={check}
        bold="Modular Structure"
        text="enabling easy implementation for different softwares"
      />
      <List
        check={check}
        bold="Modular Structure"
        text="enabling easy implementation for different softwares"
      />
    </div>
  );
}

function About() {
  return (
    <div id="about" className="md:my-32 my-24">
      <Twos
        img="/Imgs/about-img2.png"
        content={
          <Content
            check={true}
            topic1="Decentralized Economy"
            topic2="A banking platform that"
            topic3="enables developer solutions"
            body="Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sale."
          />
        }
        pos={true}
      />
      <Twos
        img="/Imgs/about-img1.png"
        content={
          <Content
            check={false}
            topic1="About ICO"
            topic2="Cryptoland Theme"
            topic3="is best for your ICO"
            body="Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sal"
          />
        }
        pos={false}
      />
    </div>
  );
}

export default About;
