import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import cart_icon from "../Assets/cart-logo.PNG";
import comp_logo from "../Assets/comp-logo.PNG";
import search_icon from "../Assets/search.png";
import { ShopContext } from "../Context/ShopContext";
import Cart from "./Cart";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom';


export default function Header({ context }) {
  const [showCart, setShowCart] = useState(false);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { products, getTotalCartItems } = useContext(ShopContext);
  const [listOfProd, setListOfProd] = useState(products);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();


  const CloseSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (products.length > 0) {
      setListOfProd(products);
    }
  }, [products]);

  const { filteredListOfProd, setFilteredListOfProd } = context;

  const handleSearch = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    const filtered = listOfProd.filter((prod) =>
      prod.name.toLowerCase().includes(newSearchText.toLowerCase())
    );
    setFilteredListOfProd(filtered);
  };
  const handleSearchBarClick = () => {
    navigate('/search');
  };
  

  return (
    <Disclosure as="nav" className="bg-customPurple">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      {/* Left Section: DisclosureButton */}
      <div className="flex items-center">
        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setIsOpen(true)}>
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
          <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
        </DisclosureButton>
      </div>

      {/* Center Section: Logo and Links */}
      <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start space-x-4">
        <Link to="/" className="flex items-center">
          <img alt="Your Company" src={comp_logo} className="h-8 w-auto" />
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">
            Home
          </Link>
          <Link
            to="/contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      {/* Right Section: Search, Cart, and Online Status */}
      <div className="hidden sm:flex items-center space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          className="w-96 h-8 py-2 px-4 border text-gray-900 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          onClick={handleSearchBarClick}
        />
        {/* <Link to="/search">
          <button
            id="search-btn"
            className="bg-customPurple rounded-lg text-white border border-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out">
            <img className="h-7 rounded-md" src={search_icon} />
          </button>
        </Link> */}

        {/* Conditional Login/Logout Button */}
        {localStorage.getItem("auth-token") ? (
          <button
            id="login-btn"
            className="bg-customPurple text-white text-xs p-2 rounded-lg ml-3 h-8 border border-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}>
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button className="bg-customPurple text-white text-xs p-2 h-8 rounded-lg ml-3 border border-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out">
              Login
            </button>
          </Link>
        )}

        {/* Online Status */}
        <div className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          {onlineStatus ? "🟢" : "🔴"}
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <button
            onClick={() => setShowCart(true)}
            className="relative flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <img alt="Cart" src={cart_icon} className="h-8 w-8 rounded-full" />
            <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white text-xs">
              {getTotalCartItems()}
            </span>
          </button>
          {showCart && <Cart open={showCart} setOpen={setShowCart} />}
        </div>
      </div>
    </div>
  </div>


      {isOpen && <DisclosurePanel className="fixed top-0 left-0 w-80 h-full bg-white z-50">
        <button className="absolute top-4 right-4 text-l font-bold text-customPurple"
        onClick={CloseSidebar}>
          X

        </button>

  <div className="space-y-1 px-2 pb-3 pt-16">
    <Link
      to="/"
      onClick={CloseSidebar}
      className="block rounded-md px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-customPurple hover:text-white transition duration-300 ease-in-out"
    >
      Home
    </Link>

    <Link
      to="/contact"
      onClick={CloseSidebar}
      className="block rounded-md px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-customPurple hover:text-white transition duration-300 ease-in-out"
    >
      Contact
    </Link>

    {localStorage.getItem("auth-token") ? (
      <button
        onClick={() => {
          localStorage.removeItem("auth-token");
          window.location.replace("/");
          CloseSidebar();
        }}
        className="block rounded-md px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-customPurple hover:text-white transition duration-300 ease-in-out"
      >
        Logout
      </button>
    ) : (
      <Link
        to="/login"
        onClick={CloseSidebar}
        className="block rounded-md px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-customPurple hover:text-white transition duration-300 ease-in-out"
      >
        Login
      </Link>
    )}
    <Sidebar close={() => setIsOpen(false)} />
  </div>
</DisclosurePanel>}

    </Disclosure>
  );
}
