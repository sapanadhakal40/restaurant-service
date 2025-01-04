import { assets } from '../../assets/assets'
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'



const footer = () => {
  return (
    
      <footer className="bg-gray-50 text-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                  {/* Logo and About */}
                <div className="flex flex-col items-center md:items-start ">
          <img src={assets.logo} alt="logo" className="w-32 mb-4" />
           <p className='text-sm text-gray-600 text-center md:text-left'>Your favorite meals delivered fresh to your doorstep.</p>
        </div>

        {/* Quick Links */}
            <div className="text-center md:text-left">
            <h3 className="font-bold mb-4">Quick Links</h3>
               <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-gray-700">Home</a></li>
               <li><a href="#" className="hover:text-gray-700">About Us</a></li>
                <li><a href="#" className="hover:text-gray-700">Delivery</a></li>
                <li><a href="#" className="hover:text-gray-700">Privacy policy</a></li>

                </ul>
               </div>


 {/* Get in Touch */}
              <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm">
              <p>Phone: +358 44 0000000</p>
              <p>Email: contact@fooddelivery.com</p>

              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="#" className="text-gray-700 hover:text-gray-400">
                <FaFacebook size={32} />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-400">
                <FaTwitter size={32} />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-400">
                <FaInstagram size={32} />
                </a>
                </div>

        </div>
      </div>
    </div>
    </div>

 {/* Copyright */}
 <div className="mt-8 pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-600 text-center">
            © 2025 Food Delivery Service. All meals are prepared with love and delivered with care. 
            Your satisfaction is our top priority.
          </p>
        </div>
      

    </footer>
  )
}

export default footer
