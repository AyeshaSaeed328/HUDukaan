
import ProdCard from "./ProdCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const NewArrivals = () => {

  const { products } = useContext(ShopContext);
  const [listOfProd, setlistOfProd] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      setlistOfProd(products.slice(0, 4));
    }
  }, [products]);
  

  return (
    <div>
      <h3 className="text-2xl font-medium text-center mt-16">New Arrivals</h3>
      <div className="flex flex-wrap mx-8 mt-8 p-4">
        {listOfProd.map((prod) => (
          <Link key={prod.id} to={"/product/" + prod.id}>
            <ProdCard prodData={prod} />
          </Link>
        ))}
      </div>
      <Link to="/all-products">
        <button className="bg-customPurple text-white font-bold py-2 px-4 m-6 rounded hover:bg-purple-900 text-lg block mx-auto mb-16">
          Shop More
        </button>
      </Link>
    </div>
  );
};
export default NewArrivals;
