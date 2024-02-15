import { ExternalLink } from "lucide-react";
import { arrowDown, arrowRight2, favicon, gitHub } from "../assets/Icons";
import { eCommerce, aMer, feChallenge } from "../assets/Images";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-gray-800 flex justify-center flex-col text-white font-spaceMono 
        h-100 items-center md:h-screen "
      >
        <div className="flex flex-col items-center gap-10  md:gap-16 ">
          <img
            src={aMer}
            alt="aMer"
            width={180}
            height={30}
            className="md:w-80 rounded-full ring-4 ring-gray-300 hover:ring-white"
          />
          <p className="mt-2">
            <span className="text-3xl md:text-4xl">Hi, I&apos;m</span> <br />
            <strong className="text-4xl md:text-6xl">Muhammad aMer</strong>
            <br />{" "}
            <span className="text-xl md:text-2xl">a Full Stack Developer </span>
          </p>
        </div>
        <a
          href="#project"
          className="text-gray-100 flex flex-row justify-start mt-16 gap-2 underline hover:underline-offset-4 decoration-white"
        >
          <img
            src={arrowDown}
            alt="arrow-down"
            width={23}
            height={23}
            className=""
          />
          <p className="text-base">Featured Work</p>
        </a>
      </section>
      <section
        id="project"
        className="h-150 md:h-screen bg-deepBlue font-spaceMono text-white font-bold "
      >
        <h1 className="text-gray-100 pt-28 pb-12 md:max-xl:pt-24 2xl:pt-20 xl:pb-10 md:pb-20 pl-5 xl:pl-10 text-4xl md:text-6xl">
          Project
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={feChallenge}
              alt="e-commerce"
              width={360}
              className="mb-2 md:w-3/4 "
            />
            <div className="text-gray-200 w-3/4 text-left">
              <h2 className="text-2xl xl:text-4xl">Frontend Challenge</h2>
              <p className="text-base xl:text-xl ">
                This is chellenge Front End from frontenmentor.io who i solved
              </p>
            </div>
            <div className="w-3/4 mt-2 flex justify-center mr-4 gap-4 underline hover:underline-offset-4 decoration-white">
              <Link to="https://www.frontendmentor.io/profile/amrz17">
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
          <div className="w-full text-gray-200 md:flex flex-col justify-center items-center hidden">
            <img
              src={eCommerce}
              alt="e-commerce"
              width={360}
              className="mb-2 md:w-3/4"
            />
            <div className="w-3/4 text-left">
              <h2 className="text-2xl xl:text-4xl">E-commerce</h2>
              <p className="text-base xl:text-xl ">
                This is chellenge Front End from frontenmentor.io who i solved
              </p>
            </div>

            <div className="w-3/4 mt-2 flex justify-center mr-4 gap-4 underline hover:underline-offset-4 decoration-white">
              <Link to="https://clothing-store-three.vercel.app/">
                <div className="p-4">
                  <ExternalLink />
                </div>
              </Link>
              <Link to="https://github.com/amrz17/chloting-strore">
                <div className="w-3/4 mt-2 flex justify-end mr-4 gap-4 underline hover:underline-offset-4 decoration-white">
                  <img src={gitHub} alt="" width={25} className="xl:w-10" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/projects">
          <div className="flex flex-row gap-2  md:gap-4 pl-6 xl:pl-10 mt-8  md:mt-20 xl:mt-6 text-base md:text-3xl xl:text-4xl underline hover:underline-offset-8 decoration-white">
            <p className="text-gray-100">More Project</p>
            <img
              src={arrowRight2}
              width={23}
              alt="arrow-right-project-page"
              className="md:w-8 bg-white"
            />
          </div>
        </Link>
        <div className="flex justify-center ">
          <div className="underline hover:underline-offset-2 decoration-white">
            <a
              href="#aboutMe"
              className="flex flex-row justify-start mt-16 xl:mt-8 md:mt-28 lg:mt-10 gap-2"
            >
              <img
                src={arrowDown}
                alt="arrow-down"
                width={23}
                height={23}
                className="md:w-8"
              />
              <p className="text-base">Get To Know Me</p>
            </a>
          </div>
        </div>
      </section>
      <section
        id="aboutMe"
        className="h-full md:h-screen flex font-spaceMono mb-12"
      >
        <div
          className="py-24 pl-2 xl:pl-6 md:py-20 lg:py-20 xl:py-32
          2xl:py-28"
        >
          <h2 className="underline">
            A Little More <span className="text-2xl">About Me :</span>
          </h2>
          <p
            className="font-extrabold text-4xl md:text-6xl 
          xl:text-7xl mt-2 xl:mt-6"
          >
            Halo,Apa Kabar? <br /> I&apos;m
            <strong className="text-5xl md:text-8xl xl:text-8xl">aMer</strong>a
            Full Stack Developer who can work with
            <strong className="md:text-7xl xl:text-8xl">React</strong> &
            <strong className="md:text-7xl xl:text-8xl">Laravel</strong>,
            i&apos;m from
            <strong className="text-5xl md:text-7xl xl:text-8xl">
              INDONESIA
            </strong>
            .
          </p>
          <p className="font-extrabold text-4xl md:text-6xl xl:text-7xl mt-4 md:mt-0 xl:mt-10">
            i&apos;m from still in College, my skill is STRONG in Front End and
            I like to
            <strong className="md:text-7xl xl:text-8xl"> LEARN</strong> new
            <strong className="md:text-7xl xl:text-8xl">THING</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
