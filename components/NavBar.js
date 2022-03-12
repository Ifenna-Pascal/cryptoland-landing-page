import React from 'react';

function NavBar() {
  return (
    <nav className="bg-transparent max-w-[98%] mx-auto fixed z-50 top-0  right-0 left-0 border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800">
      <div className="flex overflow-x-hidden flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex">
          <div className="flex h-10 mr-4  w-10 items-center justify-center">
            <img src="/Imgs/Logo_blue.svg" alt="Logo_Image" className="w-full" />
          </div>
          <span className="self-center font-Alef text-3xl text-gray-600 tracking-wide whitespace-nowrap dark:text-white">
            Cryptoland
          </span>
        </a>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto "
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium font-Catamaran">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Road Map
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Statistic
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Token
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                WhitePapper
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3  text-gray-900 tracking-wide text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md: hover:border-b-2 border-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-x-5">
          <div className="flex items-center justify-center">
            <button className="text-center px-6 py-3 rounded-md bg-blue-500 text-white text-sm font-Catamaran hover:bg-green-400">
              Join Cryptoland ICO
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
