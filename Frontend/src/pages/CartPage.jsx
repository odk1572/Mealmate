import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, foodList, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-5 sm:px-10 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 mb-6 text-sm sm:text-base">
            <p className="font-semibold">Items</p>
            <p className="font-semibold">Title</p>
            <p className="font-semibold">Price</p>
            <p className="font-semibold">Quantity</p>
            <p className="font-semibold">Total</p>
            <p className="font-semibold">Remove</p>
          </div>
          <hr className="border-gray-600 mb-4" />

          {foodList.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-6 gap-4 items-center mb-6 text-sm sm:text-base">
                  <img
                    src={url + "/images/" + item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 cursor-pointer text-xl"
                  >
                    &#10005;
                  </p>
                </div>
              );
            }
          })}
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Cart Total</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr className="border-gray-600" />
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount() > 40 ? 20 : 0}</p>
            </div>
            <hr className="border-gray-600" />
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</p>
            </div>
          </div>

          <button
            onClick={() => navigate("/order")}
            className="w-full mt-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition duration-300"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
          <p className="text-lg mb-4">If you have a promo code, enter it here</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition duration-300">
              APPLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
