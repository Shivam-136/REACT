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

            <ProductCard
              product={elem}
              quantity={elem.quantity}
            />
         

          </div>
        ))
      )}

    </div>
  );
};

export default CartPage;