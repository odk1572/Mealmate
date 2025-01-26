import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${url}/api/order/verify`, {
        orderId,
        success,
      });

      if (response.data.success) {
        alert("Payment Successful!");
        navigate("/myorders");
      } else {
        alert("Payment Failed!");
        navigate("/");
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      alert("An error occurred while verifying the payment.");
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
