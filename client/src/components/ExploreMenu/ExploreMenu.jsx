import { menu_list } from "../../assets/assets"


// eslint-disable-next-line react/prop-types
const ExploreMenu = ({category, setCategory}) => {
    if (!setCategory) {
        console.error("setCategory prop is missing");
        return null;
      }
    return (
      <div className="container mx-auto px-4 py-12" id="explore-menu">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Explore Menu</h1>
          <p className="text-gray-600">Fresh & Delicious</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {menu_list.map((item, index) => (
            <div 
          onClick={() => setCategory(prev => prev === item.menu_name ? "all" : item.menu_name)}
             key={index} 
             className="flex flex-col items-center group cursor-pointer">

              <div className={`rounded-full overflow-hidden mb-3 ${
                category === item.menu_name ? "border-4 border-orange-500" : ""
              }`}>
                
              
                <img
                  src={item.menu_image || "/path/to/default-image.jpg"}
                  alt={item.menu_name}
                  className="w-30 h-30 object-cover group-hover:scale-105 transition-transform duration-300 category===item.menu_name?border-4 border-orange-500:0"

                />
              </div>
              <h3 className="font-medium text-center">{item.menu_name}</h3>
              {/* <p className="text-orange-500 font-semibold mt-1">${item.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ExploreMenu