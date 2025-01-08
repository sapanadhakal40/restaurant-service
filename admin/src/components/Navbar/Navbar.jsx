
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-end px-10 sm:px-8 py-4 shadow-md">
     
      <div className="flex items-center space-x-4">
        <img className="h-10" src={assets.logo} alt="Logo" />
        <h1 className="text-lg font-semibold text-gray-700">Admin Panel</h1>
      </div>

    </nav>
  );
};

export default Navbar;



      {/* Right Section - Placeholder for future extensions
      <div className="hidden md:flex items-center space-x-4">
        
         <button className="text-sm text-gray-600 hover:text-gray-800">Logout</button> 
      </div> */}