import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetail = () => {
  let { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const convertPrice = (price) => {
    return (price * 85 * 3).toFixed(0);
  };

  let getSingleProduct = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("Error in api", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (!singleProduct) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  const price = convertPrice(singleProduct.price);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-black p-5">
      
      <div className="w-full max-w-5xl bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 flex flex-col md:flex-row gap-10">

        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <img src={singleProduct.image} className="h-80 object-contain" />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-4 text-black dark:text-white">
          <h1 className="text-2xl font-bold">{singleProduct.title}</h1>

          <p className="text-gray-600 dark:text-gray-300">
            {singleProduct.description}
          </p>

          {/* 💰 Premium Price UI */}
          <div className="flex items-center gap-3">
            <span className="text-3xl text-green-600 font-bold">
              ₹{price}
            </span>

            <span className="line-through text-gray-500">
              ₹{(price * 1.5).toFixed(0)}
            </span>

            <span className="text-red-500 font-semibold">
              33% OFF
            </span>
          </div>

          {/* Quantity */}
          <div className="flex gap-3">
            <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          {/* Total */}
          <p className="text-lg">
            Total: ₹{(price * quantity).toFixed(0)}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;