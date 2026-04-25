import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { Product } from "../context/productContext";

const ProductCard = ({ product, quantity }) => {
  let { pathname } = useLocation();
  let navigate = useNavigate();
  let { setCartItems } = useContext(Product);

  // ➕ Increase Quantity
  const increaseQty = () => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease Quantity
  const decreaseQty = () => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if 0
    );
  };

  return (
    <div className="w-72 bg-white rounded-2xl shadow-md overflow-hidden border border-red-600 ml-10 mt-10">
      
      {/* Image */}
      <div
        onClick={() => navigate(`/products/details/${product.id}`)}
        className="h-48 w-full overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <span className="text-xl font-bold text-green-600">
          ₹{product.price}
        </span>

        {/* 🔥 Quantity Section */}
        {pathname === "/cart" || quantity ? (
          (pathname== '/'?<div className="flex items-center justify-between mt-4">
            
            <button
              onClick={decreaseQty}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              -
            </button>

            <span className="text-lg font-semibold">
              {product.quantity || quantity}
             
            </span>

            <button
              onClick={increaseQty}
              className="px-3 py-1 bg-green-500 text-white rounded"
            > 
              +
            </button>
          </div>: <div className="borde text-black "> Productquantity - {product.quantity || quantity}</div>)

        ) : (
          <button
            onClick={() =>
              setCartItems((prev) => [...prev, { ...product, quantity: 1 }])
            }
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;