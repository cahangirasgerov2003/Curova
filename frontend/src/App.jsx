import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import MyAppointments from "./pages/MyAppointments.jsx";
import AppointmentDetails from "./pages/AppointmentDetails.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  return (
    <div className="bg-secondary-color min-h-dynamic-min-height">
      <div className="mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:specialist" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/appointment/:doctorId"
            element={<AppointmentDetails />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
