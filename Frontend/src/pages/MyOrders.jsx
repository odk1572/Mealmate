import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from '../assets/assets'

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  // Fetching data from the API
  const fetchData = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/myorder",
        {},
        {
          headers: { token },
        }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className="my-orders py-10 bg-gray-900 text-white dark:bg-gray-800 mt-20">
      <h2 className="text-3xl font-semibold text-center mb-8">My Orders</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((order, index) => (
            <div
              key={index}
              className="my-orders-order bg-gray-700 p-4 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <img src={assets.parcel_icon} alt="Parcel" className="w-12 h-12" />
              <div className="flex-1">
                <p className="text-sm text-gray-400">
                  {order.items.map((item, idx) => {
                    return `${item.name} X ${item.quantity}${
                      idx !== order.items.length - 1 ? ", " : ""
                    }`;
                  })}
                </p>
                <p className="text-lg text-white mt-2">${order.amount}.00</p>
                <p className="text-sm text-gray-400">Items: {order.items.length}</p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-sm text-gray-400 flex items-center space-x-2">
                  <span>&#x25cf;</span>
                  <b className="text-white">{order.status}</b>
                </p>
                <button
                  onClick={fetchData}
                  className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500 focus:outline-none"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
