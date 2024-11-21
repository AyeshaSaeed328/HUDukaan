import React from "react";

function Order() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 text-center w-full max-w-sm sm:max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold text-customPurple">
          Order Confirmed!
        </h1>
        <p className="text-gray-700 mt-4 text-sm sm:text-base">
          Thank you for your purchase! Your order has been successfully placed.
        </p>
        <div className="mt-6">
          <button
            className="w-full bg-customPurple hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-lg shadow"
            onClick={() => window.location.replace("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
