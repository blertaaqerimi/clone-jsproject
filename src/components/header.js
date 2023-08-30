import { NavLink } from "react-router-dom";

const Header = ({ lineItems }) => {
  const totalQuantity = lineItems.length > 0 ? lineItems.reduce((prev, current) => {
    return prev + current.quantity
  }, 0) : 0;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 px-4">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">Home</a> */}
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link" href="/all-products">All Products</a> */}
              <NavLink className="nav-link" to="/all-products">All Products</NavLink>
            </li>
          </ul>
          <div className="position-relative">
            {/* <a href="cart"> */}
            <NavLink className="nav-link" to="/cart">
              <i className="bi bi-cart fs-5"></i>
            </NavLink>
            {/* </a> */}
            <span className="header-cart-quantity position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success">
              {totalQuantity}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Header;