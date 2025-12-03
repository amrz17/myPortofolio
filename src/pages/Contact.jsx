import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Download, Mail } from "lucide-react";
import { Link, ScrollRestoration } from "react-router-dom";
import { aMer } from "../assets/Images";
import { Reveal } from "../components/Reveal";

export default function Contact() {
  return (
    <>
      <Nav />
      <div
        className="bg-deepBlue flex flex-col justify-center items-center h-screen 
       font-spaceMono text-white gap-4"
      >
        <img
          src={aMer}
          alt="aMer"
          width={180}
          height={30}
          className="md:w-80 rounded-full ring-4 ring-gray-300 hover:ring-white"
        />
        <Reveal>
          <h1 className="font-bold text-4xl">Contact Me</h1>
        </Reveal>
        <Reveal>
          <p className="text-center text-base lg:text-xl">
            If you are looking to hire me <br /> i&apos;m currently available
            for fulltime and freelance work
          </p>
        </Reveal>
        <div className="flex gap-8">
          <Link
            to="https://drive.google.com/file/d/17_mwPZCX1_S4qSiImsmwVOWe4TdxFFf4/view?usp=sharing"
            target="_blank"
          >
            <Reveal>
              <button
                className="flex gap-2 items-center bg-white text-black p-2 lg:p-4
                hover:bg-deepBlue hover:border hover:border-white 
                hover:text-white lg:text-lg"
              >
                <Download /> My CV
              </button>
            </Reveal>
          </Link>
          <a href="mailto:muhammad.amer45@gmail.com">
            <Reveal>
              <button
                className="flex gap-2 items-center bg-white text-black p-2 lg:p-4
                hover:bg-deepBlue hover:border hover:border-white 
                hover:text-white lg:text-lg"
              >
                <Mail /> Hire me
              </button>
            </Reveal>
          </a>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
