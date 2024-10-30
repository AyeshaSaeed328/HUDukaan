import React from "react";
import bin from "../Assets/bin.png";

const CartItem = ({ product, quantity, removeFromCart }) => {
  return (
    <div className="cart-item border-b py-4">
      <div className="flex justify-between items-center">
      
        <div className="flex-1 font-semibold">Product</div>
        <div className="flex-1 font-semibold text-center">Qty</div>
        <div className="flex-1 font-semibold text-center">Total</div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center flex-1">
          <img
            className="cartitems-product-icon w-16 h-16 object-cover"
            src={product.image}
            alt={product.name}
          />
          <p className="cartitems-product-title ml-4 font-semibold">{product.name}</p>
        </div>
        <div className="flex-1 text-center">
          <button className="cartitems-quantity font-thin">{quantity}</button>
        </div>
        <div className="flex-1 text-center">
          <p className="mt-1 font-thin">PKR {product.new_price * quantity}</p>
        </div>
        <img
          onClick={() => removeFromCart(product.id)}
          className="cartitems-remove-icon w-6 h-6 cursor-pointer"
          src={bin}
          alt="Remove"
        />
      </div>
    </div>
  );
};

export default CartItem;
