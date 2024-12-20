import React, { useState } from 'react'
import { BiDownArrow } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import ThemeProvider from '../ThemeProvider';
import TranslateWidget from '../TranslateWidget';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);

  const { t } = useTranslation();

 


  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);

  const showDropdown1 = () => setIsDropdownVisible1(true);
  const hideDropdown1 = () => setIsDropdownVisible1(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCloseMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div><header>
      <nav class="bg-pin-500 bg-blue-950  px-4 lg:px-6  dark:bg-gray-800">
        <div class="flex flex-wrap md:justify-between justify-between items-center mx-auto max-w-screen-xl">




          <Link to="/">
            <img src="/logoblack.png" className="h-12 w-18" />
          </Link>




          <div class="flex items-center  lg:order-2">
            {/* <ThemeProvider/> */}
            

            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={menuOpen ? "true" : "false"}
              onClick={toggleMenu} >
              <span class="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg
                className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              ><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div
            className={`${menuOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >

            <ul class="flex flex-col mt-4  font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
              <li>
                <Link onClick={toggleCloseMenu} to="/" class="block py-2 pr-4 pl-3 text-white lg:border-0  border-b dark:hover:text-white  hover:bg-gray-50   hover:text-black lg:hover:text-white lg:hover:bg-transparent lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white" aria-current="page">{t('Home')}</Link>
              </li>
              <li>
                <Link onClick={toggleCloseMenu} to="cricket-schedule" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-black lg:hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{t('Schedule')}</Link>
              </li>
              <li>
                <Link onClick={toggleCloseMenu} to="cricket-series" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-black lg:hover:text-white  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{t('Series')}</Link>
              </li>
              <li>
                <Link onClick={toggleCloseMenu} to="cricket-teams" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-black lg:hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{t('Teams')}</Link>
              </li>
              <li>
                <Link onClick={toggleCloseMenu} to="cricket-players" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-black lg:hover:text-white  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{t("Players")}</Link>
              </li>
              <li>
                <div
                  onMouseEnter={showDropdown1}
                  onMouseLeave={hideDropdown1}
                  className="relative inline-block w-full"
                >
                  <Link
                    onClick={toggleCloseMenu}

                    className=" items-center  gap-2 flex py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-black lg:hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {t("Media")} <FaAngleDown className='hidden mt-1 md:block' />
                  </Link>
                  {isDropdownVisible1 && (
                    <div className="absolute  w-40 top-full text-sm left-0  bg-white dark:bg-gray-700 dark:border-none border border-gray-200 shadow-lg py-2 z-10">
                      <Link
                        onClick={toggleCloseMenu}

                        to="cricket-news"
                        className="block  px-4 py-2  text-black dark:text-white dark:hover:text-gray-800 hover:bg-gray-100"
                      >
                        {t("News")}
                      </Link>
                      <Link
                        to="cricket-videos"
                        onClick={toggleCloseMenu}

                        className="block px-4 py-2 text-black dark:text-white dark:hover:text-gray-800 hover:bg-gray-100"
                      >
                        {t("Videos")}
                      </Link>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <div
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  className="relative inline-block w-full"
                >
                  <Link
                    onClick={toggleCloseMenu}

                    className=" items-center gap-2 flex py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-black lg:hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {t("Ranking")} <FaAngleDown className='hidden mt-1 md:block' />
                  </Link>
                  {isDropdownVisible && (
                    <div className="absolute w-40 top-full text-sm left-0 bg-white dark:bg-gray-700 border dark:border-none border-gray-200 shadow-lg py-2 z-10">
                      <Link
                        onClick={toggleCloseMenu}

                        to="cricket-rankings"
                        className="block  px-4 py-2 text-black dark:text-white dark:hover:text-gray-800 hover:bg-gray-100"
                      >
                        {t("Men Ranking")}
                      </Link>
                      <Link
                        onClick={toggleCloseMenu}

                        to="cricket-rankings"
                        className="block px-4 py-2 text-black dark:text-white dark:hover:text-gray-800 hover:bg-gray-100"
                      >
                        {t("Women Ranking")}
                      </Link>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <Link onClick={toggleCloseMenu} to="polls" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 hover:text-black lg:hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{t("Polls")}</Link>
              </li>
            </ul>

          </div>



        </div>
      </nav>
    </header></div>
  )
}

export default Header