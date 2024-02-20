import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div
      className="h-screen flex flex-col-reverse lg:flex-row justify-center items-center 
      font-spaceMono gap-10 lg:gap-0 bg-slate-100"
    >
      <div className="bg-sky-500 p-12 lg:p-20">
        <p className="text-3xl lg:text-5xl font-bold mb-4 text-white">
          PAGE NOT FOUND
        </p>
        <Link to="/">
          <div
            className="flex w-full p-1 lg:p-2 items-center bg-green-400
            text-white text-2xl font-bold gap-12 lg:gap-[7rem]
            hover:text-green-400 hover:bg-white"
          >
            <ArrowLeft size={32} />
            <button>Go Back</button>
          </div>
        </Link>
      </div>

      <hr className="hidden lg:flex bg-black w-72 h-2 rotate-90" />
      <h1
        className="text-6xl xl:text-8xl font-bold text-center
        "
      >
        Error <span className="text-white bg-danger p-2">404</span> <br />
      </h1>
    </div>
  );
}
