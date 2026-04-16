import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

 useEffect(() => {
  const getProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  getProduct();
}, [id]);

if (!product) {
  return <h1>Loading...</h1>;
}

  return (
    <div className="p-5 text-black border w-150 ml-50 rounded-2xl mt-5">
      <h1 className="text-4xl mb-5">{product.title}</h1>
      <img src={product.image} alt="" className="w-60 mb-5" />
      <h2 className="text-2xl text-green-400">₹ {product.price}</h2>
      <p className="mt-4">{product.description}</p>
      <button className="bg-blue-500 px-6 py-2 mt-2 rounded hover:bg-blue-600">Bye Now</button>
    </div>
  );
};

export default ProductDetail;