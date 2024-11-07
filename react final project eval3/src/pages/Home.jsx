import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="content">
                    <h1>We will find a perfect home for you</h1>
                    <p>Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you.</p>
                </div>
                <div className="side-image">
                    <img src="src/assets/images/bg/slider-1.png" alt="Right Image" />
                </div>
            </div>

            {/* fetured properties */}

            <div className="container2">
                <div className="featured_prop">
                    <h2>Featured Properties</h2>
                </div>
                <div className="property_options">
                    <ul>
                        <li>Houses</li>
                        <li>Smart Homes</li>
                        <li>Apartments</li>
                        <li>Villas</li>
                        <li>Bungalow</li>
                    </ul>
                </div>
                <div className="featured_prop_cards">
                    <div className="card">
                        <img src="src/assets/images/house/featured-2.jpg" alt="Card Image" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Willowcrest Manor</h3>
                            <p className="card-text">
                                <span className="card-address"><i className="fa-solid fa-map"></i> Address: 123 Maple Street, Elmwood, CA</span><br />
                                <span className="card-price">$950,000</span><br />
                                <span className="card-details"><i className="fa-solid fa-bed"></i> Bedrooms: 4 | <i className="fa-solid fa-bath"></i> Bathrooms: 3 | <i className="fa-solid fa-tape"></i> Area: 2,800 sq.ft.</span>
                            </p>
                            <a href="/property-details/willowcrest_manor" className="card-button">View</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="src/assets/images/house/featured-3.jpg" alt="Rosewood Estate" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Rosewood Estate</h3>
                            <p className="card-text">
                                <span className="card-address"><i className="fa-solid fa-map"></i> Address: 456 Oak Avenue, Springfield, IL</span><br />
                                <span className="card-price">$1,200,000</span><br />
                                <span className="card-details"><i className="fa-solid fa-bed"></i> Bedrooms: 5 | <i className="fa-solid fa-bath"></i> Bathrooms: 4 | <i className="fa-solid fa-tape"></i> Area: 3,500 sq.ft.</span>
                            </p>
                            <a href="/property-details/rosewood-estate" target="_blank" className="card-button">View</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="src/assets/images/house/featured-4.jpg" alt="Maple Grove Villa" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Maple Grove Villa</h3>
                            <p className="card-text">
                                <span className="card-address"><i className="fa-solid fa-map"></i> Address: 789 Pine Street, Lakeside, FL</span><br />
                                <span className="card-price">$850,000</span><br />
                                <span className="card-details"><i className="fa-solid fa-bed"></i> Bedrooms: 4 | <i className="fa-solid fa-bath"></i> Bathrooms: 3 | <i className="fa-solid fa-tape"></i> Area: 2,900 sq.ft.</span>
                            </p>
                            <a href="/property-details/maple-grove-villa" target="_blank" className="card-button">View</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="src/assets/images/house/featured-5.jpg" alt="Birchwood Mansion" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Birchwood Mansion</h3>
                            <p className="card-text">
                                <span className="card-address"><i className="fa-solid fa-map"></i> Address: 234 Elm Road, Cedarville, TX</span><br />
                                <span className="card-price">$2,000,000</span><br />
                                <span className="card-details"><i className="fa-solid fa-bed"></i> Bedrooms: 6 | <i className="fa-solid fa-bath"></i> Bathrooms: 5 | <i className="fa-solid fa-tape"></i> Area: 4,200 sq.ft.</span>
                            </p>
                            <a href="/property-details/birchwood-mansion" target="_blank" className="card-button">View</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="src/assets/images/house/featured-6.jpg" alt="Cedar Ridge House" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Cedar Ridge House</h3>
                            <p className="card-text">
                                <span className="card-address"><i className="fa-solid fa-map"></i> Address: 567 Willow Lane, Oakwood, GA</span><br />
                                <span className="card-price">$980,000</span><br />
                                <span className="card-details"><i className="fa-solid fa-bed"></i> Bedrooms: 5 | <i className="fa-solid fa-bath"></i> Bathrooms: 3 | <i className="fa-solid fa-tape"></i> Area: 3,000 sq.ft.</span>
                            </p>
                            <a href="/property-details/cedar-ridge-house" target="_blank" className="card-button">View</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="src/assets/images/house/featured-7.jpg" alt="Oakview Manor" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Oakview Manor</h3>
                            <p className="card-text">
                                <span className="card-address"><i className="fa-solid fa-map"></i> Address: 890 Aspen Court, Willowbrook, NY</span><br />
                                <span className="card-price">$1,700,000</span><br />
                                <span className="card-details"><i className="fa-solid fa-bed"></i> Bedrooms: 5 | <i className="fa-solid fa-bath"></i> Bathrooms: 5 | <i className="fa-solid fa-tape"></i> Area: 4,000 sq.ft.</span>
                            </p>
                            <a href="/property-details/oakview-manor" target="_blank" className="card-button">View</a>
                        </div>
                    </div>


                </div>
            </div>

            {/* categories */}

            <div className="container4">
                <div className="content4">
                    <h2>Featured Categories</h2>
                    <p>Find your dream apartment with our listing</p>
                </div>
                <div className="container4_img">
                    <div className="image-container">
                        <a href="#" target="_blank" className="image_link">
                            <div className="image-wrapper">
                                <img src="src/assets/images/img - box/find-home5-1.jpg" alt="Image 1" className="centered-image" />
                                <div className="image-overlay"></div>
                                <div className="image-text">California</div>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="image_link">
                            <div className="image-wrapper">
                                <img src="src/assets/images/img - box/find-home5-2.jpg" alt="Image 2" className="centered-image" />
                                <div className="image-overlay"></div>
                                <div className="image-text">Texas</div>
                            </div>
                        </a>
                    </div>

                    <div className="image-container">
                        <a href="#" target="_blank" className="image_link">
                            <div className="image-wrapper">
                                <img src="src/assets/images/img - box/find-home5-3.jpg" alt="Image 3" className="centered-image" />
                                <div className="image-overlay"></div>
                                <div className="image-text">New York</div>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="image_link">
                            <div className="image-wrapper">
                                <img src="src/assets/images/img - box/find-home5-4.jpg" alt="Image 4" className="centered-image" />
                                <div className="image-overlay"></div>
                                <div className="image-text">Florida</div>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="image_link">
                            <div className="image-wrapper">
                                <img src="src/assets/images/img - box/find-home5-5.jpg" alt="Image 5" className="centered-image" />
                                <div className="image-overlay"></div>
                                <div className="image-text">Illinois</div>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="image_link">
                            <div className="image-wrapper">
                                <img src="src/assets/images/img - box/find-home5-6.jpg" alt="Image 6" className="centered-image" />
                                <div className="image-overlay"></div>
                                <div className="image-text">Georgia</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* testimonials */}

            <div className="container6">
                <div className="content6">
                    <div className="heading6">From our happy customers</div>
                    <div className="text6">
                        From our satisfied customers: testimonials that reflect our commitment to excellence.
                    </div>
                    <div className="carousel6">
                        <div className="carousel-wrapper6">
                            <div className="carousel-item6">
                                <div className="circle-image6">
                                    <img src="src/assets/images/testimonials/1.jpg" alt="Testimonial 1" />
                                </div>
                                <div className="section-text6">
                                    Exceptional service and attention to detail made finding our dream home effortless.
                                </div>
                            </div>
                            <div className="carousel-item6">
                                <div className="circle-image6">
                                    <img src="src/assets/images/testimonials/2.jpg" alt="Testimonial 2" />
                                </div>
                                <div className="section-text6">
                                    A seamless experience from start to finish - highly recommended for all your real estate needs.
                                </div>
                            </div>
                            <div className="carousel-item6">
                                <div className="circle-image6">
                                    <img src="src/assets/images/testimonials/3.jpg" alt="Testimonial 3" />
                                </div>
                                <div className="section-text6">
                                    Professional, knowledgeable, and dedicated - the best choice for buying or selling a home.
                                </div>
                            </div>
                            <div className="carousel-item6">
                                <div className="circle-image6">
                                    <img src="src/assets/images/testimonials/4.jpg" alt="Testimonial 4" />
                                </div>
                                <div className="section-text6">
                                    Guided us through every step with expertise, making our home purchase stress-free.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default Home;
