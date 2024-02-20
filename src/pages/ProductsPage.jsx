import {useProducts} from "../context/ProductsContext";



function ProductsPage() {

 const products = useProducts();
 console.log(products);
  return (
    <div>
      <p>products</p>
    </div>
  )
}

export default ProductsPage;
