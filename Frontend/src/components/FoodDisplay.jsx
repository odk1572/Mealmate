import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  // Filter food items based on the selected category
  const filteredFoodList = category === "All" ? foodList : foodList?.filter(item => item.category === category);

  return (
    <div className="food-display bg-gray-900 text-white py-16 px-6 dark:bg-gray-800" id="food-display">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Discover Your Next Meal with MealMate
      </h2>
      <p className="text-lg text-center text-gray-400 mb-10">
        Explore our curated selection of top dishes near you. Whether you're craving comfort food or something new, MealMate brings the best of local cuisine straight to your table.
      </p>
      
      {filteredFoodList.length === 0 ? (
        <p className="text-center text-gray-400">No dishes found in this category.</p>
      ) : (
        <div className="food-display-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredFoodList.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
