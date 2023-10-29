import { Link } from "react-router-dom";
import { social, navLink } from "../constants";
import { arrowUp } from "../assets/Icons";

export default function Footer() {
  return (
    <>
      <section className="text-white bg-deepBlue h-full font-spaceMono ">
        <div className=" xl:w-full flex flex-row  gap-10 xl:gap-28 pt-4 xl:pt-8 pl-4 xl:pl-0 justify-center">
          <div className="h-60 pl-4">
            <h2 className="font-bold text-2xl">Explore Site</h2>  
            <ul>
              <li className="text-xl">
              {navLink.map((item) => (
                <li className="underline underline-offset-2" key={item.label}>
                  <Link to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-2">Social</h2>
            <ul className="flex flex-row gap-4"> {social.map((item) => (
              <li key={item.label} >
                <a to={item.to}>
                  <img
                    src={item.icon}
                    alt="social media"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
            ))}
            </ul>
          </div>
          <div>
            <a href="#home" className="" >
              <img 
              src={arrowUp} 
              alt="arrow-up"
              width={40} 
              className="pt-16"/>
              <p className="text-sm font-bold">GO UP</p>
            </a>
          </div>
        </div>
        <p className="flex justify-center pb-4">Create By Muhammad Amer</p>
      </section>
    </>
  )
}
