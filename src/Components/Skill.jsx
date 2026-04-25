import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";

function Skill() {
  return (
    <div className="text-white">
      {/* Frontend */}
      <div>
        <p>Frontend:</p>
        <div>
          <FaReact />
          <IoLogoJavascript className="text-yellow-300" />
          <FaHtml5 />
          <FaCss3Alt />
          <RiTailwindCssFill />
        </div>
      </div>
      {/* Backend */}
      <div>
        <p>Backend:</p>
        <div>
          <DiNodejs />
          <SiExpress />
        </div>
      </div>
      {/* Database */}
      <div>
        <p>Database:</p>
        <div>
          <SiMongodb />
        </div>
      </div>
      {/* Familiar With */}
      <div>
        <p>Familiar with:</p>
        <div>
          <FaPython />
          <RiNextjsFill />
          <BsTypescript />
        </div>
      </div>
      {/* Tools */}
      <div></div>
    </div>
  );
}

export default Skill;
