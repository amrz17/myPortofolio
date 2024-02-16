import { Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { aMer } from "../assets/Images";

export default function Contact() {
  return (
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
      <h1 className="font-bold text-4xl">Contact Me</h1>
      <p className="text-center text-base lg:text-xl">
        If you are looking to hire me <br /> i&apos;m currently available for
        fulltime and freelance work
      </p>
      <div className="flex gap-8">
        <Link to="https://drive.google.com/file/d/1jbQg1QGwg2Y8n3FiXAATYB6lHyjXuYSe/view?usp=sharing">
          <button
            className="flex gap-2 items-center bg-white text-black p-2 lg:p-4
        hover:bg-deepBlue hover:border hover:border-white 
        hover:text-white lg:text-lg"
          >
            <Download /> My CV
          </button>
        </Link>
        <a href="mailto:muhammad.amer45@gmail.com">
          <button
            className="flex gap-2 items-center bg-white text-black p-2 lg:p-4
        hover:bg-deepBlue hover:border hover:border-white 
        hover:text-white lg:text-lg"
          >
            <Mail /> Hire me
          </button>
        </a>
      </div>
    </div>
  );
}
