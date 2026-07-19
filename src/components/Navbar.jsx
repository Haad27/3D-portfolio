import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { haad,logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false); // Optional: Add if used
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}
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
        </div>
{/* Mobile Menu Toggle */}
<div className="sm:hidden flex items-center">
  <button
    className="p-2"
    onClick={() => setToggle(!toggle)}
    aria-label="Toggle menu"
  >
    {toggle ? (
      <img src={close} alt="close menu" className="w-6 h-6" />
    ) : (
      <img src={menu} alt="open menu" className="w-6 h-6" />
    )}
  </button>
</div>
{toggle && (
  <div className="fixed inset-0 bg-[#090d22]/80 backdrop-blur-lg flex flex-col items-center justify-center sm:hidden z-40">
    <ul className="flex flex-col space-y-6 text-center">
      {navLinks.map((link) => (
        <li key={link.id} className="text-white text-xl">
          <a
            href={`#${link.id}`}
            onClick={() => {
              setActive(link.title);
              setToggle(false);
            }}
            className="hover:text-[#915eff]"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
    </nav>
  );
};


export default Navbar;