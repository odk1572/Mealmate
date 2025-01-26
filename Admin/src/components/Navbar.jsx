import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-2 bg-gray-900">
      {/* Place your responsive SVG logo code here */}
      <div className="w-[10%] min-w-[80px] md:w-[15%] lg:w-[10%]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 300 300" 
          className="w-full h-auto"
        >
          {/* Pizza Slice Background */}
          <path d="M50 200 L150 50 L250 200 Z" fill="#FF6347" />
          
          {/* Stylized Toppings */}
          <circle cx="120" cy="130" r="15" fill="#FFA500" />
          <circle cx="180" cy="160" r="10" fill="#FFA500" />
          <circle cx="150" cy="100" r="20" fill="#FFA500" />
          
          {/* Bite Mark */}
          <path d="M150 50 L130 80 Q110 100, 150 120 Z" fill="#FF4500" />
          
          {/* Text */}
          <text 
            x="150" 
            y="250" 
            textAnchor="middle" 
            fontFamily="Arial, sans-serif" 
            fontSize="30" 
            fontWeight="bold" 
            fill="white"
          >
            MealMate
          </text>
        </svg>
      </div>

      {/* Profile Image */}
      <img
        className="w-10 h-10 rounded-full cursor-pointer border border-gray-600"
        src={assets.profile_image}
        alt="profile"
      />
    </div>
  );
};

export default Navbar;
