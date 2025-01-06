
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, deleteFromCart } = useContext(StoreContext);

  // Get the food items added to the cart
  const cartDetails = Object.keys(cartItems).map((id) => {
    const item = food_list.find((food) => food._id === id);
    return { ...item, quantity: cartItems[id] };
  });

  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Your Cart</h2>
      
      {cartDetails.length > 0 ? (
        cartDetails.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
             
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-semibold text-orange-600">${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
              <div className="flex gap-2">
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-yellow-500 text-white px-3 py-2 rounded-md hover:bg-yellow-600"
                >
                  Remove One
                </button>
                <button
                  onClick={() => deleteFromCart(item._id)}
                  className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                >
                  Delete All
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
