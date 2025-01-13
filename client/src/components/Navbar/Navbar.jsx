/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { assets } from "../../assets/assets.js";
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ setShowLogin, setIsCartOpen, isLoggedIn, handleLogout, user}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menu, setMenu] = useState("home");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (item) => {
        setMenu(item);
        setMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: item } });
        } else {
            const element = document.getElementById(item);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleCartClick = () => {
        setIsCartOpen(true);
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const onLogoutClick = () => {
        handleLogout();
      };


    const renderAuthButtons = () => {
        if (isLoggedIn) {
            return (
                <div className="flex space-x-4">
                    <button
                        className="bg-transparent hover:bg-orange-100 px-4 py-2 text-sm font-medium transition-colors border border-gray-200 rounded-2xl text-gray-700 cursor-pointer"
                        onClick={handleProfileClick}
                    >
                        Profile
                    </button>
                    <button
                        className="bg-transparent hover:bg-red-100 px-4 py-2 text-sm font-medium transition-colors border border-gray-200 rounded-2xl text-gray-700 cursor-pointer"
                        onClick={onLogoutClick}
                    >
                        Logout
                    </button>
                </div>
            );
        }
        return (
            <button
                className="bg-transparent hover:bg-orange-100 px-4 py-2 text-sm font-medium transition-colors border border-gray-200 rounded-2xl text-gray-700 cursor-pointer"
                onClick={() => setShowLogin(true)}
            >
                Sign In
            </button>
        );
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm font-poppins" role="navigation">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={assets.logo} alt="logo" className="w-16 h-16" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <ul className="flex space-x-8">
                            {["home", "about", "menu", "contact"].map((item) => (
                                <li 
                                    key={item} 
                                    className={`${menu === item ? "font-semibold text-active" : "font-medium"} cursor-pointer`}
                                    onClick={() => handleNavClick(item)}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right side icons and buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                            <Search className="w-6 h-6" />
                        </button>
                        <button 
                            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={handleCartClick}
                        >
                            <ShoppingCart className="w-6 h-6" />
                        </button>
                        {renderAuthButtons()}
                    </div>

                    {/* Mobile Menu Button */}
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
                            {["home", "about", "menu", "contact"].map((item) => (
                                <li 
                                    key={item} 
                                    className={`${menu === item ? "font-semibold text-active" : "font-medium"} cursor-pointer`}
                                    onClick={() => handleNavClick(item)}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </li>
                            ))}
                            <div className="flex items-center space-x-4">
                                <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                                    <Search className="w-6 h-6" />
                                </button>
                                <button 
                                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    onClick={handleCartClick}
                                >
                                    <ShoppingCart className="w-6 h-6" />
                                </button>
                            </div>
                            {renderAuthButtons()}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;