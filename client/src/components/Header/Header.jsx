 import header_food from '../../assets/header_img.webp'
// import header_food from '../../assets/header_img.png'


const Header = () => {
  return (
    <div className="relative h-[80vh]">
      <img
        src={header_food}
        alt="header_img"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Delicious Food Delivered
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Order your favorite meals straight to your doorstep
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-medium transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header