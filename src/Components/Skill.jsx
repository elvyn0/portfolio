import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiRender } from "react-icons/si";
import { LiaGit } from "react-icons/lia";
import { assets } from "../assets/assets";

function Skill() {
  return (
    <div className="text-white flex flex-col gap-5">
      <h1 className="text-8xl font-bold text-white">
        Tech <span className="text-neutral-600">Stack</span>
      </h1>
      {/* Frontend */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-5">Frontend:</p>
        <div className="flex flex-row gap-10 text-center items-center">
          <div>
            <FaReact className="size-18 text-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">React</p>
          </div>
          <div>
            <IoLogoJavascript className="size-18 text-yellow-300 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">JavaScript</p>
          </div>
          <div>
            <FaHtml5 className="size-18 text-orange-500 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">HTML</p>
          </div>
          <div>
            <FaCss3Alt className="size-18 text-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">CSS</p>
          </div>
          <div>
            <RiTailwindCssFill className="size-18 text-blue-200 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">Tailwind Css</p>
          </div>
        </div>
      </div>
      {/* Backend */}

      <div>
        <p className="font-semibold text-gray-300 text-lg mb-2">Backend:</p>
        <div className="flex flex-row gap-10">
          <div>
            <DiNodejs className="size-18 text-green-400 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm">Node js</p>
          </div>
          <div>
            <SiExpress className="size-18 text-yellow-300 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm">Express js</p>
          </div>
        </div>
      </div>
      {/* Database */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-5">Database:</p>
        <div className="flex items-center">
          <SiMongodb className="size-18 text-green-600 hover:scale-110 transition-all duration-300 ease-in-out" />
          <p className="font-semibold text-sm -ml-2">MongoDB</p>
        </div>
      </div>
      {/* Familiar With */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-5">Familiar with:</p>
        <div className="flex flex-row gap-10">
          <div>
            <img
              src={assets.python}
              className="size-18 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <p className="text-gray-400 font-semibold text-sm mt-2">Python</p>
          </div>
          <div>
            <img
              src={assets.nextjs}
              className="size-18 bg-white rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <p className="text-gray-400 font-semibold text-sm mt-2">Next js</p>
          </div>
          <div>
            <img
              src={assets.typescript}
              className="size-18 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <p className="text-gray-400 font-semibold text-sm mt-2">TypeScript</p>
          </div>
        </div>
      </div>
      {/* Tools */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-5">Tools:</p>
        <div className="flex flex-row gap-10 text-center">
          <div>
            <LiaGit className="size-18 text-orange-600 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">git</p>
          </div>
          <div>
            <FaGithub className="size-18 bg-white text-black p-2 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">gitHub</p>
          </div>
          <div>
            <SiPostman className="size-18 text-orange-500 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">Postman</p>
          </div>
          <div>
            <IoLogoVercel className="size-18 bg-white text-black rounded-lg p-2 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">Vercel</p>
          </div>
          <div>
            <SiRender className="size-18 bg-white text-black p-2 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out" />
            <p className="text-gray-400 font-semibold text-sm mt-2">Render</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Skill;
