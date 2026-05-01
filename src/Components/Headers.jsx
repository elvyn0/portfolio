import { Folder, Wrench, Phone, User } from "lucide-react";

function Headers() {
  return (
    <div className="flex items-center justify-center mb-10">
      <div className="flex flex-row gap-15 text-gray-300 px-6 py-3 bg-gray-900 rounded-full">
        {/* About */}
        <div className="relative group">
          <a href="#home">
            <User />
            <p className="absolute top-10 -left-4 text-sm font-semibold text-gray-400 bg-gray-800 px-2 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              About
            </p>
          </a>
        </div>

        {/* Projects*/}
        <div className="relative group">
          <a href="#projects">
            <Folder />
            <p className="absolute top-10 -left-6 text-sm font-semibold text-gray-400 bg-gray-800 px-2 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Projects
            </p>
          </a>
        </div>

        {/* Tools */}
        <div className="relative group">
          <a href="#skills">
            <Wrench />
            <p className="absolute top-10 -left-5 text-sm font-semibold text-gray-400 bg-gray-800 px-2 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Tools
            </p>
          </a>
        </div>

        {/* Contact */}
        <div className="relative group">
          <a href="#contact">
            <Phone />
            <p className="absolute top-10 -left-6 text-sm font-semibold text-gray-400 bg-gray-800 px-2 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Contact
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Headers;
