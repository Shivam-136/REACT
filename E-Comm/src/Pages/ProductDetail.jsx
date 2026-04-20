import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetail = () => {
  let { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 p-5">
      <div className="w-[90%] max-w-5xl bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-8  border border-red-600   ">

        {/* Left - Image */}
        <div className="flex-1 flex justify-center items-center">
          <img      
            src={singleProduct.image}
            alt=""
            className="h-80 object-contain"
          />
        </div>

        {/* Right - Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{singleProduct.title}</h1>

          <p className="text-gray-600">{singleProduct.description}</p>

          <p className="text-2xl text-green-600 font-semibold">
            ₹{singleProduct.price}
          </p>
          
          {/* Total Price */}
          <p className="text-lg text-gray-700">
            Total: ₹{(singleProduct.price * quantity).toFixed(2)}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;