import { Link } from "react-router-dom";
import { bars } from "../assets/Icons";

export const Nav = () => {
  return (
    <header className="bg-gray-800 h-14 py-3 px-6 xl:h-20 w-full absolute z-10 xl:py-8 xl:px-12" >
      <nav className="flex justify-between items-center w-full">
        <div className="">
          <h1 className="text-white text-xl font-bold"> &lt;&#47; aMer &gt; </h1>
        </div>
        <div>
          <img src={bars} alt="Icon Menu" width={20} className=""/>
        </div>
        <div className="text-white flex gap-8 hidden">
          <Link to="/" className="">Home</Link>
          <Link to="/Projects" className="">Projects</Link>
          <Link to="" className="">Blog</Link>
          <Link to="/About" className="">About</Link>
          <Link to="/Contact" className="">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
