import { navLink } from "../constants";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside
      className="flex xl:hidden absolute top-16 right-0 bg-gray-100 
      w-full h-screen py-10 font-spaceMono"
    >
      <ul
        className="flex flex-col gap-8 px-4 w-full 
        text-gray-800 font-bold text-4xl"
      >
        {navLink.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.to}
              className={({ isActive }) => {
                return isActive
                  ? "bg-green-400"
                  : "hover:bg-green-400";
              }}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
