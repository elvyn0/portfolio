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
          <p className="text-gray-300 w-full">
            Coming from a commerce background, I transitioned into development through self-directed, hands-on projects.
            I enjoy taking ideas from initial concept to production, focusing on functionality, performance, and a clean
            user experience.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
