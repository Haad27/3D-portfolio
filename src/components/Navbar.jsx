import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false); // Optional: Add if used
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-14 h-14 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Haad <span className="ml-2">| Software Developer</span>
          </p>
        </Link>
        {/* this part is for the display of about work contact in the above nav bar */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            // this part makes sure the colot changes as well hover over it 
            <li key={link.id} className={`${active == link.title ? "text-white " : "text-secondary"} hover:text-white text-[18px]font-medium cursor pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* this div is fro the purpose so when the screen size is call we  have the about work contavt go into nav bar possition */}
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden " : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
            {/* // coping the same ul  */}
            {/* this part is for the display of about work contact in the above nav bar  in the mobile view when you opne the menu */}

            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                // this part makes sure the colot changes as well hover over it 
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};


export default Navbar;