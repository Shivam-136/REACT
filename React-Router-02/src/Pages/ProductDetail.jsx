import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();

  return (
    <div>
      <h1 className="text-7xl ">I am product detail - {id}</h1>


    
    </div>
  );
};
export default ProductDetail;