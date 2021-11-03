import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { XIcon } from "@heroicons/react/solid";

function Drawer({ children, onClose }) {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    handleOpen();

    return () => {
      setShowDrawer(false);
    };
  }, []);

  const handleOpen = (e) => {
    document.body.style.overflow = "hidden";
    setShowDrawer(true);
  };

  const handleExit = async (e) => {
    setShowDrawer(false);
    document.body.style.overflow = "auto";
    onClose();
  };

  return (
    <aside>
      <div
        onClick={(e) => handleExit()}
        className={`z-20 fixed bg-black ${
          showDrawer ? "bg-opacity-80" : "bg-opacity-0"
        } top-0 left-0 h-screen w-screen duration-300`}
      ></div>
      <div
        className={`z-30 fixed top-0 ${
          showDrawer ? "right-0" : "-right-1/2"
        } bg-gray-800 h-screen w-96 duration-300`}
      >
        <button
          onClick={(e) => handleExit()}
          className="rounded-sm bg-purple-500 p-3 absolute top-10 left-0 -translate-x-full cursor-pointer z-50 group hover:bg-purple-700 duration-150"
        >
          <XIcon className="h-7 text-gray-800" />
        </button>
        <div className="relative w-full h-full p-8 overflow-y-scroll">
          {children}
        </div>
      </div>
    </aside>
  );
}

export default Drawer;
