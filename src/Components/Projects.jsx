import { assets } from "../assets/assets";

function Projects() {
  return (
    <div className="text-white">
      <h1 className="font-bold text-white text-8xl">
        <span className="text-neutral-600">Recent</span> Projects
      </h1>
      {/* Project 1 */}
      <div>
        <h1>Scenic Wonders</h1>
        <div>
          <p>
            A full stack travel platform combining social media and booking functionality in one application. Users can
            share travel experiences through posts and blogs, connect with other travelers, and book hotels across
            India. The platform includes real-time messaging, AI-powered assistance, and a complete admin dashboard for
            managing hotels and bookings. Designed to deliver a seamless experience from discovery to booking.
          </p>
          <div>
            <p>Highlights</p>
            <ul>
              <li>User authentication and profile system </li>
              <li>Create and share travel posts and blogs</li>
              <li>Hotel booking system with date selection and payment integration</li>
              <li>with date selection and payment integration</li>
              <li>Booking management (view, cancel, delete)</li>
              <li>Real-time user messaging</li>
              <li>AI chat assistant for user support</li>
              <li>Admin dashboard for managing hotels, users, and bookings</li>
              <li>Analytics overview (total users, bookings, revenue)</li>
            </ul>
          </div>
        </div>
        <div>
          <img className="w-150 mb-5" src={assets.homepage1} alt="landingpage1" />
          <img className="w-150 mb-5" src={assets.homepage2} alt="landingpage2" />
          <img className="w-150 mb-5" src={assets.hotelBooking} alt="hotelbookingpage" />
          <img className="w-150 mb-5" src={assets.adminpanel} alt="adminPanelHomepage" />
        </div>
      </div>
      {/* Project 2 */}
      <div></div>
    </div>
  );
}

export default Projects;
