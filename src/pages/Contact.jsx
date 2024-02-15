import { Download, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div
      className="bg-deepBlue flex flex-col justify-center items-center h-screen 
       font-spaceMono text-white gap-4"
    >
      <h1 className="font-bold text-4xl">Contact Me</h1>
      <p className="text-center text-base lg:text-xl">
        If you are looking to hire me <br /> i&apos;m currently available for
        fulltime and freelance work
      </p>
      <div className="flex gap-8">
        <button
          className="flex gap-2 items-center bg-white text-black p-2 lg:p-4
        hover:bg-deepBlue hover:border hover:border-white 
        hover:text-white lg:text-lg"
        >
          <Download /> My CV
        </button>
        <button
          className="flex gap-2 items-center bg-white text-black p-2 lg:p-4
        hover:bg-deepBlue hover:border hover:border-white 
        hover:text-white lg:text-lg"
        >
          <Mail /> Hire me
        </button>
      </div>
    </div>
  );
}
