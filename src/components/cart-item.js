import { useState } from "react";
import { updateCartItem, removeCartItem } from "../helpers/cart";

const CartItem = ({ item, setCart }) => {

  const [loading, setLoading] = useState(false);

  const handleDecrease = async () => {
    setLoading(true)
    const newCart = await updateCartItem(item.id, item.quantity - 1)
    setCart(newCart);
    setLoading(!true);
  };
  const handleIncrease = async () => {
    setLoading(true);
    const newCart = await updateCartItem(item.id, item.quantity + 1)
    setCart(newCart);
    setLoading(!true);
  };

  const handleRemove = async () => {
    const newCart = await removeCartItem(item.id)
    setCart(newCart);
  };

  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={item.variant.image.src}
              className="img-fluid rounded-3" alt={item.variant.image.alt} />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <a href={`product/${item.variant.product.handle}`} className="lead fw-normal mb-2 text-black text-decoration-none">{item.title}</a>
          </div>
          <div className="action-buttons col-md-3 col-lg-3 col-xl-2 d-flex align-content-center">
            <button disabled = {loading} onClick={handleDecrease} className="decrease-btn btn btn-link px-2">
              <i className="fas fa-minus"></i>
            </button>
            <p className="qty pt-1 pb-1 px-3 mt-2 border border-info-subtle">
              {loading ?
                <div className="text-center"><div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only"></span>
                </div></div> : item.quantity}
            </p>
            <button disabled = {loading}
              onClick={handleIncrease} className="increase-btn btn btn-link px-2">
              <i className="fas fa-plus"></i>

            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">${item.variant.price.amount}</h5>
          </div>
          <button onClick={handleRemove} className="delete-btn bg-transparent border-0 col-md-1 col-lg-1 col-xl-1 text-end">
            <span className="text-danger"><i className="fas fa-trash fa-lg"></i></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;