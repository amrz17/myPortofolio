import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <>
      <Nav />
      <div className="bg-deepBlue flex flex-col pb-8 lg:pb-16">
        <div className="mt-4 ml-4 lg:mt-14 lg:ml-36">
          <h1 className="text-white text-3xl lg:text-6xl font-bold font-spaceMono">
            Projects that i <br /> have
            <span className="text-green-400"> Completed</span>
          </h1>
        </div>
        {projects.map((project) => (
          <ul
            key={project.title}
            className="flex flex-col lg:flex-row gap-y-4 lg:gap-20 mx-2 
            lg:mx-auto mt-6 lg:mt-16  "
          >
            <div key={project.title} className="flex">
              <Link to={project.linkWeb}>
                <img src={project.img} width={500} alt="Personal Projects" />
              </Link>
            </div>
            <div className="flex flex-col lg:mt-8">
              <p className="text-gray-300 text-base font-bold">
                {project.area}
              </p>
              <h2 className="text-white text-2xl font-bold xl:text-5xl mt-2">
                {project.title}
              </h2>
              <p className="text-white text-base xl:text-xl mt-2 xl:mt-4">
                {project.desc}
              </p>

              <div className="w-3/4 mt-2 flex justify-start items-center mr-4 gap-4 underline hover:underline-offset-4 decoration-white">
                <Link to={project.linkWeb}>
                  <ExternalLink
                    alt="frontend.io"
                    size={35}
                    className="text-white xl:w-10"
                  />
                </Link>
                <Link to={project.linkGit}>
                  <img
                    src={project.imgGit}
                    alt="github link"
                    width={25}
                    className="xl:w-10"
                  />
                </Link>
              </div>
            </div>
          </ul>
        ))}
      </div>
      <Footer />
    </>
  );
}
