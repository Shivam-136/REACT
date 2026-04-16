import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log("error in p api", error);
      }
    })();
  }, []);

  return (
    <div className="h-full p-4 grid grid-cols-4 gap-5 ">
      {products.map((elem) => {
        return <ProductCard product={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default Shop;