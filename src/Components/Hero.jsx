import { assets } from "../assets/assets";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <div className="md:fixed left-50 top-50  flex flex-col  gap-10 bg-white w-fit md:max-w-100 px-3 h-fit  pt-8 pb-4 items-center justify-center rounded-2xl">
      <div>
        <img src={assets.profilePic} className="w-60 rounded-2xl" />
        <div className="flex flex-col text-center mt-5">
          <p className="text-sm text-gray-400 font-semibold mb-0 -ml-32.5">Hi, I'm</p>
          <h1 className="font-bold text-3xl">Anoop</h1>
        </div>
      </div>
      <div className="text-center">
        <p className="mb-5 text-lg font-semibold">Full Stack Developer</p>
        <p className="text-gray-500 font-semibold">
          I build and deploy full stack web applications ready for real-world use.
        </p>
      </div>
      <div className="flex flex-row gap-3">
        <CiLinkedin className="size-10 text-black hover:bg-gray-200 p-1 cursor-pointer rounded-lg transition" />
        <FaGithub className="size-10 text-black hover:bg-gray-200 p-1 cursor-pointer rounded-lg transition" />
      </div>
    </div>
  );
}

export default Hero;
