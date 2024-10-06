import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Added useLocation for route checking
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import { useState } from "react";
import { products } from "./utils/products";

const App = () => {
  const location = useLocation();
  const [filteredListOfProd, setFilteredListOfProd] = useState(products);
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
