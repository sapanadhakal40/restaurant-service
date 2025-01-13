/* eslint-disable react/prop-types */
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  if (!setCategory) {
    console.error("setCategory prop is missing");
    return null;
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Menu
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fresh & Delicious Options for Every Taste
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {menu_list.map((item, index) => (
            <div
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div
                onClick={() => setCategory(prev => prev === item.menu_name ? "all" : item.menu_name)}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className={`
                  relative rounded-full overflow-hidden mb-4 shadow-md
                  transition-all duration-300 transform
                  group-hover:shadow-xl group-hover:-translate-y-2
                  ${category === item.menu_name ? "ring-4 ring-orange-500" : ""}
                `}>
                  <div className="w-32 h-32 sm:w-40 sm:h-40">
                    <img
                      src={item.menu_image || "/path/to/default-image.jpg"}
                      alt={item.menu_name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className={`
                  font-medium text-lg text-center transition-colors duration-300
                  ${category === item.menu_name ? "text-orange-500" : "text-gray-800"}
                `}>
                  {item.menu_name}
                </h3>
                <div className={`
                  w-12 h-0.5 mt-2 transition-all duration-300
                  ${category === item.menu_name ? "bg-orange-500" : "bg-gray-300 group-hover:bg-orange-300"}
                `}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {menu_list.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-xl">
              No menu categories available.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreMenu;
































// import { menu_list } from "../../assets/assets"


// // eslint-disable-next-line react/prop-types
// const ExploreMenu = ({category, setCategory}) => {
//     if (!setCategory) {
//         console.error("setCategory prop is missing");
//         return null;
//       }
//     return (
//       <div className="container mx-auto px-4 py-12" id="explore-menu">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold mb-2">Explore Menu</h1>
//           <p className="text-gray-600">Fresh & Delicious</p>
//         </div>
        
//         <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
//           {menu_list.map((item, index) => (
//             <div 
//           onClick={() => setCategory(prev => prev === item.menu_name ? "all" : item.menu_name)}
//              key={index} 
//              className="flex flex-col items-center group cursor-pointer">

//               <div className={`rounded-full overflow-hidden mb-3 ${
//                 category === item.menu_name ? "border-4 border-orange-500" : ""
//               }`}>
                
              
//                 <img
//                   src={item.menu_image || "/path/to/default-image.jpg"}
//                   alt={item.menu_name}
//                   className="w-30 h-30 object-cover group-hover:scale-105 transition-transform duration-300 category===item.menu_name?border-4 border-orange-500:0"

//                 />
//               </div>
//               <h3 className="font-medium text-center">{item.menu_name}</h3>
//               {/* <p className="text-orange-500 font-semibold mt-1">${item.price}</p> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

// export default ExploreMenu