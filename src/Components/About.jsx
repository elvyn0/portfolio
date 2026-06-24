import { motion } from "framer-motion";
import { fadeUp } from "./Animations";

function About() {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div className="text-white">
        <div>
          <p className="text-4xl md:text-8xl font-black text-white mb-4">
            About <span className="text-neutral-500">me:</span>
          </p>
          <p className="text-gray-300 w-full text-xl">
            I build things. That's the simplest way to put it. What started as curiosity about how websites work turned
            into a year of late nights, countless bugs, and three production applications built completely from scratch.
            My background is unconventional — commerce degree, a year in cybersecurity, then a complete pivot into full
            stack development. No shortcuts. No bootcamp. Just building, breaking things, and figuring it out. Today I
            specialize in the MERN stack — React on the frontend, Node.js and Express on the backend, MongoDB for data,
            and whatever it takes to ship something that actually works. I've built real time messaging systems, payment
            integrations, AI assistants, booking platforms and e-commerce apps — all deployed and live. I write code the
            way my cybersecurity background taught me to think — with security in mind from the start, not as an
            afterthought. When I'm deep in a project and new ideas keep coming instead of frustration — that's when I
            know I'm exactly where I'm supposed to be.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
