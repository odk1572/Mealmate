import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa'; // Importing the required icons

const AppDownload = () => {
  return (
    <div className="app-download bg-gray-900 text-white py-16 px-6 dark:bg-gray-800" id="app-download">
      <p className="text-3xl font-bold text-center mb-6">
        For a Better Experience, Download <br /> The MealMate App
      </p>

      {/* SVG Logo */}
      <div className="flex justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="150" height="150"> {/* Reduced the size */}
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
      </div>

      <div className="app-download-platforms flex justify-center space-x-6 flex-wrap">
        {/* Google Play Button */}
        <div className="platform-item transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 mb-4 sm:mb-0">
          <div className="flex items-center space-x-2">
            <FaGooglePlay className="text-green-500 text-5xl" />
            <span className="text-xl font-semibold">Google Play</span>
          </div>
        </div>

        {/* App Store Button */}
        <div className="platform-item transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 mb-4 sm:mb-0">
          <div className="flex items-center space-x-2">
            <FaApple className="text-black text-5xl" />
            <span className="text-xl font-semibold">App Store</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
