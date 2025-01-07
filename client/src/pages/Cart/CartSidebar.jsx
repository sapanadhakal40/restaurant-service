/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { X, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, food_list, removeFromCart, deleteFromCart,  deliveryFee = 5.0 } = useContext(StoreContext);

  const navigate = useNavigate();

  // Get the food items added to the cart
  const cartDetails = Object.keys(cartItems).map((id) => {
    const item = food_list.find((food) => food._id === id);
    return { ...item, quantity: cartItems[id] };
  });

  const subtotal = cartDetails.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const total = subtotal + deliveryFee;


  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] ${!isOpen && "hidden"}`}
        onClick={onClose}
      />


      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[1000] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartDetails.length > 0 ? (
              cartDetails.map((item) => (
                <div
                  key={item._id}
                  className="bg-white p-4 rounded-lg shadow-sm mb-4 border"
                >
                  <div className="space-y-2">
                  <div className="flex gap-4 items-center">
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
          )}

                    <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-orange-600">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="bg-yellow-500 text-white px-3 py-1 text-sm rounded-md hover:bg-yellow-600"
                      >
                        Remove One
                      </button>
                      <button
                        onClick={() => deleteFromCart(item._id)}
                        className="bg-red-500 text-white px-3 py-1 text-sm rounded-md hover:bg-red-600"
                      >
                        Delete All
                      </button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-8">
                Your cart is empty.
              </p>
            )}
          </div>

          {/* Footer with total and checkout */}
          {cartDetails.length > 0 && (
            <div className="border-t p-4 bg-gray-50 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  Delivery Fee:
                </span>
                <span className="text-lg font-semibold">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold text-orange-600">
                  ${total.toFixed(2)}
                </span>
              </div>
              <button 
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
                onClick={() => navigate("/place-order", { state: { total, cartDetails } })}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;