import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";

const ListPage = () => {
  const { url } = useContext(AdminContext);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch food list.");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeItem = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove-food`, {
        id: foodId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); // Refresh list after deletion
      } else {
        toast.error("Failed to delete item.");
      }
    } catch (error) {
      toast.error("Error deleting item.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-semibold text-center mb-5">All Food List</h2>
      <div className="overflow-x-auto">
        <div className="hidden md:grid grid-cols-5 bg-gray-800 text-gray-300 p-3 rounded-md">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 bg-gray-800 p-3 my-2 rounded-md"
            >
              <img
                src={`${url}/images/` + item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <p className="text-lg">{item.name}</p>
              <p className="text-gray-400">{item.category}</p>
              <p className="text-green-400 font-bold">${item.price}</p>
              <div className="flex gap-2">
                <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 text-white rounded">
                  Edit
                </button>
                <button
                  onClick={() => removeItem(item._id)}
                  className="bg-red-600 hover:bg-red-500 px-3 py-1 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 mt-5">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default ListPage;
