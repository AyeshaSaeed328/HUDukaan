import React, { useState, useEffect } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import Shimmer from './Shimmer';
import ProdCard from './ProdCard';
import { Link, useOutletContext } from 'react-router-dom';
import { ShopContext } from "../Context/ShopContext";
import { useContext } from 'react';

const ShopCategories = ({ category }) => {
    
    const { products } = useContext(ShopContext);
    console.log(products);
    const [displayProducts, setDisplayProducts] = useState(products);
    const { filteredListOfProd } = useOutletContext();
    const [listOfProd, setListOfProd] = useState(products);

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        // Check if `products` has loaded, then set initial state for display
        if (products.length > 0) {
            setDisplayProducts(products);
            setListOfProd(products);
        }
    }, [products]);

    
    useEffect(() => {
        if (category === "All Products" || category === "Search Results") {
            setDisplayProducts(filteredListOfProd);
        } else {
            setDisplayProducts(
                (filteredListOfProd).filter((prod) => prod.category.toLowerCase() === category.toLowerCase())
            );
        }
    }, [filteredListOfProd, category]);

    if (onlineStatus === false) {
        return (
            <div>
                <h1>Looks like you are offline</h1>
            </div>
        );
    }

    if (listOfProd.length === 0) {
        return <Shimmer />;
    }

    return (
        <div>
            <h3 className="text-2xl font-medium text-center my-8">{category}</h3>
            <div className="flex flex-wrap mx-8 my-16 p-4">
                {displayProducts.map((prod) => (
                    <Link key={prod.id} to={"/product/" + prod.id}>

                        <ProdCard prodData={prod} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShopCategories;

