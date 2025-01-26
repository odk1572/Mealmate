import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { STRIPE_REDIRECT_URL } from "../../constants";

const PlaceOrderPage = () => {
  const { getTotalCartAmount, token, foodList, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let orderItems = [];
    foodList.map((item) => {
      if (cartItems[item._id] > 0) {
        const itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      redirectUrl: STRIPE_REDIRECT_URL,
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    //! backend connection
    const response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (response.data.success) {
      alert("Order placed successfully");
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error placing order");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="bg-gray-900 text-white min-h-screen py-10 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0">
        {/* Delivery Information Section */}
        <div className="place-order-left flex-1 bg-gray-800 rounded-lg p-8 space-y-6 shadow-lg">
          <p className="text-2xl font-semibold text-orange-400">Delivery Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              required
              type="text"
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              placeholder="First Name"
              className="input-field"
            />
            <input
              required
              type="text"
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              placeholder="Last Name"
              className="input-field"
            />
          </div>
          <input
            required
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email Address"
            className="input-field"
          />
          <input
            required
            type="text"
            name="phoneNumber"
            onChange={onChangeHandler}
            value={data.phoneNumber}
            placeholder="Phone Number"
            className="input-field"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              required
              type="text"
              name="street"
              onChange={onChangeHandler}
              value={data.street}
              placeholder="Street"
              className="input-field"
            />
            <input
              required
              type="text"
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              placeholder="City"
              className="input-field"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              required
              type="text"
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              placeholder="State"
              className="input-field"
            />
            <input
              required
              type="text"
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              placeholder="Zip Code"
              className="input-field"
            />
            <input
              required
              type="text"
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              placeholder="Country"
              className="input-field"
            />
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="place-order-right w-full md:w-1/3 bg-gray-800 rounded-lg p-8 space-y-6 shadow-lg">
          <div className="cart-total">
            <h2 className="text-2xl font-semibold text-orange-400">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$ {getTotalCartAmount()}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>$ 2.00</p>
              </div>
              <hr className="border-gray-500" />
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>$ {getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 mt-6">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrderPage;
