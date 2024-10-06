import React from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import Shimmer from './Shimmer';
import ProdCard from './ProdCard';
import { Link, useOutletContext } from 'react-router-dom';
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
                        {<ProdCard prodData={prod} />}

                        
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default ShopCategories;