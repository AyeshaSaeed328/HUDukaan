import React, { useState, useEffect } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import Shimmer from './Shimmer';
import ProdCard from './ProdCard';
import { Link, useOutletContext } from 'react-router-dom';
import { products } from '../utils/products';

const ShopCategories = ({ category }) => {
    const [listOfProd, setListOfProd] = useState(products);
    const [displayProducts, setDisplayProducts] = useState(products);
    const { filteredListOfProd } = useOutletContext();

    const onlineStatus = useOnlineStatus();
    
    useEffect(() => {
        if (category === "All Products") {
            setDisplayProducts(filteredListOfProd || listOfProd);
        } else {
            setDisplayProducts(
                (filteredListOfProd || listOfProd).filter((prod) => prod.category === category)
            );
        }
    }, [category, filteredListOfProd, listOfProd]); // Run this effect when any of these dependencies change

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
