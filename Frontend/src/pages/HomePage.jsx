import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";

import FoodDisplay from "../components/FoodDisplay";
const HomePage = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="bg-gray-900 text-white min-h-screen">
    

      {/* Explore Menu Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ExploreMenu category={category} setCategory={setCategory} />
        </div>
      </div>

      {/* Food Display Section */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <FoodDisplay category={category} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
