import React, { useContext } from "react";
import { Product } from "../context/productContext";
import ProductCard from "../components/ProductCard";

const CartPage = () => {
  let { cartItems } = useContext(Product);

  return (
    <div className="p-6 flex flex-wrap gap-6">

      {cartItems.length === 0 ? (
        <h2 className="text-xl">Cart is Empty</h2>
      ) : (
        cartItems.map((elem) => (
          <div key={elem.id}>

            {/* Product Card */}
            <ProductCard
              product={elem}
              quantity={elem.quantity}
            />

            {/* ⚡ Buy Now button (inside cart) */}
            <button
              className=" right-7  p-10 mt-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => alert(`Buying ${elem.title}`)}
            >
              Buy Now
            </button>

          </div>
        ))
      )}

    </div>
  );
};

export default CartPage;