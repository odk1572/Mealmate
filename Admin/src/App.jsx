import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddPage from "./pages/AddPage";
import ListPage from "./pages/listPage";
import {OrderPage} from "./pages/orderPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Toast Container for notifications */}
      <ToastContainer />

      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-[18%] bg-gray-900 border-r border-gray-700">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-800 text-gray-300">
          <Routes>
            <Route path="/add" element={<AddPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </div>
      </div>

      {/* Optional Footer */}
      {/* <footer className="bg-gray-900 p-4 text-center text-gray-500">Your Footer Content</footer> */}
    </div>
  );
};

export default App;
