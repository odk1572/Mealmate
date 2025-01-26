import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ErrorPage from "./ErrorPage";
import CartPage from "./pages/CartPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import Footer from "./components/Footer";
import AppDownload from "./components/AppDownload";
import LoginPopup from "./components/LoginPopup";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      
      {/* Main Container */}
      <div className="app flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        
        {/* Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<PlaceOrderPage />} />
            <Route path="/verify-payment" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>

      {/* App Download Section */}
      <AppDownload />
    </div>
  );
};

export default App;
