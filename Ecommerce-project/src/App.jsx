import axios from "axios";
import { HomePage } from "./Pages/Home/HomePage";
import { CheckoutPage } from "./Pages/checkout/CheckoutPage";
import { OrdersPage } from "./Pages/Orders/OrdersPage";
import "./App.css";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  /*useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
      // console.log(response.data);
    });
  }, []);*/

  const loadCart = async () => {
    const response = await axios.get("api/cart-items?expand=product");

    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />

      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="orders"
        element={<OrdersPage cart={cart} loadCart={loadCart} />}
      />
    </Routes>
  );
}

export default App;
