import { useEffect, useState } from "react";
import client from '../shopify-client';
import ProductItem from "../components/product-item";

const ProductsList = () => {
  const [products, setProducts] = useState([]);


  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    return products;
  };

  useEffect(() => {
    console.log(products)
  }, [products])


  useEffect(() => {
    fetchAllProducts().then(prods => setProducts(prods))
  }, []);

  return (
    <div>
      {products.length > 0 ?
        (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">{products.map((product) => {
              return (
                  <ProductItem product = {product} test = {'abc'} />
              )
          })}</div>
        ) : (
          <div>Error fetching products</div>
        )}
    </div>
  )
};

export default ProductsList;