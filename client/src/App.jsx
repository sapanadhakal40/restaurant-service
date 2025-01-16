import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/cart'
import CartSidebar from './pages/Cart/CartSidebar'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/footer'
import { useState, useEffect } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import RegisterPopup from './components/RegisterPopup/RegisterPopup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


    // Check for token on app load
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
        // If you have user data in localStorage, you can set it here too
        const userData = localStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      }
    }, []);

  const handleAddToCart = () => {
    setIsCartOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <>
      <ToastContainer />
      {showLogin && (
        <LoginPopup 
          setShowLogin={setShowLogin} 
          setShowRegister={setShowRegister}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
        />
      )}
      {showRegister && (
        <RegisterPopup 
          setShowRegister={setShowRegister} 
          setShowLogin={setShowLogin} 
        />
      )}
      
      <Router>
        <div className="w-full h-full">
          <Navbar 
            setShowLogin={setShowLogin}
            setIsCartOpen={setIsCartOpen}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            handleLogout={handleLogout}
            user={user}
          />
          <CartSidebar
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
          
          <Routes>
            <Route path="/" element={<Home handleAddToCart={handleAddToCart}/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/login" element={<LoginPopup />} />

            
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App