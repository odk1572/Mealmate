import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; // React Icons for Social Media
import { assets } from "../assets/assets"; // Assuming you still have assets, replace with your own if needed.

const Footer = () => {
  return (
    <div className="text-white bg-gray-800 flex flex-col items-center px-8 py-6 gap-8" id="footer">
      <div className="w-full flex flex-col sm:flex-row justify-between gap-16 footer-content">
        {/* SVG Logo */}
        <div className="flex flex-col p-2 gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="150" height="150">
            {/* Pizza Slice Background */}
            <path d="M50 200 L150 50 L250 200 Z" fill="#FF6347" />
            
            {/* Stylized Toppings */}
            <circle cx="120" cy="130" r="15" fill="#FFA500" />
            <circle cx="180" cy="160" r="10" fill="#FFA500" />
            <circle cx="150" cy="100" r="20" fill="#FFA500" />
            
            {/* Bite Mark */}
            <path d="M150 50 L130 80 Q110 100, 150 120 Z" fill="#FF4500" />
            
            {/* Text */}
            <text x="150" y="250" 
              textAnchor="middle" 
              fontFamily="Arial, sans-serif" 
              fontSize="30" 
              fontWeight="bold" 
              fill="white">
              MealMate
            </text>
          </svg>

          <p className="text-sm text-gray-400 text-center mt-2">
            Passionate about building scalable and robust applications. Full Stack Developer, always learning new things.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="p-1">
          <h2 className="text-xl font-semibold text-white underline">SOCIAL LINKS</h2>
          <div className="flex mt-4 gap-6 justify-center">
            <a href="https://www.linkedin.com/in/omkariya/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-600 transition-transform duration-300" />
            </a>
            <a href="https://github.com/odk1572" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-400 hover:text-black transition-transform duration-300" />
            </a>
            <a href="https://www.instagram.com/odk_1572/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-400 hover:text-pink-600 transition-transform duration-300" />
            </a>
            <a href="https://twitter.com/omkariya" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-gray-400 hover:text-blue-400 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white underline">GET IN TOUCH</h2>
          <ul className="text-lg text-gray-300">
            <li className="hover:scale-105 transition-transform duration-300">+91 8780466733</li>
            <li className="hover:scale-105 transition-transform duration-300">odk1572@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-2 my-4 rounded-full border-gray-600" />
      <p className="text-center text-gray-500 text-base footer-copyright">
        Made with ❤️ by ODK | 2025 MealMate. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
