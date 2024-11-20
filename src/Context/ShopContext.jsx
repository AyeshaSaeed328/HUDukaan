import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/getproducts');
        const data = await res.json();
        setProducts(data);
        console.log("Products Fetched");
      } catch (error) {
        console.error("Failed to fetch productss:", error);
      }
    };

    const fetchCart = async () => {
      try {
        const res = await fetch('http://localhost:4000/getcart', {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem("auth-token")}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });
        const data = await res.json();
        setCartItems(data);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };

    fetchProducts();
    
    if (localStorage.getItem("auth-token")) {
      fetchCart();
    }
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.new_price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
    if (localStorage.getItem("auth-token")) {
      try {
        const res = await fetch('http://localhost:4000/addtocart', {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem("auth-token")}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Failed to add item to cart:", error);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    
    if (localStorage.getItem("auth-token")) {
      try {
        const res = await fetch('http://localhost:4000/removefromcart', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': `${localStorage.getItem("auth-token")}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Failed to remove item from cart:", error);
      }
    }
  };
  const getCartItems = () => {
    let cart = [];
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          cart.push({ ...itemInfo, quantity: cartItems[item] });
        }
      }
    }
    return cart;
  }

  const contextValue = { products, getTotalCartItems, cartItems, addToCart, removeFromCart, getTotalCartAmount , getCartItems};
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
