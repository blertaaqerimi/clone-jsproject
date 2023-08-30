import CartItem from "../components/cart-item";
const Cart = ({ cart, setCart }) => {


  if (!cart) {
    return null;
  }
  return (
    <section className="h-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="card-body p-4">
              <div className="float-end">
                <p className="mb-0 me-5 d-flex align-items-center">
                  <span className="small text-muted me-2">Order total:</span> <span className="total lead fw-normal">{cart.totalPrice.amount}</span>
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
            
              {cart.lineItems.length > 0 ? <div>{cart.lineItems.map((item, index) => {
                return <CartItem setCart = {setCart} item= {item} key={index}/>
              })}</div> :
                <div className='card my-3'>
                  <div className='card-body d-flex justify-content-between'>
                    <button type='button' className='btn btn-block btn-lg'><h2 className='text-danger'>Cart is empty!</h2>
                    </button><a href='/all-products' className='btn btn-success d-flex align-items-center justify-content-center'><h4>Continue shopping</h4></a>
                  </div>
                </div>}
              <div className="card card-pay">
                <div className="card-body">
                  <a href={cart.webUrl} type="button" className="pay btn btn-warning btn-block btn-lg">Proceed to Pay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart