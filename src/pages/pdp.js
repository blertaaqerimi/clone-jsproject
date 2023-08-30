import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import client from "../shopify-client";
import {addCartItem} from "../helpers/cart"

const ProductPage = (props) => {
  const {handle} = useParams();

  const [product, setProduct] = useState({
    images: [],
    title: "",
    description: "",
    variants: []
  });

  const { images, title, description, variants} = product;

  useEffect(() => {
    console.log(product)
  }, [product])

  useEffect(() => {
    client.product.fetchByHandle(handle).then((productData) => {
      setProduct(productData)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) {
    return ( <div>
      Nuk u gjete produkti!
    </div>)
  }
  const handleOnClick = async() => {
    await addCartItem(product.variants[0].id, 1);
    window.location.href = '/cart';
  }
  return (
    <div>
      <div>
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        {images?.length > 0 && <img src={images[0].src} alt={images[0].alt} className="img-fluid" />}
      </div>
      <div className="col-md-6">
        <h1>{title}</h1>
        <p>{description}</p>
        <p><strong>Price: {variants[0]?.price?.amount}</strong></p>
        <button  onClick = {handleOnClick} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>

  
    <div className="row mt-4">
      <div className="col">
        <h2>Additional Images</h2>
      </div>
    </div>
  
    <div className="row mt-2">
      {images?.length > 1 && images.slice(1).map((img, index) => {
         return (
         <div key={index} className="col-md-6">
            <img src={img.src} alt="Additional" className="img-fluid" />
          </div>)
        })}
      </div>
    </div>
    </div>
    </div>
  )
};

export default ProductPage;