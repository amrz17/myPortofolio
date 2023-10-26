import { navLink}  from "../constants"
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="flex absolute top-16 right-0 bg-gray-400 w-3/4 h-screen py-10 font-spaceMono ">
        <ul className="flex flex-col gap-8 px-4 w-full text-gray-800 font-bold text-4xl ">
            {navLink.map((item) => (
              <li className="" key={item.label}>
                <Link to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
    </div>
  )
}


