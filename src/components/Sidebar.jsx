import { Link } from "react-router-dom";

const Sidebar = ({ close }) => {
  const Menus = [
    { title: "All-Products", id: 1 },
    { title: "Clothing", id: 2 },
    { title: "Electronics", id: 3 },
    { title: "Merch", id: 4 },
    { title: "Stationary", id: 5 },
    { title: "Snacks", id: 6 },
  ];

  return (
    <div className="h-full w-[300px] p-2 pt-8 bg-white rounded-lg overflow-hidden">
      {/* Sidebar menu items */}
      <div className="flex flex-col items-start space-y-4 w-full">
        {Menus.map((Menu) => (
          <Link
            to={`/${Menu.title.toLowerCase()}`}
            key={Menu.id}
            onClick={() => close()
               
            } 
            className="w-full"
          >
            <div className="flex items-center gap-x-4 p-2 rounded-md cursor-pointer w-full text-gray-800 hover:bg-customPurple hover:text-white transform hover:scale-105 transition-all duration-200 ease-in-out">
              <div className="font-semibold text-lg w-full">{Menu.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
