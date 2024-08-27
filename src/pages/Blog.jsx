import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import { Reveal } from "../components/Reveal";

export default function Blog() {
  return (
    <>
      <Nav />
      <div className="bg-deepBlue flex flex-col justify-center items-center h-screen">
        <Reveal>
          <h1 className="font-spaceMono font-bold text-white text-2xl lg:text-6xl">
            Coming <span className="text-green-400">s00n</span>
          </h1>
        </Reveal>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
