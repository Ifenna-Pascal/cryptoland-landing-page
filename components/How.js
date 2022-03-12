import React from 'react';

function Step({ img, title, content }) {
  return (
    <div className="flex flex-col md:gap-y-8 items-center justify-center">
      <div className="bg-white shadow-md p-7 mb-6 md:mb-0 rounded-full flex items-center justify-center">
        <img src={img} alt="step_img" className="w-12 h-12" />
      </div>
      <h2 className="text-gray-700 text-center text-2xl font-semibold font-Catamaran">{title}</h2>
      <p className="text-gray-600 text-lg text-center font-Catamaran">{content}</p>
    </div>
  );
}

function How() {
  return (
    <div id="how" className="container mt-24 mb-24 flex flex-col items-center justify-center">
      <span className="text-blue-500 tracking-widest font-semibold text-sm uppercase mb-4 md:mb-8 font-Catamaran">
        Awesome Services
      </span>
      <h1 className="md:text-4xl text-3xl font-Raleway text-center font-semibold mb-5 md:mb-7 md:mb-16 text-gray-700">
        How it works
      </h1>
      <div className="grid lg:grid-cols-4 gap-8 justify-center md:grid-cols-2 grid-cols-1">
        <Step
          img="/Imgs/work2.svg"
          title="Blockchain"
          content="Involvement of third-party developers into IQeon ecosystem and expansion of our own product line will lead to growth in users."
        />
        <Step
          img="/Imgs/work2.svg"
          title="Indefication"
          content="Involvement of third-party developers into IQeon ecosystem and expansion of our own product line will lead to growth in users."
        />
        <Step
          img="/Imgs/work3.svg"
          title="Make payments "
          content="Involvement of third-party developers into IQeon ecosystem and expansion of our own product line will lead to growth in users."
        />
        <Step
          img="/Imgs/work4.svg"
          title="Buy or sell orders"
          content="Involvement of third-party developers into IQeon ecosystem and expansion of our own product line will lead to growth in users."
        />
      </div>
    </div>
  );
}

export default How;
