<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> 09010f75f055cbc32180ad03c108de163a0fae36
import useOnlineStatus from '../utils/useOnlineStatus';
import Shimmer from './Shimmer';
import ProdCard from './ProdCard';
import { Link, useOutletContext } from 'react-router-dom';
<<<<<<< HEAD
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
=======
import { useState } from 'react';
import { products } from '../utils/products';

const ShopCategories = (cat, ...props) => {
    const { category } = cat;
    // const { listOfProd, filteredListOfProd, setFilteredListOfProd } = useProductList();
    // console.log(listOfProd);
    
    const [listOfProd, setListOfProd] = useState(products);
    const { filteredListOfProd, setFilteredListOfProd } = useOutletContext();

    

    const onlineStatus = useOnlineStatus();
    const displayProducts = filteredListOfProd || listOfProd;
>>>>>>> 09010f75f055cbc32180ad03c108de163a0fae36

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
<<<<<<< HEAD
=======
    
>>>>>>> 09010f75f055cbc32180ad03c108de163a0fae36

    return (
        <div>
            <h3 className="text-2xl font-medium text-center my-8">{category}</h3>
            <div className="flex flex-wrap mx-8 my-16 p-4">
                {displayProducts.map((prod) => (
                    <Link key={prod.id} to={"/product/" + prod.id}>
<<<<<<< HEAD
                        <ProdCard prodData={prod} />
=======
                        {<ProdCard prodData={prod} />}

                        
>>>>>>> 09010f75f055cbc32180ad03c108de163a0fae36
                    </Link>
                ))}
            </div>
        </div>
    );
};
<<<<<<< HEAD

export default ShopCategories;
=======
export default ShopCategories;
>>>>>>> 09010f75f055cbc32180ad03c108de163a0fae36
