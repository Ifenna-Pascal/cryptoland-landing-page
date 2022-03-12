import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Each_news({ img }) {
  return (
    <div>
      <div className="bg-white sm:mr-3 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt="latest images" />
        </a>
        <div className="p-5">
          <span className="text-[#84A2FA] text-base font-Catamaran font-semibold">
            Bitcoin/Blockchain
          </span>
          <a href="#">
            <h5 className="mb-2 text-2xl font-Catamaran font-bold tracking-tight mt-5 text-gray-700 hover:text-[#84A2FA] dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 text-base dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
          <span className="font-bold text-gray-400 text-sm font-Catamaran">3rd October 2022</span>
        </div>
      </div>
    </div>
  );
}

function Latest_news() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id="latest" className="md:container flex flex-col items-center justify-center">
      <span className="text-[rgb(124,156,250)] text-center font-semibold text-sm uppercase mb-4  md:mb-8 font-Catamaran">
        In the world
      </span>
      <h1 className="md:text-4xl text-3xl font-Raleway text-center font-semibold mb-7 md:mb-16 text-gray-700">
        Latest News
      </h1>
      <div className="container mx-auto ">
        <Slider {...settings}>
          <div>
            {' '}
            <Each_news img="/Imgs/news_img1.png" />
          </div>
          <div>
            {' '}
            <Each_news img="/Imgs/latest_img2.jpg" />
          </div>
          <div>
            <Each_news img="/Imgs/latest_img2.jpg" />
          </div>
          <div>
            {' '}
            <Each_news img="/Imgs/news_img1.png" />
          </div>
          <div>
            {' '}
            <Each_news img="/Imgs/latest_img2.jpg" />
          </div>
          <div>
            <Each_news img="/Imgs/latest_img2.jpg" />
          </div>
        </Slider>
      </div>
      {/* <div className="grid lg:grid-cols-3 gap-8 justify-center md:grid-cols-2 grid-cols-1">
        <Each_news img="/Imgs/news_img1.png" />
        <Each_news img="/Imgs/latest_img2.jpg" />
        <Each_news img="/Imgs/latest_img2.jpg" />
        <Each_news img="/Imgs/latest_img2.jpg" />
        <Each_news img="/Imgs/latest_img2.jpg" />
        <Each_news img="/Imgs/news_img1.png" />
      </div> */}
    </div>
  );
}

export default Latest_news;
