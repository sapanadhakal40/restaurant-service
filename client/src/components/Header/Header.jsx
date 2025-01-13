import header_food from '../../assets/header_img.webp'
import { motion } from 'framer-motion';


const Header = () => {

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <img
          src={header_food}
          alt="header_img"
          className="w-full h-full object-cover filter brightness-75"
        />
      </motion.div>

    
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center">
        <div className="container mx-auto px-4 text-center text-white">


          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
          

       
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold tracking-tight"
            >
              Delicious Food
              <span className="block mt-2 text-orange-500">Delivered</span>
            </motion.h1>

    
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 leading-relaxed"
            >
              Order your favorite meals straight to your doorstep, freshly prepared and ready to enjoy
            </motion.p>

         
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
               

                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              
              {/* <button className="group bg-transparent border-2 border-white hover:border-orange-500 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                <span className="group-hover:text-orange-500 transition-colors duration-300">View Menu</span>
              </button> */}
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;












































//  import header_food from '../../assets/header_img.webp'
// // import header_food from '../../assets/header_img.png'


// const Header = () => {
//   return (
//     <div className="relative h-[80vh]">
//       <img
//         src={header_food}
//         alt="header_img"
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black/50 flex items-center">
//         <div className="container mx-auto px-4 text-center text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Delicious Food Delivered
//           </h1>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Order your favorite meals straight to your doorstep
//           </p>
//           <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-medium transition-colors">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header