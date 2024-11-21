import { useState } from "react";
import control_img from "../Assets/control.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "All-Products", id: 1 },
    { title: "Clothing", id: 2 },
    { title: "Electronics", id: 3 },
    { title: "Merch", id: 4 },
    { title: "Stationary", id: 5 },
    { title: "Snacks", id: 6 },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-0"
      } h-screen p-4 pt-8 relative bg-neutral-100 transition-all duration-300 ease-in-out overflow-hidden`}
    >
      {/* Sidebar toggle button */}
      <img
        src={control_img}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full transition-all duration-300 ease-in-out ${
          !open ? "rotate-180" : ""
        }`}
        onClick={() => setOpen(!open)}
      />

      {/* Sidebar menu items */}
      <ul className="pt-6">
        {Menus.map((Menu) => (
          <Link to={`/${Menu.title.toLowerCase()}`} key={Menu.id}>
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-customPurple text-sm items-center gap-x-4 border-b-2 border-light-white`}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
