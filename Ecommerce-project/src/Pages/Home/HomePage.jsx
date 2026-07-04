import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../Components/header";

import { ProductsGrid } from "./productsGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  /*useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);

      //.then((response)=>{
      //return response.json();
      //}).then((data)=>{
      //console.log(data)});
    });
  }, []);*/

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <title>Ecommerce Project</title>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
