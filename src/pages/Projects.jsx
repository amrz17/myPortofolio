import { Link } from "react-router-dom";
import { feChallenge } from "../assets/Images";
import { favicon, gitHub } from "../assets/Icons";

export default function Projects() {
  return (
    <div className="bg-deepBlue flex flex-col h-screen ">
      <div className="mt-4 ml-4 lg:mt-14 lg:ml-36">
        <h1 className="text-white text-3xl xl:text-6xl font-bold font-spaceMono">
          Projects that i <br /> have
          <span className="text-green-400">completed</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-20 mx-2 lg:mx-auto mt-6 lg:mt-16">
        <div>
          <img src={feChallenge} width={500} alt="Personal Projects" />
        </div>
        <div className="flex flex-col lg:mt-8">
          <p className="text-gray-300 text-base font-bold">Web Development</p>
          <h2 className="text-white text-2xl font-bold xl:text-5xl mt-2">
            Frontend Challenge
          </h2>
          <p className="text-white text-base xl:text-xl mt-2 xl:mt-4">
            This is chellenge Front End from frontenmentor.io who i solved
          </p>

          <div className="w-3/4 mt-2 flex justify-start mr-4 gap-4 underline hover:underline-offset-4 decoration-white">
            <Link to="https://www.frontendmentor.io/profile/amer48-dev">
              <img
                src={favicon}
                alt="frontend.io"
                width={25}
                className="xl:w-10"
              />
            </Link>
            <Link to="https://github.com/amrz17">
              <img
                src={gitHub}
                alt="github link"
                width={25}
                className="xl:w-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
