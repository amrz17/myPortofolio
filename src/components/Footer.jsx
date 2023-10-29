import { Link } from "react-router-dom";
import { social, navLink } from "../constants";

export default function Footer() {
  return (
    <>
      <section className="text-white bg-deepBlue h-full font-spaceMono ">
        <div className="flex flex-row  gap-10 pt-4">
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

        </div>
      </section>
    </>
  )
}
