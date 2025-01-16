/* eslint-disable react/prop-types */
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

 
const FoodItem = ({id,name,price,image,description,handleAddToCart, setIsCartOpen}) => {
  const { addToCart } = useContext(StoreContext);


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300 ease-in-out">
          <div className="h-48">
        <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>
     

      <div className="p-4 ">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <img  className="w-16 sm:w-20" src={assets.rating_starts} alt="rating" />
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-orange-600">
          
            ${price.toFixed(2)}
          </p>
          <button className="bg-green-600 text-white px-2 py-2 rounded-md hover:bg-green-700 transition-colors"
            onClick={() => {
              
              addToCart(id)
              handleAddToCart(id,name,price,image,description);
              setIsCartOpen(true)
            }}
            >
            Add to Cart
          </button>
        </div>
      </div>
      </div>
 
  )
}

export default FoodItem
