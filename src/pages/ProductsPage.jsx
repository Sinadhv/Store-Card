import { useState } from "react";
import {ImSearch} from "react-icons/im";
import {FaListUl} from "react-icons/fa";

import Card from "../components/Card";
import Loader from "../components/Loader";
import {useProducts} from "../context/ProductsContext";

import styles from "./ProductsPage.module.css";
import { useEffect } from "react";


function ProductsPage() {

 const products = useProducts();

 const [displayed , setDisplayed] = useState([])

 const [search , setSearch] = useState("");

 const [query , setQuery] = useState({});

 useEffect (() => {
  setDisplayed(products);
 }, [products]);

 useEffect (() =>{
  console.log(query);
 } , [query]);

 const searchHandler = () => {
   setQuery((query) => ({ ...query , search}));
 };

 const categoryHandler = (event) => {
  const {tagName} = event.target;
  const category =event.target.innerText.toLowerCase();

  if (tagName != "LI" )return;
   setQuery((query) => ({ ...query , category})); 
 };

  return (
   <>
   <div>
    <input 
    type="text" 
    placeholder="Search..." 
    value={search} 
    onChange={e => setSearch(e.target.value.toLowerCase().trim())}
    />
    <button onClick={searchHandler}>
     <ImSearch />
     </button>
   </div>
    <div className={styles.container}>
     <div className={styles.products}>
      {!displayed.length && <Loader />}
      {displayed.map((p) =>(
       <Card key={p.id} data={p}/>
      ))}
     </div>
     <div>
      <div>
       <FaListUl />
       <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
       <li>All</li>
       <li>Electronies</li>
       <li>Jewelery</li>
       <li>Mens Clothing</li>
       <li>Womens Clothing</li>
      </ul>
     </div>
    </div>
   </>
  )
}

export default ProductsPage;
