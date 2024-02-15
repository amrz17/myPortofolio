import { Link } from "react-router-dom";
import { social } from "../constants";

export default function Footer() {
  return (
    <>
      <section className="text-white bg-deepBlue h-full font-spaceMono ">
        <hr className="text-white w-full" />
        <div
          className="xl:w-full flex flex-col-reverse lg:flex-row p-3 
          lg:py-6 lg:px-12 justify-between gap-2"
        >
          <div>
            <p className="flex justify-center pb-4 text-center">
              Create By Muhammad Amer <br className="flex lg:hidden" />
              &copy;Copyright 2024
            </p>
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-row gap-4">
              {social.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>
                    <img
                      src={item.icon}
                      alt="social media"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
