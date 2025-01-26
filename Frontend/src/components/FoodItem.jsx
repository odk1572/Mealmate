import React, { useContext } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"; // Importing icons
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="food-item bg-gray-900 text-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-800">
      <div className="food-item-img-container relative mb-6">
        <img
          src={url + "/images/" + image}
          alt={name}
          className="food-item-image w-full h-64 object-cover rounded-lg"
        />
        {!cartItems[id] ? (
          <FaPlusCircle
            onClick={() => addToCart(id)}
            className="absolute top-3 right-3 text-white text-3xl cursor-pointer hover:scale-110 transition-transform"
          />
        ) : (
          <div className="food-item-counter absolute top-3 right-3 flex items-center space-x-2">
            <FaMinusCircle
              onClick={() => removeFromCart(id)}
              className="text-red-500 text-2xl cursor-pointer hover:scale-110 transition-transform"
            />
            <p className="text-lg text-white">{cartItems[id]}</p>
            <FaPlusCircle
              onClick={() => addToCart(id)}
              className="text-green-500 text-2xl cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        )}
      </div>
      <div className="food-item-info text-center">
        <div className="food-item-name-rating mb-4 flex justify-between items-center">
          <p className="text-xl font-semibold">{name}</p>
          <img
            src={assets.rating_starts}
            alt="rating"
            className="w-20 h-auto"
          />
        </div>
        <p className="food-item-desc text-gray-400 mb-4">{description}</p>
        <p className="food-item-price text-xl font-bold">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
