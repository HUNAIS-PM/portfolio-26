import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose, MdWork } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { HiMenuAlt2, HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";
import Flex from "../Flex";
import { navBarList, bottomNavLinks, hamburgerLinks } from "../../../constants/index";

const logoLight = "/smallLogo.ico";

const Header = () => {
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative flex items-center justify-between">
        <Link to="/">
          <div>
            <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          </div>
        </Link>
          <div>
            <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) =>
                    title === "Hire Me" ? (
                      <NavLink
                        key={_id}
                        className="flex font-normal hover:font-bold justify-center items-center px-4 py-2 text-base bg-white text-black hover:bg-gray-100 hover:text-black whitespace-nowrap border-2 border-black"
                        to={link}
                        state={{ data: location.pathname.split("/")[1] }}
                      >
                        <li>{title}</li>
                      </NavLink>
                    ) : (
                      <NavLink
                        key={_id}
                        className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        to={link}
                        state={{ data: location.pathname.split("/")[1] }}
                      >
                        <li>{title}</li>
                      </NavLink>
                    )
                  )}
                </>
              </motion.ul>
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block lg:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {hamburgerLinks.map((item) => (
                        <li
                          className={`${
                            item.title === "Hire Me"
                              ? "bg-white text-black px-4 py-2 whitespace-nowrap border-2 border-black"
                              : ""
                          } font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0`}
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </nav>
      {/* </Flex> */}
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg lg:hidden z-40">
        <Flex className="flex justify-around items-center h-16">
          {bottomNavLinks.map((item) => (
            <NavLink
              key={item._id}
              to={item.link}
              state={{ data: location.pathname.split("/")[1] }}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center text-xs font-normal text-[#767676] hover:text-[#262626] transition-colors duration-200 ${
                  isActive ? "text-[#262626] font-bold" : ""
                }`
              }
            >
              {/* You can add icons here based on item.title */}
              <span className="text-lg">
                {item.title === "Home" && <FaHome />}
                {item.title === "Works" && <MdWork />}
                {item.title === "Hire Me" && <HiOutlineDocumentText />}
              </span>
              {item.title}
            </NavLink>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default Header;