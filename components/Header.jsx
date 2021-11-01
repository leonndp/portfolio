import Link from 'next/link'

import {
    MenuIcon
  } from "@heroicons/react/solid";
import NavLink from "./NavLink";

function Header() {
    return (
        <header className="fixed py-5 w-full z-30 bg-gray-900 bg-opacity-30 shadow-xl">
            <div className="flex container mx-auto px-5 items-center justify-between text-shadow-lg">
                <Link className="group" href="/" passHref={true}>
                    <a className="hover:animate-bounce text-5xl font-bold tracking-widest font-audiowide">
                        <span className="text-blue-500">L</span>
                        <span className="text-indigo-500">N</span>
                        <span className="text-purple-500">Đ</span>
                        <span className="text-pink-500">P</span>
                    </a>
                </Link>
                <nav className="flex items-center space-x-8">
                    <div className="hidden lg:flex items-center space-x-8">
                        <NavLink>About</NavLink>
                        <NavLink>Skills</NavLink>
                        <NavLink>Portfolio</NavLink>
                        <NavLink>Experience</NavLink>
                        <NavLink>Contact</NavLink>
                    </div>
                    <h1 className="text-2xl block lg:hidden font-bold">MENU</h1>
                    <MenuIcon className="h-10 cursor-pointer hover:text-purple-500 duration-150" />
                </nav>
            </div>
        </header>
    )
}

export default Header
