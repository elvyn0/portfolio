import { motion } from "framer-motion";
import { fadeUp } from "./Animations";

function Projects() {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div className="text-white max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <h1 className="font-bold text-4xl md:text-8xl mb-5">
          Recent<span className="text-neutral-500"> Projects </span>
        </h1>
        {/* Projects */}
        <div className="flex flex-col gap-8">
          {/* Project 1 */}
          <div>
            {/* Title */}
            <h2 className="font-semibold text-2xl md:text-4xl text-orange-500 mb-6">Scenic Wonders</h2>

            {/* Screenshots */}
            <div className="grid grid-cols-1  gap-4 mb-6">
              <img
                className="w-full md:h-full object-cover rounded-lg shadow-md hover:scale-105 transition"
                src="/project1image/homepage1.png"
                alt="homepage1"
              />

              <img
                className="w-full  md:h-full object-cover rounded-lg shadow-md hover:scale-105 transition"
                src="/project1image/hotelbooking.png"
                alt="hotel booking"
              />
              <img
                className="w-full md:h-full object-cover rounded-lg shadow-md hover:scale-105 transition"
                src="/project1image/adminpanel.png"
                alt="admin panel"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              A full stack travel platform that combines social interaction with hotel booking in a single system. Users
              can share travel experiences, connect with others, and book hotels through a structured booking flow with
              date selection and management features. The application is built with a scalable backend architecture,
              real-time communication, and an admin dashboard for managing hotels, users, and booking analytics.
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <p className="font-semibold mb-3 text-2xl">Highlights</p>

              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Implemented secure user authentication and role-based access control (user/admin)</li>

                <li>
                  Built a complete hotel booking flow with date selection, availability handling, and booking lifecycle
                  (create, cancel, delete)
                </li>

                <li>Designed RESTful APIs using Node.js and Express with structured routes and middleware</li>

                <li>Modeled MongoDB schemas for users, hotels, and bookings with efficient data relationships</li>

                <li>Integrated real-time messaging using WebSockets for live user communication</li>

                <li>Developed a scalable admin dashboard with analytics (users, bookings, revenue tracking)</li>

                <li>Implemented image upload and optimization for posts and hotel listings</li>

                <li>Integrated AI chat assistant to enhance user interaction and support</li>

                <li>Built responsive frontend with dynamic state management and optimized rendering</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="https://scenic-wonders.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 transition px-6 py-4 rounded-md font-semibold"
              >
                Live Demo
              </a>
              <a
                href="https://scenic-wonders-adminpanel.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 transition px-6 py-4 rounded-md font-semibold"
              >
                Admin Panel
              </a>

              <a
                href="https://github.com/elvyn0/ScenicWonders.git"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-white transition px-7 py-4 text-center font-semibold rounded-md"
              >
                Code
              </a>
            </div>
          </div>
          <hr className="text-gray-700" />
          {/* Project 2 */}
          <div>
            {/* Title */}
            <h2 className="font-semibold text-2xl md:text-4xl text-orange-500 mb-6">Textures</h2>

            {/* Screenshots */}
            <div className="grid grid-cols-1  gap-4 mb-6">
              <img
                className="w-full md:h-full object-cover rounded-lg shadow-md hover:scale-105 transition"
                src="/public/project1image/textures_screenshot.png"
                alt="homepage1"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              A full stack e-commerce platform inspired by modern shopping applications like Myntra and Meesho. The
              application provides a complete shopping experience with product discovery, category-based filtering, cart
              management, secure authentication, and multiple payment options. It also includes an admin dashboard for
              managing products, orders, and delivery status updates.
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <p className="font-semibold mb-3 text-2xl">Highlights</p>

              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Implemented secure user authentication and account management system</li>

                <li>Built dynamic product filtering by category, gender, and price sorting</li>

                <li>Developed shopping cart and complete order management workflow</li>

                <li>Integrated multiple payment methods including Stripe, Razorpay, and Cash on Delivery</li>

                <li>Designed RESTful APIs using Node.js and Express for scalable backend operations</li>

                <li>Structured MongoDB schemas for products, users, carts, and orders</li>

                <li>Created responsive UI optimized for desktop and mobile shopping experience</li>

                <li>Built admin dashboard for product management, inventory updates, and order tracking</li>

                <li>Implemented order status workflow including placed, shipped, and delivered states</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="https://textures-sable-ten.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 transition px-6 py-4 rounded-md font-semibold"
              >
                Live Demo
              </a>
              <a
                href="https://texturesadminpanel.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 transition px-6 py-4 rounded-md font-semibold"
              >
                Admin Panel
              </a>

              <a
                href="https://github.com/elvyn0/E-commerce.git"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-white transition px-7 py-4 text-center font-semibold rounded-md"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
