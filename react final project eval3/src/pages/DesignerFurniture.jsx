import React from 'react';
import './DesignerFurniture.css';

const DesignerFurniture = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Stylish Furniture</title>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="Designer_Furniture.css" />
  <div className="hero-section">
    <div className="overlay">
      <h1>Products</h1>
      <p>Furnishing the places with wood beauty</p>
    </div>
  </div>
  <div className="container mt-5">
    {/* Chairs Section */}
    <h2 className="mb-4">Designer Chairs</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* Card 1 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\chair 1.jpg"
            className="card-img-top"
            alt="Chair 1"
          />
          <div className="card-body">
            <h5 className="card-title">Modern Chair</h5>
            <p className="card-text">
              A sleek and stylish modern chair perfect for any contemporary
              space.
            </p>
            <div className="card-rating">
              <span className="badge bg-success">4.5/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\chair 2.jpg"
            className="card-img-top"
            alt="Chair 2"
          />
          <div className="card-body">
            <h5 className="card-title">Classic Armchair</h5>
            <p className="card-text">
              A comfortable armchair with classic design elements for
              traditional decor.
            </p>
            <div className="card-rating">
              <span className="badge bg-warning text-dark">4.0/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\chair 3.jpg"
            className="card-img-top"
            alt="Chair 3"
          />
          <div className="card-body">
            <h5 className="card-title">Designer Chair</h5>
            <p className="card-text">
              An chair that combines comfort with space and its fancy design.
            </p>
            <div className="card-rating">
              <span className="badge bg-primary">4.8/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Tables Section */}
    <h2 className="mt-5 mb-4">Designer Tables</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* Card 1 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\table1.jpg"
            className="card-img-top"
            alt="Table 1"
          />
          <div className="card-body">
            <h5 className="card-title">Modern Dining Table</h5>
            <p className="card-text">
              A sleek dining table with a contemporary design to complement any
              dining area.
            </p>
            <div className="card-rating">
              <span className="badge bg-success">4.6/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\table2.jpg"
            className="card-img-top"
            alt="Table 2"
          />
          <div className="card-body">
            <h5 className="card-title">Classic Coffee Table</h5>
            <p className="card-text">
              A classic coffee table with elegant design elements for your
              living room.
            </p>
            <div className="card-rating">
              <span className="badge bg-warning text-dark">4.3/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\table3.jpg"
            className="card-img-top"
            alt="Table 3"
          />
          <div className="card-body">
            <h5 className="card-title">Personal Working Desk</h5>
            <p className="card-text">
              A desk designed for professionals, offering ample workspace and
              style.
            </p>
            <div className="card-rating">
              <span className="badge bg-primary">4.8/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sofas Section */}
    <h2 className="mt-5 mb-4">Designer Sofas</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* Card 1 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\sofa.jpg"
            className="card-img-top"
            alt="Sofa 1"
          />
          <div className="card-body">
            <h5 className="card-title">Luxury Sofa</h5>
            <p className="card-text">
              A luxurious leather sofa with a modern design perfect for upscale
              living rooms.
            </p>
            <div className="card-rating">
              <span className="badge bg-danger text-light">4.7/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\sofa 2.jpg"
            className="card-img-top"
            alt="Sofa 2"
          />
          <div className="card-body">
            <h5 className="card-title">Comfortable Sectional</h5>
            <p className="card-text">
              A comfortable sectional sofa with ample seating and cozy cushions.
            </p>
            <div className="card-rating">
              <span className="badge bg-info text-dark">4.5/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\sofa 1.jpg"
            className="card-img-top"
            alt="Sofa 3"
          />
          <div className="card-body">
            <h5 className="card-title">Elegent Drawing room sofa</h5>
            <p className="card-text">
              A stylish sofa for your spacious lobby and sitting.
            </p>
            <div className="card-rating">
              <span className="badge bg-secondary text-white">4.4/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Couches Section */}
    <h2 className="mt-5 mb-4">Designer Couches</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* Card 1 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\couche 1.jpg"
            className="card-img-top"
            alt="Couch 1"
          />
          <div className="card-body">
            <h5 className="card-title">Cozy Couch</h5>
            <p className="card-text">
              A cozy couch perfect for lounging and adding a touch of comfort to
              your space.
            </p>
            <div className="card-rating">
              <span className="badge bg-success">4.5/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\couche 2.jpg"
            className="card-img-top"
            alt="Couch 2"
          />
          <div className="card-body">
            <h5 className="card-title">Vintage Couch</h5>
            <p className="card-text">
              A vintage couch with timeless design, perfect for adding character
              to any room.
            </p>
            <div className="card-rating">
              <span className="badge bg-warning text-dark">4.2/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\couche 3.jpg"
            className="card-img-top"
            alt="Couch 3"
          />
          <div className="card-body">
            <h5 className="card-title">Modern Sectional Couch</h5>
            <p className="card-text">
              A modern sectional couch with modular design for versatile seating
              arrangements.
            </p>
            <div className="card-rating">
              <span className="badge bg-primary">4.6/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Beds Section */}
    <h2 className="mt-5 mb-4">Designer Beds</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* Card 1 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\bed 1.jpg"
            className="card-img-top"
            alt="Bed 1"
          />
          <div className="card-body">
            <h5 className="card-title">Elegant King Bed</h5>
            <p className="card-text">
              An elegant king bed designed to provide luxury and comfort for
              restful nights.
            </p>
            <div className="card-rating">
              <span className="badge bg-success">4.9/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\bed 2.jpg"
            className="card-img-top"
            alt="Bed 2"
          />
          <div className="card-body">
            <h5 className="card-title">Modern Queen Bed</h5>
            <p className="card-text">
              A modern queen bed with a minimalist design and premium materials.
            </p>
            <div className="card-rating">
              <span className="badge bg-warning text-dark">4.6/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col">
        <div className="card custom-card">
          <img
            src="D:\FEE-2\FEE - 2\src\components\bed 3.jpg"
            className="card-img-top"
            alt="Bed 3"
          />
          <div className="card-body">
            <h5 className="card-title">Classic Bed</h5>
            <p className="card-text">
              A classic single bed suitable for compact spaces and guest rooms.
            </p>
            <div className="card-rating">
              <span className="badge bg-primary">4.4/5</span>
            </div>
            <div className="thumbs">
              <button className="thumbs-up">👍</button>
              <button className="thumbs-down">👎</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
</>


   );
};

export default DesinerFurniture;
