import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import { FaSearch, FaShoppingBasket, FaUserCircle, FaSignOutAlt, FaHome, FaPizzaSlice, FaMobileAlt, FaEnvelope, FaBars } from "react-icons/fa"; // Importing React Icons

const Navbar = ({ showLogin, setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu toggle

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between fixed top-0 left-0 w-full z-50 dark:bg-gray-800">
      <Link to="/" className="flex items-center">
        {/* Replace logo text with your SVG logo */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100" height="100">
          <path d="M50 200 L150 50 L250 200 Z" fill="#FF6347" />
          <circle cx="120" cy="130" r="15" fill="#FFA500" />
          <circle cx="180" cy="160" r="10" fill="#FFA500" />
          <circle cx="150" cy="100" r="20" fill="#FFA500" />
          <path d="M150 50 L130 80 Q110 100, 150 120 Z" fill="#FF4500" />
          <text x="150" y="250" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="white">
            MealMate
          </text>
        </svg>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <FaBars
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex gap-6 sm:gap-10 md:gap-12 text-lg absolute md:relative top-16 left-0 w-full bg-gray-900 md:bg-transparent md:flex-row flex-col items-center md:space-x-0 space-y-4 md:space-y-0 md:top-0 md:left-0 md:z-auto z-50 transition-all duration-300`}
      >
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={`${
              menu === "home" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-300 hover:text-white"
            } transition-all duration-300 flex items-center`}
          >
            <FaHome className="mr-2" /> Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={`${
              menu === "menu" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-300 hover:text-white"
            } transition-all duration-300 flex items-center`}
          >
            <FaPizzaSlice className="mr-2" /> Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile")}
            className={`${
              menu === "mobile" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-300 hover:text-white"
            } transition-all duration-300 flex items-center`}
          >
            <FaMobileAlt className="mr-2" /> Mobile App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("contact")}
            className={`${
              menu === "contact" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-300 hover:text-white"
            } transition-all duration-300 flex items-center`}
          >
            <FaEnvelope className="mr-2" /> Contact Us
          </a>
        </li>
      </ul>

      {/* Icons & Login/Logout */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <FaSearch className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
        <div className="relative">
          <Link to="/cart">
            <FaShoppingBasket className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          </Link>
          {getTotalCartAmount() !== 0 && (
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
          )}
        </div>

        {!token ? (
          <button
            onClick={() => setShowLogin((prevState) => !prevState)}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Login
          </button>
        ) : (
          <div className="relative">
            <FaUserCircle className="w-8 h-8 rounded-full cursor-pointer" />
            <ul className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              <li
                onClick={() => navigate("/myorders")}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                <FaShoppingBasket className="w-5 h-5 mr-3" />
                <p>Orders</p>
              </li>
              <hr className="border-gray-600" />
              <li
                onClick={logOut}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                <FaSignOutAlt className="w-5 h-5 mr-3" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
