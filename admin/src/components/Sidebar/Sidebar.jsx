import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Menu Button - Move to Navbar */}
      <button 
        onClick={toggleSidebar} 
        className="md:hidden fixed top-3 left-4 z-50 text-gray-700"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed md:sticky top-0 left-0 h-full 
          bg-gray-50 w-64 z-50
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-transform duration-300 ease-in-out
          md:h-screen
        `}
      >
        <nav className="flex flex-col mt-20 md:mt-18 space-y-4">
          <NavLink
            to="/add-items"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 hover:bg-gray-400 transition-colors ${
                isActive ? "bg-gray-500 text-white" : ""
              }`
            }
          >
            <img className="h-6 w-6 mr-3" src={assets.add_icon} alt="Add Items" />
            <span>Add Items</span>
          </NavLink>

          <NavLink
            to="/list-items"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 hover:bg-gray-400 transition-colors ${
                isActive ? "bg-gray-500 text-white" : ""
              }`
            }
          >
            <img className="h-6 w-6 mr-3" src={assets.order_icon} alt="List Items" />
            <span>List Items</span>
          </NavLink>

          <NavLink
            to="/orders"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 hover:bg-gray-400 transition-colors ${
                isActive ? "bg-gray-500 text-white" : ""
              }`
            }
          >
            <img className="h-6 w-6 mr-3" src={assets.parcel_icon} alt="Orders" />
            <span>Orders</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;