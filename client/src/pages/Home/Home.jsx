/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Header from "../../components/Header/Header";
import { FaUtensils, FaSmile, FaHandshake, FaLeaf } from 'react-icons/fa';
import { motion } from "framer-motion";

const AboutCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
  >
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
        <Icon className="text-3xl text-orange-500" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Home = ({ handleAddToCart }) => {
  const location = useLocation();
  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section id="home">
        <Header />
      </section>

      <section id="menu" className="py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ExploreMenu category={category} setCategory={setCategory}/>
          <FoodDisplay category={category} handleAddToCart={handleAddToCart}/>
        </motion.div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience the perfect blend of quality, service, and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AboutCard
              icon={FaUtensils}
              title="Crafted with Care"
              description="Our dedicated chefs pour their passion into every dish, using only the finest, locally sourced ingredients."
              delay={0.2}
            />
            <AboutCard
              icon={FaSmile}
              title="Your Satisfaction is Our Priority"
              description="We strive to provide exceptional customer service, ensuring a seamless dining experience."
              delay={0.4}
            />
            <AboutCard
              icon={FaHandshake}
              title="Supporting Local"
              description="We believe in supporting local businesses and farmers, fostering strong community ties."
              delay={0.6}
            />
            <AboutCard
              icon={FaLeaf}
              title="Eco-Conscious Choices"
              description="Committed to sustainable practices through responsible sourcing and eco-friendly packaging."
              delay={0.8}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
      
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

























// import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
// import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
// import Header from "../../components/Header/Header"
// import { useState } from "react"
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';


// import { FaUtensils, FaSmile, FaHandshake, FaLeaf } from 'react-icons/fa'; 



// const Home = ( {handleAddToCart}) => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.scrollTo) {
//         const element = document.getElementById(location.state.scrollTo);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     }
// }, [location]);


//   const [category, setCategory] = useState("all");
//   return (
//     <div className="flex flex-col min-h-screen">
   
  
//       <section id="home" className="pt-10">
//         <Header />
//       </section>


//       <section id="menu" className="pt-10">
//         <ExploreMenu category={category} setCategory={setCategory}/>
//         <FoodDisplay category={category} handleAddToCart={handleAddToCart}/>
//       </section>

//       {/* About Section */}
//       <section id="about" className="pt-10">
       
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
//             <FaUtensils className="text-3xl text-primary mb-4" /> 
//             <h3 className="text-lg font-semibold">Crafted with Care</h3>
//             <p className="text-gray-600 text-md">Our dedicated chefs pour their passion into every dish, using only the finest, locally sourced ingredients to create culinary delights.</p>
//           </div>


//           <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
//             <FaSmile className="text-3xl text-primary mb-4" /> 
//             <h3 className="text-lg font-semibold">Your Satisfaction is Our Priority</h3>
//             <p className="text-gray-600 text-md">We strive to provide exceptional customer service, ensuring a seamless and enjoyable dining experience from order to delivery.</p>
//           </div>
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
//             <FaHandshake className="text-3xl text-primary mb-4" /> 
//             <h3 className="text-lg font-semibold">Supporting Local</h3>
//             <p className="text-gray-600 text-md">We believe in supporting local businesses and farmers, fostering strong community ties and contributing to a thriving local economy.</p>
//           </div>

          
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
//             <FaLeaf className="text-3xl text-primary mb-4" /> 
//             <h3 className="text-lg font-semibold">Eco-Conscious Choices</h3>
//             <p className="text-gray-600 text-md">We are committed to sustainable practices, minimizing our environmental impact through responsible sourcing and eco-friendly packaging.</p>
//           </div>
//         </div>
//       </div>
//       </section>

//       <section id="contact" className="pt-5">
//          <div className="max-w-6xl mx-auto ">
//           <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
//         </div>
//       </section>
//     </div>

//   )
// }

// export default Home