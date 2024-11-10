// AboutUs.jsx
import React from 'react';
import './AboutUs.css'; // Ensure the path to your CSS file is correct

function AboutUs() {
  return (
    <div>
      <div className="main-image">
        <div className="heading">
          <h1 className="main-heading-h">About Us</h1>
        </div>
        <div className="under">
          <span className="sp1">Home</span>
          <span className="sp1">/</span>
          <span className="sp3">About Us</span>
        </div>
      </div>
      <br /><br /><br />

      <div className="container-a">
        <div className="left">
          <div className="image-container">
            <img
              src="D:\FEE-2\FEE - 2\src\components\img_52.jpg"
              alt="Image"
            />
          </div>
        </div>
        <div className="right">
          <h2>
            <i>Find Your Preferable Match Easily.</i>
            <span className="color-p">✶</span>
          </h2>
          <details>
            <summary className="sum">
              <u>Who we are?</u>
            </summary>
            <p className="detail-p">
              Epcot is a theme park at Walt Disney World Resort featuring exciting
              attractions, international pavilions, award-winning fireworks and
              seasonal special events.
            </p>
          </details>
          <details>
            <summary className="sum">
              <u>What’s our goal</u>
            </summary>
            <p className="detail-p">
              Epcot is a theme park at Walt Disney World Resort featuring exciting
              attractions, international pavilions, award-winning fireworks and
              seasonal special events.
            </p>
          </details>
          <details>
            <summary className="sum">
              <u>Our vision</u>
            </summary>
            <p className="detail-p">
              Epcot is a theme park at Walt Disney World Resort featuring exciting
              attractions, international pavilions, award-winning fireworks and
              seasonal special events.
            </p>
          </details>
          <a href="#" className="button">
            Contact us
          </a>
        </div>
      </div>
      <br /><br /><br />

      <div className="container-b">
        <div className="item">
          <h2>
            <span id="projectHandover">720k+</span>
          </h2>
          <p>Project handover</p>
        </div>
        <div className="item">
          <h2>
            <span id="lowInterest">1.3%</span>
          </h2>
          <p>Low interest</p>
        </div>
        <div className="item">
          <h2>
            <span id="happyCustomers">1.9mil+</span>
          </h2>
          <p>Happy customers</p>
        </div>
      </div>
      <br /><br />

      <div className="main-container">
        <h1 className="main-heading-z">Buy, Rent & Sell</h1>
        <p className="main-paragraph">
          Over 745K listings of apartments, lots, plots - available today.
        </p>
        <div className="flex-container">
          <div className="flex-item">
            <img
              src="D:\FEE-2\FEE - 2\src\components\icon_01.76e69ba4.svg"
              alt="Icon 1"
              className="icon"
            />
            <h2 className="item-heading">Buy a home</h2>
            <p className="item-description">
              Explore homy’s 2 million+ homes and uncover your ideal living space
              with us.
            </p>
            <button className="find-home-button">
              <b>Find Home</b>
            </button>
          </div>
          <div className="flex-item">
            <img
              src="D:\FEE-2\FEE - 2\src\components\icon_02.e0efe402.svg"
              alt="Icon 2"
              className="icon"
            />
            <h2 className="item-heading">RENT A HOME</h2>
            <p className="item-description">
              Discover a rental you'll love on homy, thanks to 35+ filters and
              tailored keywords.
            </p>
            <button className="find-home-button">
              <b>Rent Home</b>
            </button>
          </div>
          <div className="flex-item">
            <img
              src="D:\FEE-2\FEE - 2\src\components\icon_03.a4b83c0a.svg"
              alt="Icon 3"
              className="icon"
            />
            <h2 className="item-heading">SELL PROPERTY</h2>
            <p className="item-description">
              List, sell, thrive – with our top-notch real estate agency. It’s
              super easy & fun.
            </p>
            <button className="find-home-button">
              <b>Sell Property</b>
            </button>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />

      <div className="container-d">
        <h1>Easily Purchase, Sell, or Lease listings.</h1>
        <div className="dd">
          <p className="zz">
            Your leading real estate advocate, transforming houses into dreams.
            Trust us to expertly guide you home.
          </p>
        </div>
        <div className="box">
          <div className="logo">
            <img
              className="logoo"
              src="D:\FEE-2\FEE - 2\src\components\icon_41.c775f773.svg"
              alt=""
            />
          </div>
          <i className="fas fa-user-plus"></i>
          <h2>Property Insurance</h2>
          <p>Elit esse cillum dol fug nulla tur nos ullamo.</p>
        </div>
        <div className="box">
          <div className="logo">
            <img
              className="logoo"
              src="D:\FEE-2\FEE - 2\src\components\icon_42.137e7f22.svg"
              alt=""
            />
          </div>
          <i className="fas fa-home"></i>
          <h2>Easy Payments</h2>
          <p>Quis nostrud exerct ulla security finibus ne derived.</p>
        </div>
        <div className="box">
          <div className="logo">
            <img
              className="logoo"
              src="D:\FEE-2\FEE - 2\src\components\icon_40.58924ca0.svg"
              alt=""
            />
          </div>
          <i className="fas fa-check-circle"></i>
          <h2>Quick Process</h2>
          <p>Duis aute irure do reprehe de Cicero's voluptat velit.</p>
        </div>
      </div>
      <br /><br /><br /><br /><br />

      <div className="container-c">
        <div className="left">
          <h2>Rely on Clients, Not Just Our Claims.</h2>
          <div className="star">
            <div className="rating">9.3</div>
          </div>
        </div>
        <div className="right">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#ffcc00',
              }}
            ></div>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'red',
              }}
            ></div>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'blue',
              }}
            ></div>
          </div>
          <p>
            Quick solutions coupled with extraordinary{' '}
            <span className="highlight">performance</span> a recommendation
            that's unequivocal.
          </p>
          <div className="author">
            <img src="https://via.placeholder.com/50" alt="Author" />
            <div className="author-info">
              <div className="author-name">Musa Delimuza</div>
              <div className="author-role">CEO, XYZ Real Estate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
