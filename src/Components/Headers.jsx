import { FileUser, Folder, HouseIcon, Wrench } from "lucide-react";

function Headers() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex  gap-10 text-gray-300 px-6 py-3 bg-gray-900 rounded-full">
        <a href="#home">
          <HouseIcon />
        </a>
        <a href="#about">
          <FileUser />
        </a>
        <a href="#projects">
          <Folder />
        </a>
        <a href="skills">
          <Wrench />
        </a>
      </div>
    </div>
  );
}

export default Headers;
