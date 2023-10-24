import { Link } from "react-router-dom"


export const SideBar = () => {
  return (
    <div className="flex absolute right-0 bg-gray-800 w-1/2 h-screen py-10">
        <ul className="flex flex-col gap-8 px-6 text-white font-bold text-lg ">
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
        </ul>
    </div>
  )
}
