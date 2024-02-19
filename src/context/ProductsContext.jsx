import React from 'react'
import { useEffect } from 'react';
import api from '../services/config';

const ProductsProvider = createContext();

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
   <ProductsContext.Provider value={products}>
    {children}
   </ProductsContext.Provider>
  )
}

export default ProductsProvider
