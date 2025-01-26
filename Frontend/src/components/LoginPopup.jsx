import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { FaTimes } from "react-icons/fa"; // Import the close icon from React Icons
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Login");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = `${url}/api/user/${currentState.toLowerCase()}`;

    try {
      const response = await axios.post(newUrl, userData);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred during the request. Please try again.");
      console.log(error);
    }
  };

  const switchState = (newState) => {
    setCurrentState(newState);
    setUserData({ name: "", email: "", password: "" });
  };

  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] grid place-items-center">
      <form
        onSubmit={onLogin}
        className="flex flex-col gap-6 px-6 py-8 border rounded-lg bg-orange-100 w-96"
      >
        {/* Logo - Centered and Slightly Bigger */}
        <div className="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="70" height="70">
            {/* Pizza Slice Background */}
            <path d="M50 200 L150 50 L250 200 Z" fill="#FF6347" />
            {/* Stylized Toppings */}
            <circle cx="120" cy="130" r="15" fill="#FFA500" />
            <circle cx="180" cy="160" r="10" fill="#FFA500" />
            <circle cx="150" cy="100" r="20" fill="#FFA500" />
            {/* Bite Mark */}
            <path d="M150 50 L130 80 Q110 100, 150 120 Z" fill="#FF4500" />
            {/* Text */}
            <text x="150" y="250" 
              textAnchor="middle" 
              fontFamily="Arial, sans-serif" 
              fontSize="20" 
              fontWeight="bold" 
              fill="black">
              MealMate
            </text>
          </svg>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl text-orange-600">{currentState}</h2>
          {/* Replace the img tag with React Icon */}
          <FaTimes
            onClick={() => setShowLogin(false)}
            className="text-xl cursor-pointer"
          />
        </div>

        <div className="flex flex-col mt-6 gap-5 p-1 my-4">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              className="p-2 border-2 border-orange-500 rounded-md text-center"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            className="p-2 border-2 border-orange-500 rounded-md text-center"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            className="p-2 border-2 border-orange-500 rounded-md text-center"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 font-bold my-4">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of the use and privacy policy.
          </p>
        </div>

        <button
          type="submit"
          className="text-base w-full px-3 py-2 border-2 border-solid bg-orange-300 border-orange-500 rounded-xl hover:bg-orange-600 hover:text-white"
        >
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="mt-4 text-center">
          {currentState === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => switchState("Login")}
                className="cursor-pointer text-orange-600 font-semibold"
              >
                Click here.
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => switchState("Sign Up")}
                className="cursor-pointer text-orange-600 font-semibold"
              >
                Create account.
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
