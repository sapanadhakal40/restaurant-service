import  { useState } from 'react'
import { assets } from "../../assets/assets.js"
import { Search, ShoppingCart, Menu, X  } from 'lucide-react';



const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Close mobile menu if open
          setMobileMenuOpen(false);
          // Smooth scroll to element
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    
      const handleNavClick = (item) => {
        setMenu(item);
        scrollToSection(item);
      };


  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-poppins" role="navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
{/* Logo */}
     <div className="flex-shrink-0">
        <img src={assets.logo} alt="logo" className="w-16 h-16" />
        </div>

{/* Desktop Menu */}
    <div className="hidden md:flex space-x-8">
        <ul className="flex space-x-8">
            {["home","about","menu","contact"].map((item) => (
                <li 
                key={item} 
                className={`${
                  menu === item ? "font-semibold text-active" : "font-medium"
                } cursor-pointer`}
                onClick={() => handleNavClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
        </ul>
        </div>
      


 {/* Right side icons and button */}

    <div className="hidden md:flex items-center space-x-4">
     <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
    <Search className="w-6 h-6" />
    </button>

    <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
    <ShoppingCart className="w-6 h-6" />
   
    </button>
                
    <button className="bg-transparent hover:bg-orange-100  px-4 py-2 text-sm font-medium transition-colors border border-gray-200 rounded-2xl text-gray-700 cursor-pointer">
     Sign In
    </button>
    </div>


{/* Icon for Mobile Menu */}
    <div className="md:hidden flex items-center">
    <button 
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors" 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
        </div>


{/* Mobile Menu */}
{isMobileMenuOpen && (
    <div className="md:hidden bg-white shadow-sm">
        <ul className="flex flex-col space-y-4 p-4">
            {["home","about","menu","contact"].map((item) => (
                 <li 
                 key={item} 
                 className={`${
                   menu === item ? "font-semibold text-active" : "font-medium"
                 } cursor-pointer`}
                 onClick={() => handleNavClick(item)}
               >
                 {item.charAt(0).toUpperCase() + item.slice(1)}
               </li>
            ))}
            <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Search className="w-6 h-6" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                </button>
                </div>
                <button className="bg-transparent hover:bg-orange-100  px-4 py-2 text-sm font-medium transition-colors border border-gray-200 rounded-2xl text-gray-700 cursor-pointer">
                Sign In
                </button>

        </ul>
        </div>
    )}
    </div>
    </div>
    

    

  )
}

export default Navbar