 

import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem"

// eslint-disable-next-line react/prop-types
const FoodDisplay = ({ category, handleAddToCart }) => {

    const { food_list} = useContext(StoreContext)
 
    return (
      <div className="container mx-auto px-8 py-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Top dishes near you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{food_list.map((item) => {
  
  if (category==="all" || item.category===category){
    return (
      <FoodItem
        key={item._id}
        id={item._id}
        name={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
       handleAddToCart={handleAddToCart}
      />
    );
  }
  return null;
})}

        </div>
      </div>
    );
  };
  
  export default FoodDisplay;