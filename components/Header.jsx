import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import ScrollContext from "../contexts/ScrollContext";

import { DocumentDownloadIcon, MenuIcon } from "@heroicons/react/solid";
import NavLink from "./NavLink";
import Drawer from "./Drawer";
import ContactForm from "./ContactForm";
import { attributes, react as LinksContent } from "../content/links.md";

import { Rotate, Zoom } from "react-reveal";

function Header() {
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [showAboutDrawer, setShowAboutDrawer] = useState(false);

  const scrollPosition = useContext(ScrollContext);

  return (
    <header
      className={`fixed py-5 w-full z-30 bg-gray-900 ${
        scrollPosition > 0 ? "bg-opacity-80" : "bg-opacity-40"
      } duration-150 shadow-xl`}
    >
      <div className="flex container mx-auto px-5 items-center justify-between text-shadow-lg">
        <Link className="group" href="/" passHref={true}>
          <a className="hover:animate-Zoom text-4xl sm:text-5xl font-bold tracking-widest font-audiowide">
            <span className="text-blue-500">L</span>
            <span className="text-indigo-500">N</span>
            <span className="text-purple-500">Đ</span>
            <span className="text-pink-500">P</span>
          </a>
        </Link>
        <nav className="flex items-center space-x-5 lg:space-x-8">
          <div className="hidden lg:flex items-center space-x-8">
            <Zoom duration={450} right>
              <NavLink href="#about">About</NavLink>
            </Zoom>
            <Zoom right duration={450} delay={150}>
              <NavLink href="#skills">Skills</NavLink>
            </Zoom>
            <Zoom right duration={450} delay={300}>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </Zoom>
            <Zoom right duration={450} delay={450}>
              <NavLink href="#experience">Experience</NavLink>
            </Zoom>
            <Zoom right duration={450} delay={600}>
              <NavLink href="#contact">Contact</NavLink>
            </Zoom>
          </div>
          <Zoom duration={300}>
            <button
              onClick={(e) => setShowNavDrawer(true)}
              className="block lg:hidden font-bold font-orbitron uppercase hover:text-purple-500 duration-150"
            >
              <h3>Menu</h3>
            </button>
          </Zoom>
          <Rotate duration={300}>
            <MenuIcon
              onClick={(e) => setShowAboutDrawer(true)}
              className="h-10 cursor-pointer hover:text-purple-500 duration-150"
            />
          </Rotate>
        </nav>
      </div>
      {/* Navigation Drawer */}
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
      {/* About Drawer */}
      {showAboutDrawer && (
        <Drawer onClose={(e) => setShowAboutDrawer(false)}>
          <div className="relative w-full h-60 lg:h-96">
            <img className="object-cover w-full h-full" src="/me.jpg" alt="" />
          </div>
          <h3 className="mt-7 font-orbitron text-center">Leon N. Dela Pena</h3>
          <a
            href={attributes.resume}
            target="_blank"
            rel="noreferrer"
            className="group my-7 w-full bg-purple-500 hover:bg-indigo-700 py-5 text-2xl font-bold uppercase text-shadow-xl flex items-center justify-center space-x-2 relative duration-200 font-orbitron"
          >
            <DocumentDownloadIcon className="h-10" />
            <span>Download CV</span>
          </a>
          <ContactForm name="contact-sidebar" />
        </Drawer>
      )}
    </header>
  );
}

export default Header;
