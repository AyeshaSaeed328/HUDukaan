// import { useState, useEffect } from "react";
// import { productList_URL } from "../utils/constants";

// const useProductList = () => {
//     const [listOfProd, setListOfProd] = useState([]);
//     const [filteredListOfProd, setFilteredListOfProd] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetch(productList_URL);
//             const json = await data.json();

//             const products=json;
//             setListOfProd(products);
//             setFilteredListOfProd(products);
//         };

//         fetchData();
//     }, []);

//     return { listOfProd, filteredListOfProd, setFilteredListOfProd };
// };

// export default useProductList;
