// Cart.js
"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CartItem from "./CartItem"; // Import the CartItem component
import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
// import { cart_products } from "../utils/cart_products";

export default function Cart({ open, setOpen }) {
  const { products, cartItems, removeFromCart, getTotalCartAmount, getCartItems } = useContext(ShopContext);
  
  useEffect(() => {
    getCartItems();
  }, [cartItems]);
  const cart_products = getCartItems();
  
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      <DialogPanel className="fixed inset-y-0 right-0 max-w-md w-screen pointer-events-auto bg-white shadow-xl">
        <div className="flex flex-col h-full overflow-y-scroll">
          <header className="flex justify-between p-6">
            <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-500">
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </header>
          <ul className="flex-1 px-6 divide-y divide-gray-200">
            {cart_products.map((product) =>  {
                return (
                  <CartItem 
                    key={product.id} 
                    product={product} 
                    quantity={product.quantity} 
                    removeFromCart={removeFromCart} 
                  />
                );
              
            })}
          </ul>
          <footer className="border-t border-gray-200 p-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>PKR {getTotalCartAmount}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="flex justify-center mt-6">
              <Link
                to="/checkout"
                className="w-72 flex justify-center rounded-md bg-customPurple text-white px-8 py-3 font-medium shadow-sm hover:bg-purple-900 transition duration-300"
                onClick={() => setOpen(false)}
              >
                Checkout
              </Link>
            </div>
            <div className="flex justify-center mt-6 text-sm text-gray-500">
              <button onClick={() => setOpen(false)} className="font-medium text-customPurple hover:text-purple-900">
                Continue Shopping &rarr;
              </button>
            </div>
          </footer>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
