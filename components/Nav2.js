import { useEffect, useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 180) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`lg:px-4 py-5 w-full h-[5rem]  ${
        scrollNav || isMenuOpen ? 'bg-white' : 'bg-transparent'
      } z-50 fixed top-0  mx-auto`}
    >
      <div className="relative flex items-center lg:w-[98%] mx-auto justify-between">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-84}
          spy={true}
          exact="true"
          className="flex px-5 lg:px-0"
        >
          <div className="flex h-10 mr-3  w-10 items-center justify-center">
            <img src="/Imgs/Logo_blue.svg" alt="Logo_Image" className="w-full" />
          </div>
          <span className="self-center font-Alef text-3xl text-gray-700 tracking-wide whitespace-nowrap dark:text-white">
            Cryptoland
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-6 lg:flex">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              to="services"
              className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              to="statistics"
              className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Statistic
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              to="how"
              className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              to="faq"
              className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              to="latest"
              className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Latest News
            </Link>
          </li>
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <div className="flex items-center justify-center">
              <button className="text-center px-6 py-3 rounded-md bg-blue-500 text-white text-sm font-Catamaran hover:bg-green-400">
                Join Cryptoland ICO
              </button>
            </div>
          </li>
        </ul>
        <div className="lg:hidden pr-5 ">
          <div className="flex items-center w-7  h-7 justify-center" onClick={toggle}>
            {isMenuOpen ? (
              <FaTimes className="w-full h-full" />
            ) : (
              <AiOutlineBars className="w-full h-full" />
            )}
          </div>
          {isMenuOpen && (
            <div className="absolute top-[3.6rem] left-0 h-screen w-full">
              <div className="p-5 h-full bg-white">
                {/* <div className="flex items-center justify-between mb-4"> */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        smooth={true}
                        duration={500}
                        offset={-84}
                        spy={true}
                        exact="true"
                        to="about"
                        className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        smooth={true}
                        duration={500}
                        offset={-84}
                        spy={true}
                        exact="true"
                        to="services"
                        className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Services
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        smooth={true}
                        duration={500}
                        offset={-84}
                        spy={true}
                        exact="true"
                        to="statistics"
                        className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Statistic
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        smooth={true}
                        duration={500}
                        offset={-84}
                        spy={true}
                        exact="true"
                        to="how"
                        className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Roadmap
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        smooth={true}
                        duration={500}
                        offset={-84}
                        spy={true}
                        exact="true"
                        to="faq"
                        className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        smooth={true}
                        duration={500}
                        offset={-84}
                        spy={true}
                        exact="true"
                        to="latest"
                        className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  border-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Latest News
                      </Link>
                    </li>
                    <li>
                      <div className="flex items-start w-full justify-start">
                        <button className="text-center px-6 py-3 w-full rounded-md bg-blue-500 text-white text-sm font-Catamaran hover:bg-green-400">
                          Join Cryptoland ICO
                        </button>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
