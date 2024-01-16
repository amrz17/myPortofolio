import { Link } from "react-router-dom";
import { navLink } from "../constants";
import { bars } from "../assets/Icons";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-gray-800 h-16 py-5 px-8 xl:h-20 w-full xl:py-8 xl:px-20 sm:px-10 sticky top-0 z-10">
      <nav className="flex justify-between items-center w-full">
        <div className="">
          <Link to="/" className="text-white md:text-3xl text-2xl font-bold ">
            &lt; <span className="font-spaceMono ">aMer</span> &#47;&gt;
          </Link>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenMenu((prev) => !prev);
            }}
          >
            <img src={bars} alt="Icon Menu" width={20} className=" md:hidden" />
          </button>
        </div>
        <ul className="text-white md:text-xl text-lg gap-12 hidden md:flex sm:gap-8 p-1">
          {navLink.map((item) => (
            <li
              className="active:underline hover:underline underline-offset-8 decoration-4"
              key={item.label}
            >
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="mt-2" />
      {openMenu && <SideBar />}
    </header>
  );
};
