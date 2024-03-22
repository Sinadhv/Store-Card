import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import api from '../services/config';

const ProductContext = createContext();

function ProductsProvider({children}) {
  
  const [products , setProducts] = useState([]);

  useEffect(()=>{

   const fetchProducts = async () => {
    try {
     setProducts(await api.get("/products"));
    } catch (error) {
      console.log(error.message);
    }
      
   };
   fetchProducts();

  }, []);
 
  return (
   <ProductContext.Provider value={products}>
    {children}
   </ProductContext.Provider>
  )
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

const useProductsDetails = id => {
  const products = useContext(ProductContext);
  const result = products.find((product) => product.id == id);
  return result ;
}

export default ProductsProvider;
export { useProducts, useProductsDetails };
