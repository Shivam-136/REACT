import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { Product } from "../context/productContext";

const ProductCard = ({ product, quantity }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(Product);


  const addToCart = () => {
    const exist = cartItems.find(item => item.id === product.id);

    if (exist) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  // ➕ Increase
  const increaseQty = () => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease
  const decreaseQty = () => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="w-full max-w-xs bg-white  dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Image */}
      <div
        onClick={() => navigate(`/products/details/${product.id}`)}
        className="h-48  w-full overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 text-black dark:text-white">
        
        <h2 className="text-sm font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <span className="text-lg font-bold text-green-600">
          ₹{product.price}
        </span>

        {/* 🔥 Cart Logic */}
        {quantity ? (
          <div className="flex items-center justify-between mt-3">
            
            <button
              onClick={decreaseQty}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -
            </button>

            <span className="text-lg font-semibold">
              {quantity}
            </span>

            <button
              onClick={increaseQty}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={addToCart}
            className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        )}

        {/* 👇 Show quantity in cart page */}
        {pathname === "/cart" && (
          <p className="text-sm text-gray-400 mt-2">
            Quantity: {quantity}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;