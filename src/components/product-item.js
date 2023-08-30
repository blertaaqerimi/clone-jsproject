import noimg from '../assets/No_image_available.svg.png'
const ProductItem = (props) => {
  console.log(props)
  return (
      <div className="col">
      <div className="card shadow-sm">
        <img style={{width: '100%'}} src={props.product.variants[0].image?.src || noimg} alt='product imfo' />
        <div className="card-body">
          <h4 className='ellipsis-container'>{props.product.title}</h4>
          <p className="ellipsis-container card-text">{props.product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={`/product/${props.product.handle}`} type="button" className="btn btn-sm btn-outline-secondary">View</a>
            </div>
            <b className="text-body-secondary">${props.product.variants[0].price.amount}</b>
          </div>
        </div>
      </div>
    </div>

  )
};

export default ProductItem;