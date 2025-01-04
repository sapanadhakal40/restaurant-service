import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Header from "../../components/Header/Header"
import { useState } from "react"

import { FaUtensils, FaSmile, FaHandshake, FaLeaf } from 'react-icons/fa'; 




const Home = () => {

  const [category, setCategory] = useState("all");
  return (
    <div className="flex flex-col min-h-screen">
   
  
      <section id="home" className="pt-10">
        <Header />
      </section>


      <section id="menu" className="pt-10">
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
      </section>

      {/* About Section */}
      <section id="about" className="pt-10">
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaUtensils className="text-3xl text-primary mb-4" /> 
            <h3 className="text-lg font-semibold">Crafted with Care</h3>
            <p className="text-gray-600 text-md">Our dedicated chefs pour their passion into every dish, using only the finest, locally sourced ingredients to create culinary delights.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaSmile className="text-3xl text-primary mb-4" /> 
            <h3 className="text-lg font-semibold">Your Satisfaction is Our Priority</h3>
            <p className="text-gray-600 text-md">We strive to provide exceptional customer service, ensuring a seamless and enjoyable dining experience from order to delivery.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaHandshake className="text-3xl text-primary mb-4" /> 
            <h3 className="text-lg font-semibold">Supporting Local</h3>
            <p className="text-gray-600 text-md">We believe in supporting local businesses and farmers, fostering strong community ties and contributing to a thriving local economy.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaLeaf className="text-3xl text-primary mb-4" /> 
            <h3 className="text-lg font-semibold">Eco-Conscious Choices</h3>
            <p className="text-gray-600 text-md">We are committed to sustainable practices, minimizing our environmental impact through responsible sourcing and eco-friendly packaging.</p>
          </div>
        </div>
      </div>
      </section>

      <section id="contact" className="pt-5">
         <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        </div>
      </section>
    </div>

  )
}

export default Home