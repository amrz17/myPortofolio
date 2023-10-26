import { arrowDown, arrowRight, bars, gitHub } from "../assets/Icons";
import { eCommerce, aMer } from "../assets/Images";
// import { social } from "../constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="bg-gray-800 flex flex-col pt-16 text-white text-lg font-spaceMono h-100 items-center">
        <div className="flex flex-col items-center gap-10">
          <img
            src={aMer}
            alt="aMer"
            width={180}
            height={30}
            className="rounded-full ring-4 ring-gray-300 hover:ring-white"
          />
          {/* <ul className="flex flex-row gap-4">
          {social.map((item) => (
            <li key={item.label}>
              <a to={item.to}>
                <img
                  src={item.icon}
                  alt="social media"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          ))}
        </ul> */}
          <p className="text-2xl mt-2">
            <span className="text-3xl">Hi, I'm</span> <br />
            <strong className="text-4xl">Muhammad aMer</strong>
            <br /> Full Stack Developer <br />
            {/* <span className="text-2xl">
              from <strong className="text-3xl">Indonesia.</strong>
            </span> */}
          </p>
        </div>
        <a href="#project" className="flex flex-row justify-start mt-16 gap-2">
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
      <section id="project"
        className="h-150 bg-deepBlue font-spaceMono text-white font-bold rounded-b-large">
        <h1 className="pt-32 pb-12 pl-5 text-4xl ">Project</h1>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="w-80 h-1/2  ">
            <img
              src={eCommerce}
              alt="e-commerce"
              width={320}
              className="mb-2"
            />
            <h2 className="text-2xl ">E-commerce</h2>
            <p className="text-base">
              This is chellenge Front End from frontenmentor.io who i solved
            </p>
            <div className="mt-2 flex justify-end mr-4 gap-4">
              <h3 className="text-sm">Code is here</h3>
              <img src={arrowRight} alt="" width={20} />
              <img src={gitHub} alt="" width={25} className="" />
            </div>
            <Link to="/projects" className="flex flex-row gap-2 text-base mt-8">
              <p>More Project</p>
              <img src={arrowRight} alt="" />
            </Link>
          </div>
          <a href="#aboutMe" className="flex flex-row justify-start mt-16 gap-2">
          <img
            src={arrowDown}
            alt="arrow-down"
            width={23}
            height={23}
            className=""
          />
          <p className="text-base">Get To Know Me</p>
        </a>
        </div>
      </section>
      <section id="aboutMe" className="h-screen flex font-spaceMono">
        <div className="pt-20 pl-2">
          <h2 className="underline">A Little More About Me</h2>
          <p className="font-extrabold text-4xl mt-2">Halo,Apa Kabar? <br /> I'm <strong className="text-5xl">aMer</strong> a Full Stack Developer who can work with React & Laravel, i'm from <strong className="text-5xl">INDONESIA</strong>.</p>
          <p className="font-extrabold text-4xl mt-4"> I'm still in College, my skill is STRONG in Front End and I like to LEARN new THING. </p>
            <Link to="/about" className="flex flex-row gap-2 text-base mt-8">
              <p className="underline">LEARN MORE</p>
              <img src={arrowRight} alt="" className="bg-gray-800"/>
            </Link>
        </div>
        
      </section>
    </>
  );
}
