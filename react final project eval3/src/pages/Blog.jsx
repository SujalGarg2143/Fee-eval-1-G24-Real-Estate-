import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog</title>
  <link rel="stylesheet" href="Blog.css" />
  <div className="main-img">
    <div className="over-img">
      <h1 className="main-h">
        <i>
          <u>Blogs</u>
        </i>
      </h1>
    </div>
  </div>
  <br />
  <div className="left-column">
    {/* Blog Post 1 */}
    <div className="left-container">
      <div className="left-img">
        <img
          className="left-image"
          src="src/assets/images/Blog/img3.jpg"
          alt="Chip and Joanna Gaines' Latest Fixer-Upper"
        />
      </div>
      <div className="content">
        <div className="category">
          <b>Tips &amp; Tricks</b>
        </div>
        <div className="date">August 26, 2024</div>
        <h2 className="left-h2">
          Some of the most Essential Tips for First-Time Homebuyers
        </h2>
        <p
          data-short-text="Navigating the journey of buying your first home can be both exciting and overwhelming. To help you make informed decisions and avoid common pitfalls..."
          data-full-text="Navigating the journey of buying your first home can be both exciting and overwhelming. To help you make informed decisions and avoid common pitfalls, here are some effective tips for first-time homebuyers. From understanding your credit score to budgeting wisely and exploring available assistance programs, these insights will empower you to approach the homebuying process with confidence and clarity."
        >
          Navigating the journey of buying your first home can be both exciting
          and overwhelming. To help you make informed decisions and avoid common
          pitfalls...
        </p>
        <a href="#" className="read-more">
          Read More →
        </a>
      </div>
    </div>
    <br />
    {/* Blog Post 2 */}
    <div className="left-container">
      <div className="left-img">
        <img
          className="left-image"
          src="src/assets/images/Blog/left-img3.jpg"
          alt="Chip and Joanna Gaines' Latest Fixer-Upper"
        />
      </div>
      <div className="content">
        <div className="category">
          <b>Investment</b>
        </div>
        <div className="date">August 28, 2024</div>
        <h2 className="left-h2">
          Profitable Pathways: Real Estate Investment Strategies Every Beginner
          Should Know
        </h2>
        <p
          data-short-text="Real estate investing can be a powerful way to build wealth and create passive income..."
          data-full-text="Real estate investing can be a powerful way to build wealth and create passive income. Whether you're looking to invest in rental properties, flip houses, or get started in commercial real estate, there are many opportunities available."
        >
          Real estate investing can be a powerful way to build wealth and create
          passive income...
        </p>
        <a href="#" className="read-more">
          Read More →
        </a>
      </div>
    </div>
    <br />
    {/* Blog Post 3 */}
    <div className="left-container">
      <div className="left-img">
        <img
          className="left-image"
          src="src/assets/images/Blog/left-img5.jpeg"
          alt="Chip and Joanna Gaines' Latest Fixer-Upper"
        />
      </div>
      <div className="content">
        <div className="category">
          <b>Buying Tips</b>
        </div>
        <div className="date">August 29, 2024</div>
        <h2 className="left-h2">5 Essential Tips for Buying Your Dream Home</h2>
        <p
          data-short-text="Buying a home is a significant investment and a life-changing decision..."
          data-full-text="Buying a home is a significant investment and a life-changing decision. Whether you're a first-time buyer or an experienced homeowner, navigating the real estate market can be daunting."
        >
          Buying a home is a significant investment and a life-changing
          decision...
        </p>
        <a href="#" className="read-more">
          Read More →
        </a>
      </div>
    </div>
    <br />
    {/* Blog Post 4 */}
    <div className="left-container">
      <div className="left-img">
        <img
          className="left-image"
          src="src/assets/images/Blog/left-img2.jpg"
          alt="Chip and Joanna Gaines' Latest Fixer-Upper"
        />
      </div>
      <div className="content">
        <div className="category">
          <b>Interior Design</b>
        </div>
        <div className="date">August 31, 2024</div>
        <h2 className="left-h2">The Importance of Interior Design</h2>
        <p
          data-short-text="When it comes to real estate, first impressions matter..."
          data-full-text="When it comes to real estate, first impressions matter. The aesthetic appeal of a property can significantly influence potential buyers or renters. This is where interior design plays a crucial role. Thoughtful and strategic interior design not only enhances the visual appeal of a space but also increases its market value."
        >
          When it comes to real estate, first impressions matter...
        </p>
        <a href="#" className="read-more">
          Read More →
        </a>
      </div>
    </div>
  </div>
  <div className="right-column">
    <div className="right-container1">
      <div className="search">
        <input className="inp-sr" type="text" placeholder="Search" />
      </div>
      <div className="search-icon">
        <img
          className="search-img"
          src="https://img.icons8.com/?size=100&id=12773&format=png&color=000000"
          alt=""
        />
      </div>
    </div>
    {/* Categories */}
    <div className="right-container2">
      <p className="right2-heading">
        <b>
          <u>Categories</u>{" "}
        </b>
      </p>
      <p className="right2-p">⇾ Market Updates(112)</p>
      <p className="right2-p">⇾ Buying Tips(13)</p>
      <p className="right2-p">⇾ Interior Inspiration(42)</p>
      <p className="right2-p">⇾ Investment Insights(32)</p>
      <p className="right2-p">⇾ Home Construction (93)</p>
      <p className="right2-p">⇾ Trend Watch(14)</p>
    </div>
    {/* Recent Posts */}
    <div className="right-container4">
      <p className="right2-heading">
        <b>
          <u>Recent Posts</u>{" "}
        </b>
      </p>
      <div className="post">
        <img
          src="src/assets/images/Blog/home-interior1.jpg"
          alt="Post Image"
          className="post-image"
        />
        <div className="post-content">
          <div className="post-date">September 2, 2024</div>
          <div className="post-title">
            Key Real Estate Trends To Watch In 2024
          </div>
        </div>
      </div>
      <div className="post">
        <img
          src="src/assets/images/Blog/home-interior2.jpg"
          alt="Post Image"
          className="post-image"
        />
        <div className="post-content">
          <div className="post-date">September 1, 2024</div>
          <div className="post-title">
            Expert Tips For Profitable Real Estate Investments.
          </div>
        </div>
      </div>
      <div className="post">
        <img
          src="src/assets/images/Blog/home-interior3.jpg"
          alt="Post Image"
          className="post-image"
        />
        <div className="post-content">
          <div className="post-date">August 28, 2024</div>
          <div className="post-title">
            10 Steps To Prepare For A Successful Real Estate...
          </div>
        </div>
      </div>
    </div>
    {/* Keywords */}
    <div className="right-container3">
      <p className="right3-heading">
        <b>
          <u>Keywords</u>{" "}
        </b>
      </p>
      <br />
      <div className="right-flexcontainer">
        <div className="right-flexitems">Market</div>
        <div className="right-flexitems">Property</div>
        <div className="right-flexitems">Finance</div>
        <div className="right-flexitems">Invest</div>
        <div className="right-flexitems">Legal</div>
        <div className="right-flexitems">Realty</div>
      </div>
    </div>
  </div>
  <br />
  <br />
  {/* Pagination */}
  <div className="pagination">
    <a href="#" className="page-number">
      ←
    </a>
    <a href="#" className="page-number active">
      1
    </a>
    <a href="#" className="page-number">
      2
    </a>
    <a href="#" className="page-number">
      3
    </a>
    <a href="#" className="page-number">
      4
    </a>
    <a href="#" className="page-number">
      →
    </a>
  </div>
  
  
</>

   );
};

export default Blog;
