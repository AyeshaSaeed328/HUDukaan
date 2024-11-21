import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { cart_products } from "../utils/cart_products";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import Order from "./Order";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentType: "creditCard",
  });
  const { products, cartItems, removeFromCart, getTotalCartAmount, getCartItems } = useContext(ShopContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [emptyCart, setEmptyCart] = useState(false);
  const cart_products = getCartItems();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // const convertPriceToNumber = (priceString) => {
  //   return parseFloat(priceString.replace("$", ""));
  // };
  const addOrder = async () => {
    if (Object.keys(cartItems).length === 0) {
      setEmptyCart(true);
      setTimeout(() => {
        setEmptyCart(false);
      }, 3000);
      return;
    }

    if (localStorage.getItem("auth-token")) {
      try {
        const response = await fetch('http://localhost:4000/confirm', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': `${localStorage.getItem("auth-token")}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify() // Use requestData instead of undefined data
        });

        if (!response.ok) {
          throw new Error(`Error fetching /confirm: ${response.statusText}`);
        }

        setOrderPlaced(true);
        setTimeout(() => {
          setOrderPlaced(false);
          removeFromCart(null, true); // Reset the cart
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  

  

  const totalPrice = cart_products.reduce(
    (total, product) =>
      total + product.new_price * product.quantity,
    0
  );
  console.log(totalPrice);

  return (
    
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
      <div className="flex flex-col md:flex-row">
        
      <div className="md:w-1/2 bg-neutral-100 p-6 rounded-lg shadow-md mb-6 md:mb-0">
  <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
  <ul>
    {cart_products.map((product) => (
      <li key={product.id} className="flex items-center justify-between mb-3">
        {/* Image */}
        <img 
          src={product?.image} 
          alt={product?.name} 
          className="w-16 h-16 object-cover rounded mr-4" 
        />
        {/* Product Info */}
        <div className="flex-1">
          <span>{product.name} (x{product.quantity})</span>
        </div>
        {/* Price */}
        <span>PKR{product.new_price * product.quantity}</span>
        {console.log(product)}
      </li>
    ))}
    <li className="flex justify-between border-t border-gray-300 pt-4">
    <span>Shipping Charges</span>
    <span>Free Shipping</span>
  </li>
    <li className="flex justify-between font-bold  pt-4">
      <span>Total</span>
      <span>PKR{ totalPrice}</span>
    </li>
  </ul>
</div>

        {/* Shipping Information Form */}
        <div className="md:w-1/2 md:ml-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-customPurple focus:border-purple-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-customPurple focus:border-purple-900"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-customPurple focus:border-purple-900"
                required
              />
            </div>
            <div className="flex justify-between mb-4">
              <div className="w-1/2 pr-2">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-customPurple focus:border-purple-900"
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="postalCode"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-customPurple focus:border-purple-900"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-customPurple focus:border-purple-900"
                required
              />
            </div>

            {/* Payment Type */}
            <h3 className="text-xl font-semibold mb-4">Payment Type</h3>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentType"
                  value="creditCard"
                  checked={formData.paymentType === "creditCard"}
                  onChange={handleChange}
                  className="form-radio text-customPurple"
                />
                <span className="ml-2">Credit/Debit Card</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentType"
                  value="cashOnDelivery"
                  checked={formData.paymentType === "cashOnDelivery"}
                  onChange={handleChange}
                  className="form-radio text-customPurple"
                />
                <span className="ml-2">Cash on Delivery</span>
              </label>
            </div>
    <Link to={{ pathname: "/order", state: formData }}>
            <button
            type="button"
              className="w-full bg-customPurple text-white py-3 rounded-md font-semibold hover:bg-purple-900 transition duration-300 ease-in-out"
              onClick={() => addOrder()}
            >
              Place Order
            </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-customPurple hover:text-purple-900 transition duration-300 ease-in-out"
        >
          Back to Shopping
        </Link>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Checkout;
