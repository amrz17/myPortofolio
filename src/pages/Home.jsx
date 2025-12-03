import Nav from "../components/Nav";
import Text from "../components/Text"
import Footer from "../components/Footer";
import { arrowDown, arrowRight2, externalLink, gitHub } from "../assets/Icons";
import { eCommerce, aMer, desktop, vehicleMatching, monitoringMachines } from "../assets/Images";
import { Link, ScrollRestoration } from "react-router-dom";
import { Reveal } from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <section
        id="home"
        className="bg-gray-800 flex justify-center flex-col text-white font-spaceMono 
        h-100 items-center md:h-screen"
      >
        <div className="flex flex-col items-center gap-10  md:gap-16 ">
          <img
            src={aMer}
            alt="aMer"
            width={180}
            height={30}
            className="md:w-80 rounded-full ring-4 ring-gray-300 hover:ring-white"
          />
          <div>
            <Reveal>
              <p className="text-3xl md:text-4xl">Hi, I&apos;m</p>
            </Reveal>
            <Reveal>
              <strong className="text-4xl md:text-6xl">Muhammad aMer</strong>
              <Text />
            </Reveal>
          </div>
        </div>
        <a
          href="#project"
          className="text-gray-100 flex flex-row justify-start mt-16 gap-2 underline hover:underline-offset-4 decoration-white"
        >
          <Reveal>
            <img
              src={arrowDown}
              alt="arrow-down"
              width={23}
              height={23}
              className=""
            />
          </Reveal>
          <Reveal>
            <p className="text-base">Featured Work</p>
          </Reveal>
        </a>
      </section>
      <section
        id="project"
        className="h-150 md:h-screen bg-deepBlue font-spaceMono text-white font-bold"
      >
        <h1 className="text-gray-100 pt-20 pb-4 md:max-xl:pt-24 2xl:pt-20 xl:pb-10 md:pb-20 pl-5 xl:pl-10 text-4xl md:text-6xl">
          Projects
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col justify-center items-center md:mb-7 xl:mb-0">
            <Reveal>
              <img
                src={vehicleMatching}
                alt="Profil Desa"
                width={360}
                className="mb-2 md:w-3/4 mx-auto"
              />
            </Reveal>
            <div className="text-gray-200 w-3/4 text-left">
              <Reveal>
                <h2 className="text-2xl xl:text-4xl">
                  Vehicle Inspection
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-base xl:text-xl ">
                    A system that combines license plate detection using OCR and vehicle image matching using YOLOv8 and ResNet50 to automatically verify vehicle identity using computer vision
                </p>
              </Reveal>
            </div>
            <div className="w-3/4 mt-2 flex justify-center mr-4 gap-4 underline hover:underline-offset-4 decoration-white">
              <Link to="https://www.sekarwangikrw.com" target="_blank">
                <div>
                  <Reveal>
                    <img
                      src={externalLink}
                      alt="external link"
                      width={25}
                      className="xl:w-10 text-white"
                    />
                  </Reveal>
                </div>
              </Link>
              <Link
                to="https://github.com/amrz17/Profile-Sekarwangi-Krw"
                target="_blank"
              >
                <Reveal>
                  <img
                    src={gitHub}
                    alt="github link"
                    width={25}
                    className="xl:w-10"
                  />
                </Reveal>
              </Link>
            </div>
          </div>
          <div className="w-full text-gray-200 md:flex flex-col justify-center items-center hidden">
            <Reveal>
              <img
                src={monitoringMachines}
                alt="e-commerce"
                width={360}
                className="mb-2 md:w-3/4 mx-auto"
              />
            </Reveal>
            <div className="w-3/4 text-left">
              <Reveal>
                <h2 className="text-2xl xl:text-4xl">
                  Monitoring Machine Counter"
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-base xl:text-xl ">
                  It is a machine counter monitoring system that uses limit switch sensors and digital dashboards to visualize data, track production quantities, and detect potential anomalies
                </p>
              </Reveal>
            </div>

            <div className="w-3/4 mt-2 flex justify-center items-center mr-4 gap-4 underline hover:underline-offset-4 decoration-white">
              <Link
                to="https://clothing-store-three.vercel.app/"
                target="_blank"
              >
                <div>
                  <Reveal>
                    <img
                      src={externalLink}
                      alt="external link"
                      width={25}
                      className="xl:w-10 text-white"
                    />
                  </Reveal>
                </div>
              </Link>
              <Link
                to="https://github.com/amrz17/chloting-strore"
                target="_blank"
              >
                <div className="w-3/4 flex justify-end mr-4 gap-4 underline hover:underline-offset-4 decoration-white">
                  <Reveal>
                    <img src={gitHub} alt="" width={25} className="xl:w-10" />
                  </Reveal>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/projects">
          <div className="flex flex-row gap-2  md:gap-4 pl-6 xl:pl-10 mt-8  md:mt-20 xl:mt-6 text-base md:text-3xl xl:text-4xl underline hover:underline-offset-8 decoration-white">
            <Reveal>
              <p className="text-gray-100">More Project</p>
            </Reveal>
            <Reveal>
              <img
                src={arrowRight2}
                width={23}
                alt="arrow-right-project-page"
                className="md:w-8 bg-white"
              />
            </Reveal>
          </div>
        </Link>
        <div className="flex justify-center ">
          <div className="underline hover:underline-offset-2 decoration-white">
            <a
              href="#aboutMe"
              className="flex flex-row justify-start mt-16 xl:mt-6 md:mt-28 lg:mt-10 gap-2"
            >
              <Reveal>
                <img
                  src={arrowDown}
                  alt="arrow-down"
                  width={23}
                  height={23}
                  className="md:w-8"
                />
              </Reveal>
              <Reveal>
                <p className="text-base">Get To Know Me</p>
              </Reveal>
            </a>
          </div>
        </div>
      </section>
      <section
        id="aboutMe"
        className="h-full md:h-screen flex font-spaceMono 2xl:mb-0 xl:mb-[28rem] lg:mb-72 md:mb-36"
      >
        <div
          className="py-24 pl-2 xl:pl-6 md:py-20 lg:py-20
          2xl:py-28"
        >
          <Reveal>
            <h2 className="underline">
              A Little More <span className="text-2xl">About Me :</span>
            </h2>
          </Reveal>
          <div
            className="font-extrabold text-4xl md:text-6xl 
          xl:text-7xl mt-2 xl:mt-6"
          >
            <Reveal>Halo,Apa Kabar?</Reveal>{" "}
            <Reveal>
              I&apos;m
              <strong className="text-5xl md:text-8xl xl:text-8xl">
                {" "}
                aMer
              </strong>{" "}
            </Reveal>
            <Reveal>a Software Engineer who can work with</Reveal>
            <Reveal>
              <strong className="md:text-7xl xl:text-8xl"> React</strong> &
              <strong className="md:text-7xl xl:text-8xl"> Laravel</strong>,
              i&apos;m from
            </Reveal>
            <Reveal>
              <strong className="text-5xl md:text-7xl xl:text-8xl">
                INDONESIA.
              </strong>
            </Reveal>
          </div>
          <div className="font-extrabold text-4xl md:text-6xl xl:text-7xl mt-4 md:mt-0 xl:mt-10">
            <Reveal>I&apos;m computer science graduate, my skill</Reveal>
            <Reveal>is STRONG in Full Stack Developer, </Reveal>
            <Reveal>
              Ai, IoT and I like to
              <strong className="md:text-7xl xl:text-8xl"> LEARN</strong> new
              <strong className="md:text-7xl xl:text-8xl"> THING</strong>.
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
