import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products?limit=4");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="p-6 space-y-10 ">

      <div className=" from-blue-500 to-purple-600 text-black p-2 rounded-xl text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Store 🛒</h1>
        <p className="mt-3">Best products at best prices</p>
        <button className="mt-5 bg-white text-black px-5 py-2 rounded">
          Shop Now
        </button>
      </div>

      <div className="text-center ">
        <h2 className="text-2xl font-semibold">Explore More Products</h2>
        <p className="mt-2">Click below to visit shop page</p>
        <a href="/shop">
          <button className="mt-4 bg-black text-white px-6 py-2 rounded">
            Go to Shop
          </button>
        </a>
      </div>

      <div >
        <h2 className="text-2xl font-bold mb-5  ">Featured Products</h2>
        <div className="grid grid-cols-4 gap-5  ">
          {products.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg   border-b-blue-800">
              <img src={item.image} className="h-32 mx-auto " />
              <h3 className="mt-2 text-sm">{item.title}</h3>
              <p className="text-green-600 font-bold">₹ {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;  