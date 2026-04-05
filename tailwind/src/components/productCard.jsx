import React from "react";

const ProductCard = ( { data, deleteCard }) => {
  return (
    <div className="border p-4 bg-black rounded-2xl text-white">
      
      <div className="h-55 w-55">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={data.image}
          alt=""/>
      </div>

      <h1>{data.name}</h1>
      <h1>$-{data.price}</h1>
      <h1>{data.category}</h1>
      <h1 >Quantity: {data.quantity}</h1>
      <button  onClick={() => deleteCard(data.id)}

        className="bg-red-500 text-white px-3 py-1 mt-3 rounded">
        Delete
      </button>

    </div>
  );
};

export default ProductCard;