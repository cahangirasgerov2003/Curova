import { assets } from "../assets/image/assets.js";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-b-gray-400 mb-5 py-4">
      <div className="flex items-center gap-2 py-2">
        <img src={assets.logo} alt="logo" className="h-8" />
        <h2 className="text-[#101f3e] font-bold">Curova</h2>
      </div>
      <ul>
        <NavLink>
          <li>HOME</li>
        </NavLink>
        <NavLink>
          <li>DOCTORS</li>
        </NavLink>
        <NavLink>
          <li>ABOUT</li>
        </NavLink>
        <NavLink>
          <li>CONTACT</li>
        </NavLink>
      </ul>
      <div>
        <button>Create account</button>
      </div>
    </div>
  );
};

export default Navbar;
