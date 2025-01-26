import { NavLink } from "react-router-dom";
import { FaPlus, FaList, FaClipboardList } from "react-icons/fa"; // Importing specific icons from FontAwesome

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-gray-900 border-r border-gray-700 text-gray-300 font-medium">
      <div className="flex flex-col gap-6 pt-12 px-6">
        {/* Sidebar Navigation Links */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-l-lg transition-all ${
              isActive ? "bg-gray-800 text-white border-l-4 border-rose-500" : "hover:bg-gray-800"
            }`
          }
        >
          <FaPlus className="w-6 h-6" /> {/* Add icon */}
          <p className="hidden sm:block">Add Items</p> {/* Text visible from small screens and above */}
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-l-lg transition-all ${
              isActive ? "bg-gray-800 text-white border-l-4 border-rose-500" : "hover:bg-gray-800"
            }`
          }
        >
          <FaList className="w-6 h-6" /> {/* List icon */}
          <p className="hidden sm:block">List Items</p> {/* Text visible from small screens and above */}
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-l-lg transition-all ${
              isActive ? "bg-gray-800 text-white border-l-4 border-rose-500" : "hover:bg-gray-800"
            }`
          }
        >
          <FaClipboardList className="w-6 h-6" /> {/* Orders icon */}
          <p className="hidden sm:block">Orders</p> {/* Text visible from small screens and above */}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
