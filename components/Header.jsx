import { useState, useEffect } from "react";
import Link from "next/link";

import { DocumentDownloadIcon, MenuIcon } from "@heroicons/react/solid";
import NavLink from "./NavLink";
import Drawer from "./Drawer";
import ContactForm from "./ContactForm";

function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [showAboutDrawer, setShowAboutDrawer] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPos(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed py-5 w-full z-30 bg-gray-900 ${
        scrollPos > 0 ? "bg-opacity-80" : "bg-opacity-40"
      } duration-150 shadow-xl`}
    >
      <div className="flex container mx-auto px-5 items-center justify-between text-shadow-lg">
        <Link className="group" href="/" passHref={true}>
          <a className="hover:animate-bounce text-4xl sm:text-5xl font-bold tracking-widest font-audiowide">
            <span className="text-blue-500">L</span>
            <span className="text-indigo-500">N</span>
            <span className="text-purple-500">Đ</span>
            <span className="text-pink-500">P</span>
          </a>
        </Link>
        <nav className="flex items-center space-x-5 lg:space-x-8">
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button
            onClick={(e) => setShowNavDrawer(true)}
            className="block lg:hidden font-bold font-orbitron uppercase hover:text-purple-500 duration-150"
          >
            <h3>Menu</h3>
          </button>
          <MenuIcon
            onClick={(e) => setShowAboutDrawer(true)}
            className="h-10 cursor-pointer hover:text-purple-500 duration-150"
          />
        </nav>
      </div>
      {showNavDrawer && (
        <Drawer onClose={(e) => setShowNavDrawer(false)}>
          <nav className="flex flex-col flex-wrap space-y-7 max-w-max">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </Drawer>
      )}
      {showAboutDrawer && (
        <Drawer onClose={(e) => setShowAboutDrawer(false)}>
          <div className="relative w-full h-60 lg:h-96">
            <img className="object-cover w-full h-full" src="/me.jpg" alt="" />
          </div>
          <h3 className="mt-7 font-orbitron text-center">Leon N. Dela Pena</h3>
          <a
            href="https://drive.google.com/file/d/1NOeTpQu0T4bGYKeedWaOKH-Nn4Nd4pUx/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group my-7 w-full bg-purple-500 hover:bg-indigo-700 py-5 text-2xl font-bold uppercase text-shadow-xl flex items-center justify-center space-x-2 relative duration-200 font-orbitron"
          >
            <DocumentDownloadIcon className="h-10" />
            <span>Download CV</span>
          </a>
          <ContactForm />
        </Drawer>
      )}
    </header>
  );
}

export default Header;
