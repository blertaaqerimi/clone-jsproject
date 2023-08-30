import Background from '../assets/main.webp';

const HomePage = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom overflow-hidden bg-img d-flex flex-column justify-content-center"
      style={{
        background: `url(${Background})`
      }}>
      <h3 className="display-6 fw-bold text-body-emphasis">Eat well, feel better, save time.</h3>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Healthy, vegan dishes, delivered to you and ready in minutes.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a href="./all-products" className="btn btn-primary btn-lg px-4 me-sm-3">Shop all products</a>
        </div>
      </div>
    </div>

  )
};

export default HomePage;