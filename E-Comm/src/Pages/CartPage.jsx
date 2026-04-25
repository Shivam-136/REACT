import React, { useContext } from "react";
import { Product } from "../context/productContext";
import { useNavigate } from "react-router";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(Product);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ❌ Remove item
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // 🛒 Buy Now
  const handleBuy = () => {
    alert("Order Placed Successfully ✅");
    setCartItems([]); // clear cart
    navigate("/"); // go home
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-black min-h-screen text-black dark:text-white">

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <h2 className="text-xl">Cart is Empty</h2>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">

          {/* 🛒 Left - Items */}
          <div className="flex-1 flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  className="h-24 w-24 object-contain"
                />

                <div className="flex flex-col justify-between flex-1">
                  <h2 className="font-semibold">{item.title}</h2>

                  <p>₹{item.price} × {item.quantity}</p>

                  <p className="text-green-500 font-bold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* ❌ Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 💳 Right - Summary */}
          <div className="w-full lg:w-80 bg-white dark:bg-gray-900 p-6 rounded-lg shadow h-fit">

            <h2 className="text-xl font-bold mb-4">Price Details</h2>

            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span className="text-green-500">Free</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            {/* 🔥 Buy Button */}
            <button
              onClick={handleBuy}
              className="w-full mt-5 bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Buy Now 🛒
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default CartPage;