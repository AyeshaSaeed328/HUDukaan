import { products } from "../utils/products";
import ProdCard from "./ProdCard";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewArrivals = () => {
  const [listOfProd, setlistOfProd] = useState(
    products.slice(0, 4)
  );

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
        <button className="bg-customPurple text-white font-bold py-2 px-4 m-6 rounded hover:bg-purple-500 text-lg block mx-auto mb-16">
          Shop More
        </button>
      </Link>
    </div>
  );
};
export default NewArrivals;
