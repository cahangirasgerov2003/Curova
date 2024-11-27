import { useState, useEffect, useRef } from "react";
import { assets } from "../assets/image/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showLang, setShowLang] = useState(true);
  const [notifications] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Eng");
  const dropdownRef = useRef(null);
  const dropdownLangRef = useRef(null);
  const languages = ["Eng", "Aze", "Ger"];

  const selectLang = (e) => {
    setSelectedLang(e.target.textContent);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }

      if (
        dropdownLangRef.current &&
        !dropdownLangRef.current.contains(event.target)
      ) {
        setShowLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="flex justify-between items-center border-b border-b-yellow-400 py-4 text-sm">
      <div className="flex items-center gap-5">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.logo} alt="logo" className="h-8" />
          <h2 className="text-[#214282] font-bold">Curova</h2>
        </div>
        <div className="relative" ref={dropdownLangRef}>
          <div
            className="cursor-pointer flex items-center gap-1 mt-0.5"
            onClick={() => {
              setShowLang(!showLang);
            }}
          >
            <span>{selectedLang}</span>
            <div className="mt-1">
              {showLang ? (
                <IoIosArrowUp size="10px" />
              ) : (
                <IoIosArrowDown size="10px" />
              )}
            </div>
          </div>

          {showLang && (
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 dropdown-menu">
              <ul className="bg-gray-200 rounded-sm p-4 flex flex-col gap-2.5">
                {languages
                  .filter((item) => item !== selectedLang)
                  .map((item, index) => (
                    <li key={index} onClick={selectLang}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <ul className="hidden md:flex gap-8 font-medium navbar-links">
        <NavLink className="py-2 px-4 rounded-md" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className="py-2 px-4 rounded-md" to="/doctors">
          <li>Doctors</li>
        </NavLink>
        <NavLink className="py-2 px-4 rounded-md" to="/about">
          <li>About</li>
        </NavLink>
        <NavLink className="py-2 px-4 rounded-md" to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className="flex gap-3">
            <div className="flex items-center pt-1">
              {notifications ? (
                <MdNotificationsActive
                  color="#FFCC4D"
                  size="22px"
                  className="cursor-pointer notifications-active"
                />
              ) : (
                <IoNotificationsOutline color="black" size="22px" />
              )}
            </div>
            <div className="relative" ref={dropdownRef}>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <img
                  className="w-8 rounded-full cursor-pointer"
                  src={assets.profile_pic}
                  alt="profile"
                />
              </div>

              {showMenu && (
                <div className="absolute top-[56px] right-0 dropdown-menu">
                  <ul className="bg-gray-200 rounded-sm p-4 flex flex-col gap-2.5 min-w-40">
                    <li onClick={() => navigate("/my-profile")}>Profile</li>
                    <li onClick={() => navigate("/my-appointments")}>
                      Appointments
                    </li>
                    <li onClick={() => navigate("/privacy-policy")}>
                      Privacy Policy
                    </li>
                    <li onClick={() => setToken(false)}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="py-2 px-4 border-2 border-primary-color rounded-md font-medium hover:bg-primary-color hover:border-white transition-all duration-300"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
