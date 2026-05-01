import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./Animations";

function Contact() {
  const text = "anoops0666@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div>
        <h1 className="text-white text-4xl md:text-8xl font-bold mb-5">
          Contact <span className="text-neutral-400">Me:</span>
        </h1>
        <div className="text-white text-center border p-5 pb-1 rounded-lg shadow-gray-400 shadow-md">
          <h2 className="text-2xl font-bold mb-5 ">Feel free to reach</h2>

          <div className="flex flex-col items-center gap-8">
            {/* Gmail */}
            <div className="flex gap-4 border px-5 py-2 rounded-lg hover:border-gray-400 transition-all duration-300">
              <p>{text}</p>
              <button onClick={handleCopy}>
                {copied ? (
                  <Check className="text-green-400 size-4" />
                ) : (
                  <Copy className="text-gray-400 hover:text-white size-4" />
                )}
              </button>
            </div>
            {/* Other apps */}
            <div className="flex justify-between gap-5">
              <a href="https://www.linkedin.com/in/anoop0" target="_blank" rel="noopener noreferrer">
                <CiLinkedin className="size-12 text-blue-500 hover:scale-110 ease-in-out  duration-300 transition-all" />
              </a>
              <a href="https://github.com/elvyn0" target="_blank" rel="noopener noreferrer">
                <FaGithub className="size-12 hover:scale-110 ease-in-out  duration-300 transition-all" />
              </a>
            </div>
          </div>

          <p className="border-t text-sm text-gray-300 mt-7 border-gray-500 pt-1">
            Open to opportunities and collaborations
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
