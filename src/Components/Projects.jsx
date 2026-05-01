function Projects() {
  return (
    <div className="text-white max-w-5xl mx-auto px-4">
      {/* Section Title */}
      <h1 className="font-bold text-4xl md:text-8xl mb-5">
        Recent<span className="text-neutral-500"> Projects </span>
      </h1>

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
          A full stack travel platform combining social media and hotel booking in one application. Users can share
          experiences, connect with others, and book hotels seamlessly. The platform includes real-time messaging, AI
          assistance, and an admin dashboard for managing bookings and system data.
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <p className="font-semibold mb-3 text-2xl">Highlights</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>User authentication and profile system</li>
            <li>Create and share travel posts and blogs</li>
            <li>Hotel booking with date selection and payment</li>
            <li>Booking management (view, cancel, delete)</li>
            <li>Real-time user messaging</li>
            <li>AI chat assistant</li>
            <li>Admin dashboard with analytics</li>
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
            href="https://github.com/elvyn0/ScenicWonders.git"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-white transition px-7 py-4 text-center font-semibold rounded-md"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
