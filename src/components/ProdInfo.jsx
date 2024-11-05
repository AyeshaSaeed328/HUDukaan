"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProdInfo() {
  const [products, setProducts] = useState([]);
  
  const fetchInfo = async () => {
    try {
      const res = await fetch('http://localhost:4000/getproducts');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const { prodId } = useParams();
  const product = products.find((prod) => prod.id === Number(prodId));
  const reviews = { href: "#", average: 4, totalCount: 117 };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb" className="max-w-2xl mx-auto px-4">
          <ol className="flex items-center space-x-2">
            {/* Example breadcrumb if you have data */}
            <li className="flex items-center">
              <Link to="/" className="text-sm text-gray-900">Home</Link>
              <svg className="w-4 h-5 text-gray-300" viewBox="0 0 16 20">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </li>
            <li className="text-sm text-gray-500">{product.name}</li>
          </ol>
        </nav>

        <div className="max-w-2xl mx-auto mt-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="max-w-2xl mx-auto px-4 pt-10">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-3xl">PKR{product.new_price || product.old_price}</p>

          <div className="flex items-center mt-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon
                key={i}
                className={`w-5 h-5 ${reviews.average > i ? "text-gray-900" : "text-gray-200"}`}
              />
            ))}
            <span className="ml-3 text-sm text-purple-600">
              {reviews.totalCount} reviews
            </span>
          </div>

          <button
            type="button"
            className="mt-8 w-full bg-customPurple text-white py-3 rounded-md"
          >
            Add to cart
          </button>

          <div className="py-10">
            <p className="text-base">{product.details}</p>

            <h3 className="text-sm font-medium mt-4">Highlights</h3>
            <ul className="list-disc pl-5 text-sm">
              {product.highlights?.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
