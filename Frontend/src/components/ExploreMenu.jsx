import { menu_list } from "../assets/assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="py-10 px-5 text-center" id="explore-menu">
            <h1 className="text-3xl font-bold text-white-800">Discover Your Perfect Meal</h1>
            <p className="mt-9 text-white-600 max-w-2xl mx-auto">
                Explore a variety of delicious meals handpicked just for you. At <span className="font-semibold text-red-500">Meal Mate</span>, we bring flavors from around the world to satisfy every craving!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                {menu_list.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} 
                        className="cursor-pointer flex flex-col items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                    >
                        <img 
                            className={`w-24 h-24 object-cover rounded-full border-4 transition duration-300 ${category === item.menu_name ? "border-red-500" : "border-transparent"}`} 
                            src={item.menu_image} 
                            alt={item.menu_name} 
                        />
                        <p className="mt-2 font-medium text-white-700">{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr className="mt-6 border-t border-gray-300 w-3/4 mx-auto" />
        </div>
    );
}

export default ExploreMenu;
