import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";

const AddPage = () => {
  const { url } = useContext(AdminContext);
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      await axios.post(`${url}/api/food/add`, formData);
      setData({ name: "", description: "", price: "", category: "Salad" });
      setImage("");
      toast.success("Product added successfully");
    } catch (error) {
      toast.error("Error adding product");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (assuming it's a component already) */}
      <div className="w-[18%] bg-gray-900 border-r border-gray-700">
        {/* Sidebar content here */}
      </div>

      {/* Right-side form */}
      <div className="w-full md:w-[82%] p-6 bg-gray-900 text-gray-300 ml-[18%]">
        <form className="flex flex-col gap-6 bg-gray-900 p-6 rounded-lg shadow-lg" onSubmit={onSubmitHandler}>
          {/* Image Upload */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-400">Upload Image</p>
            <label htmlFor="image" className="cursor-pointer">
              <img
                className="w-32 h-32 object-cover rounded-lg border border-gray-700 hover:border-rose-500 transition"
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Upload"
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">Product Name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Type here..."
              className="p-3 bg-gray-800 text-white rounded-md outline-none focus:ring focus:ring-rose-500"
            />
          </div>

          {/* Product Description */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">Product Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="5"
              placeholder="Write content here..."
              className="p-3 bg-gray-800 text-white rounded-md outline-none focus:ring focus:ring-rose-500"
            ></textarea>
          </div>

          {/* Category & Price */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category */}
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-gray-400">Product Category</p>
              <select
                onChange={onChangeHandler}
                name="category"
                className="p-3 bg-gray-800 text-white rounded-md outline-none focus:ring focus:ring-rose-500"
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg Pasta">Pure Veg Pasta</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Product Price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                type="number"
                name="price"
                placeholder="$"
                className="p-3 bg-gray-800 text-white rounded-md outline-none focus:ring focus:ring-rose-500 w-32"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-32 p-3 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition font-semibold"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
