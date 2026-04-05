import React from "react";

const Navbar = () => {
  return (
  

    <div className="flex rounded-xl justify-between bg-blue-700 text-white p-1.5" >

      <div id="logo" className="size-12">
        <img src="https://static.vecteezy.com/system/resources/previews/018/779/928/original/3d-illustration-of-amazon-logo-free-png.png" alt="" />
      </div>

      <div className="flex gap-4 p-2 text-3xl text-black" >
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Cart</p>
      </div>
      <div className="p-2 flex gap-4  text-3xl text-white">login</div>
    </div>
  );
};

export default Navbar;