  import React, { useContext, useEffect } from "react";
  import axios from "axios";
  import { Product } from "../context/productContext";
  import ProductCard from "../components/ProductCard";

  const HomePage = () => {
    const { setProducts, products, cartItems } = useContext(Product);

    const fetchProducts = async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");

        // 🔥 convert price to high value
        const updated = res.data.map(p => ({
          ...p,
          price: p.price * 85 * 3
        }));

        setProducts(updated);
      } catch (error) {
        console.log("error in product apis", error);
      }
    };

    useEffect(() => {
      fetchProducts();
    }, []);

    return (
      <div className="p-6 bg-gray-100 dark:bg-black min-h-screen">
        
        <h1 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
          Premium Products 💎
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((elem) => {
            let isInCart = cartItems.find(val => val.id === elem.id)

            return (
              <ProductCard  
                key={elem.id}
                product={elem}
                quantity={isInCart?.quantity}
              />
            );
          })}
        </div>
      </div>
    );
  };

  export default HomePage;