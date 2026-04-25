import { FileUser, Folder, HouseIcon, Wrench } from "lucide-react";

function Headers() {
  return (
    <div className="flex items-center justify-center mb-10">
      <div className="flex  gap-10 text-gray-300 px-6 py-3 bg-gray-900 rounded-full">
        <a href="#home">
          <HouseIcon />
        </a>
        <a href="#about">
          <FileUser />
        </a>
        <a href="#skills">
          <Wrench />
        </a>
        <a href="#projects">
          <Folder />
        </a>
      </div>
    </div>
  );
}

export default Headers;
