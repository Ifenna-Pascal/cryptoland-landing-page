import Head from 'next/head'
import { useEffect, useState } from 'react';
// import Image from 'next/image';
import Video from "../components/Video";
import Landing from "../components/Landing";
import About from "../components/About";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import How from "../components/How";
import Faq from "../components/Faq";
import Latest_news from "../components/Latest_news";
import Footer from "../components/Footer";
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function Home() {
  const [scroll, setScroll] = useState(false);
  const showScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScroll(true);
    } else if (scrolled <= 300) {
      setScroll(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  useEffect(()=> {
      window.addEventListener("scroll", showScroll)
  }, [])

  return (
    <div>
      <Head>
        <title>Crypto_land Page</title>
        <meta name="description" content="Our page for selling nft projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden">
      <Landing />
      <div
        className={`fixed bottom-16 ${
          scroll ? 'flex' : 'hidden'
        } z-20 hover:cursor-pointer items-center rounded-full bg-blue-500  p-3 md:p-4 right-4 md:right-6`}
      >
        <AiOutlineArrowUp onClick={scrollToTop} className="text-white font-extrabold text-xl" />
      </div> 
       <Video />
      <About />
      <Services />
      <Statistics />
      <Faq />
      <How />
      <Latest_news />
      <Footer />
    </div>
      
    </div>
  )
}
