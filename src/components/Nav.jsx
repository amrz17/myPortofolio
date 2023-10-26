import { Link } from "react-router-dom";
import { navLink } from "../constants";
import { bars } from "../assets/Icons";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="bg-gray-800 h-16 py-5 px-8 xl:h-20 w-full xl:py-8 xl:px-20 sm:px-10 sticky top-0 z-10">
      <nav className="flex justify-between items-center w-full">
        <div className="">
          <Link to="/home" className="text-white text-2xl font-bold ">
            &lt; <span className="font-spaceMono ">aMer</span> &#47;&gt;
          </Link>
        </div>
        <div>
          <button onClick={(e) => {e.preventDefault(); setOpenMenu ((prev) => !prev)}}>
            <img src={bars} alt="Icon Menu" width={20} className=" sm:hidden" />
          </button>
        </div>
        <ul className="text-white text-lg gap-12 hidden sm:flex sm:gap-8 p-1">
          {navLink.map((item) => (
            <li key={item.label}>
              <Link to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {
      openMenu && <SideBar />
      }

      
    </header>
  );
}

