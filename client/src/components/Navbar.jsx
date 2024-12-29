import  { useState } from 'react'
import { assets } from "../assets/assets.js"
import { Search, ShoppingCart } from 'lucide-react';


const Navbar = () => {

    const [menu,setMenu] = useState("home")
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-poppins" role="navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
{/* Logo */}
     <div className="flex-shrink-0">
        <img src={assets.logo} alt="logo" className="w-16 h-16" />
        </div>

{/* Nav links */}
    <div className="hidden md:block">
        <ul className="flex space-x-8">
      <li className={menu === "home" ? "font-semibold text-active ": "font-medium "}>
        <a href="/home" onClick={(e) => {
            e.preventDefault();
            setMenu("home")
        }}
            >Home</a>
        </li>
        <li className={menu === "about" ? "font-semibold text-active ": "font-medium "}>
        <a href="/about" onClick={(e) => {
            e.preventDefault();
            setMenu("about")
        }}
            >About Us</a>
        </li>
        <li className={menu === "menu" ? "font-semibold text-active ": "font-medium "}>
        <a href="/menu" onClick={(e) => {
            e.preventDefault();
            setMenu("menu")
        }}
            >Menu</a>
        </li>
        <li className={menu === "contact" ? "font-semibold text-active ": "font-medium "}>
        <a href="/contact" onClick={(e) => {
            e.preventDefault();
            setMenu("contact")
        }}
            >Contact Us</a>
        </li>
      
        </ul>
        </div>


 {/* Right side icons and button */}

    <div className="flex items-center space-x-4">
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
        </div>
        </div>
    </div>
    

    

  )
}

export default Navbar
