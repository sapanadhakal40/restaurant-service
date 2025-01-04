 
 


import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import RegisterPopup from './components/RegisterPopup/RegisterPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
 const [showRegister, setShowRegister] = useState(false);


  return (
    <>
       {showLogin && <LoginPopup setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>}
        {showRegister && <RegisterPopup setShowRegister={setShowRegister} setShowLogin={setShowLogin} />}



       {/* {showLogin?<LoginPopup/> : <></>} */}

      <Router>
    <div className="w-full h-full">
    <Navbar setShowLogin={setShowLogin} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/place-order" element={<PlaceOrder />} />
    </Routes>
      
    </div>

      </Router>
      <Footer />
    </>
)
}

export default App

