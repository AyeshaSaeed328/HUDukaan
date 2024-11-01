import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Added useLocation for route checking
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import { useState } from "react";
import { ShopContext } from "./Context/ShopContext";
import { useContext } from "react";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [filteredListOfProd, setFilteredListOfProd] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setFilteredListOfProd(products);
    }
  }, [products]);

  console.log(filteredListOfProd);

  return (
    <div>

      <div className="flex">
        <span>
          <Sidebar />
        </span>

        <div className="w-full">
          <Header context={{ filteredListOfProd, setFilteredListOfProd }}/>
          {location.pathname === "/" ? (
            <>
              <Hero />
              <NewArrivals />
            </>
          ) : (
            <Outlet context={{ filteredListOfProd, setFilteredListOfProd }} />
          )}
        </div>

      </div>
      <Footer />
    </div>


  );
};

export default App;
