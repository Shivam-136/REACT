import React from "react";

const Home = () => {
  return (
    <div className="p-10 space-y-10">

      {/* 🔥 Heading */}
      <div className="text-center   ">
        <h1 className="text-4xl font-bold   ">About Our Store 🛍️</h1>
        <p className="mt-4 text-gray-600 ">
          We provide the best products with top quality and affordable prices.
        </p>
      </div>

      {/* 💡 Features Section */}
      <div className="grid grid-cols-3 gap-6 text-center">
        <div className="p-5 shadow rounded border border-blue-800">
          <h2 className="text-xl font-bold ">🚚 Fast Delivery</h2>
          <p className="mt-2 text-sm text-gray-600">
            Get your products delivered quickly at your doorstep.
          </p>
        </div>

        <div className="p-5 shadow rounded border border-blue-800">
          <h2 className="text-xl font-bold ">💰 Best Prices</h2>
          <p className="mt-2 text-sm text-gray-600">
            Affordable prices with great discounts.
          </p>
        </div>

        <div className="p-5 shadow rounded border border-blue-800">
          <h2 className="text-xl font-bold">⭐ Quality Products</h2>
          <p className="mt-2 text-sm text-gray-600">
            We ensure high-quality products for our customers.
          </p>
        </div>
      </div>

      {/* 📞 Contact Section */}
      <div className="text-center bg-gray-100 p-6 rounded border border-blue-800">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="mt-2">Email: support@store.com</p>
        <p>Phone: +91 12345 67890</p>
      </div>

    </div>
  );
};

export default Home;