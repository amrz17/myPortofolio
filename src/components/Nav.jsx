import { Link } from "react-router-dom";
import { bars } from "../assets/Icons";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="bg-gray-800 h-16 py-4 px-8 xl:h-20 w-full absolute z-10 xl:py-8 xl:px-20 sm:px-10">
      <nav className="flex justify-between items-center w-full ">
        <div className="">
          <h1 className="text-white text-2xl font-bold ">
            {" "}
            &lt;&#47; aMer &gt;{" "}
          </h1>
        </div>
        <div>
          <a href="/" onClick={(e) => {e.preventDefault(); setOpenMenu ((prev) => !prev)}}>
            <img src={bars} alt="Icon Menu" width={20} className="sm:hidden" />
          </a>
        </div>
        <div className="text-white text-lg gap-12 hidden sm:flex sm:gap-8">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/Projects" className="">
            Projects
          </Link>
          <Link to="" className="">
            Blog
          </Link>
          <Link to="/About" className="">
            About
          </Link>
          <Link to="/Contact" className="">
            Contact
          </Link>
        </div>
      </nav>

      {openMenu && <SideBar />}
    </header>
  );
}
