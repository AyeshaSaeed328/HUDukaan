import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import About from "./components/About";
import ShopCategories from "./components/ShopCategories";
import ProdInfo from "./components/ProdInfo";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Login from "./components/Login/Login";
import ShopContextProvider from "./Context/ShopContext";

// Lazy load Grocery (if used)
// const Grocery = React.lazy(() => import("./components/Grocery"));

// Define your routes here
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-products",
        element: <ShopCategories category="All Products" />,
        

      },
      {
        path: "/clothing",
        element: <ShopCategories category="Clothing" />,
        

      },
      {
        path: "/electronics",
        element: <ShopCategories category="Electronics"/>,

      },
      {
        path: "/search",
        element: <ShopCategories category="Search Results"/>,

      },
      {
        path: "/merch",
        element: <ShopCategories category="Merch" />,
        

      },
      {
        path: "/stationary",
        element: <ShopCategories category="Stationary" />,
        

      },
      {
        path: "/snacks",
        element: <ShopCategories category="Snacks" />,
        

      },
      {
        path:"/product/:prodId",
        element: <ProdInfo />,
    },
    {
      path:"/checkout",
      element: <Checkout />,
  },

      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={appRouter} />
    </ShopContextProvider>
  </React.StrictMode>
);

// Measure performance, if needed
reportWebVitals();
