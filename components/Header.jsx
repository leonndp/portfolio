import {
    MenuIcon
  } from "@heroicons/react/solid";
import NavLink from "./NavLink";

function Header() {
    return (
        <header className="fixed py-5 w-full z-30 bg-gray-900 bg-opacity-50">
            <div className="flex container mx-auto px-5 text-white items-center justify-between">
                <h1 className="text-4xl font-bold">LeonNDP</h1>
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
