/* eslint-disable react/prop-types */


import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, handleAddToCart }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Top Dishes Near You
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {category === "all" 
              ? "Explore our curated selection of delicious dishes"
              : `Discover our amazing ${category} selection`}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {food_list.map((item, index) => {
            if (category === "all" || item.category === category) {
              return (
                <div
                  key={item._id}
                  className="opacity-0 animate-fadeIn"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <FoodItem
                      id={item._id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      handleAddToCart={handleAddToCart}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Empty State */}
        {food_list.filter(item => category === "all" || item.category === category).length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-xl">
              No dishes found in this category.
            </div>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Load More Dishes
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;




























// import { useContext } from "react"
// import { StoreContext } from "../../context/StoreContext"
// import FoodItem from "../FoodItem/FoodItem"

// // eslint-disable-next-line react/prop-types
// const FoodDisplay = ({ category, handleAddToCart }) => {

//     const { food_list} = useContext(StoreContext)
 
//     return (
//       <div className="container mx-auto px-8 py-8">
//         <h2 className="text-3xl font-semibold text-center mb-8">Top dishes near you</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// {food_list.map((item) => {
  
//   if (category==="all" || item.category===category){
//     return (
//       <FoodItem
//         key={item._id}
//         id={item._id}
//         name={item.name}
//         description={item.description}
//         price={item.price}
//         image={item.image}
//        handleAddToCart={handleAddToCart}
//       />
//     );
//   }
//   return null;
// })}

//         </div>
//       </div>
//     );
//   };
  
//   export default FoodDisplay;