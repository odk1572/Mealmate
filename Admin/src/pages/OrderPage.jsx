import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets.js";
import { AdminContext } from "../context/AdminContext.jsx";

const OrderPage = () => {
  const [data, setData] = useState([]);
  const { url } = useContext(AdminContext);

  //! Fetch Orders from Backend
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setData(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //! Update Order Status
  const orderStatusUpdate = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value,
      });

      if (response.data.success) {
        await fetchData();
      }
    } catch (error) {
      console.log("Error updating order status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h3 className="text-2xl font-semibold text-center mb-5">Order Page</h3>

      <div className="space-y-4">
        {data.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 bg-gray-800 p-4 rounded-md border border-gray-700"
          >
            {/* Parcel Icon */}
            <img
              src={assets.parcel_icon}
              alt="Parcel"
              className="w-16 h-16 object-cover"
            />

            {/* Order Details */}
            <div>
              <p className="font-semibold text-gray-300">
                {order.items
                  .map((item, index) =>
                    index === order.items.length - 1
                      ? `${item.name} x ${item.quantity}`
                      : `${item.name} x ${item.quantity}, `
                  )
                  .join("")}
              </p>
              <p className="font-medium mt-2 text-white">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="text-gray-400 text-sm">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                {order.address.phoneNumber}
              </p>
            </div>

            {/* Order Items & Amount */}
            <p className="text-green-400 font-bold">Items: {order.items.length}</p>
            <p className="text-yellow-400 font-bold">Amount: ${order.amount}</p>

            {/* Order Status Dropdown */}
            <select
              onChange={(e) => orderStatusUpdate(e, order._id)}
              value={order.status}
              className="bg-gray-700 text-white border border-gray-600 px-3 py-2 rounded-md outline-none"
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
