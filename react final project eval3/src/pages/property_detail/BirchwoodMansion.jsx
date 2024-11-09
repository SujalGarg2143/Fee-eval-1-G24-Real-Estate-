import React from 'react';
import './BirchwoodMAnsion.css';

const BirchwoodMansion = () => {
    return (
        <div>
            <div className="head-property-details">
                <div className="left-section">
                    <h2>Birchwood Mansion</h2>
                    <span className="sale">For sale</span>
                    <div className="address-and-year">
                        <span><i className="fa-solid fa-map"></i> 234 Elm Road, Cedarville, TX</span>
                        <span> | <i className="fa-regular fa-calendar"></i> 2.5 years ago</span>
                    </div>
                    <div className="property-stats">
                        <span><i className="fa-solid fa-bed"></i> Beds: 6</span>
                        <span><i className="fa-solid fa-bath"></i> Baths: 5</span>
                        <span><i className="fa-solid fa-tape"></i> Sqft: 4200</span>
                    </div>
                </div>
                <div className="right-section">
                    <p className="price">$2,000,000</p>
                    <p style={{ fontSize: "12px" }}>4200 Sq Ft</p>
                </div>
            </div>

            <div className="image-grid">
                <div className="large-image">
                    <img src="src/assets/images/house/featured-5.jpg" alt="Large" />
                </div>
                <div className="right-grid">
                    <div className="top-image">
                        <img src="src/assets/images/house/featured-8.jpg" alt="Top" />
                    </div>
                    <div className="bottom-grid">
                        <div className="bottom-image">
                            <img src="src/assets/images/house/featured-21.jpg" alt="Bottom 1" />
                        </div>
                        <div className="bottom-image">
                            <img src="src/assets/images/house/featured-33.jpg" alt="Bottom 2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="property_container">
                <div className="left-container">
                    <div className="overview">
                        <span className="heading">Overview</span>
                        <hr className="divider" />
                        <div className="overview-row">
                            <div className="overview-item">
                                <p className="label">
                                    <i className="fa-solid fa-door-open"></i> Rooms:
                                </p>
                                <p className="value">9</p>
                            </div>
                            <div className="overview-item">
                                <p className="label">
                                    <i className="fa-solid fa-bath"></i> Baths:
                                </p>
                                <p className="value">5</p>
                            </div>
                            <div className="overview-item">
                                <p className="label">
                                    <i className="fa-solid fa-bed"></i> Beds:
                                </p>
                                <p className="value">6</p>
                            </div>
                            <div className="overview-item">
                                <p className="label">
                                    <i className="fa-solid fa-tape"></i> Size:
                                </p>
                                <p className="value">4200 Sq Ft</p>
                            </div>
                        </div>
                        <div className="overview-row">
                            <div className="overview-item">
                                <p className="label">
                                    <i className="fa-solid fa-calendar"></i> Year built:
                                </p>
                                <p className="value">2022</p>
                            </div>
                            <div className="overview-item">
                                <p className="label">
                                    <i className="fa-solid fa-shapes"></i> Property type:
                                </p>
                                <p className="value">Mansion</p>
                            </div>
                            <div className="overview-item">
                                <p className="label">
                                    <i className="fa-solid fa-warehouse"></i> Garage:
                                </p>
                                <p className="value">2</p>
                            </div>
                            <div className="overview-item"></div>
                        </div>
                    </div>

                    <div className="property-description">
                        <span className="heading">Property Description</span>
                        <hr />
                        <p>
                            This beautiful villa offers luxurious living with 6 spacious bedrooms, 5 bathrooms, a modern kitchen,
                            and
                            a comfortable living area. The villa is designed with elegance and functionality in mind, providing
                            ample space for family gatherings and entertainment. With a large garage, a meticulously landscaped
                            garden, and high-quality finishes throughout, this property is perfect for those seeking a refined
                            living experience. Located in a peaceful neighborhood, the villa provides easy access to local
                            amenities, schools, and transportation links.
                        </p>
                    </div>

                    <div className="property-details">
                        <span className="heading">Property Details</span>
                        <hr />
                        <div className="details-container">
                            <div className="left-column">
                                <p><strong>ID:</strong> #1131</p>
                                <p><strong>Price:</strong> $2,000,000</p>
                                <p><strong>Size:</strong> 4200 Sqft</p>
                                <p><strong>Rooms:</strong> 9</p>
                                <p><strong>Baths:</strong> 5</p>
                            </div>
                            <div className="right-column">
                                <p><strong>Beds:</strong> 6</p>
                                <p><strong>Year built:</strong> 2022</p>
                                <p><strong>Type:</strong> Mansion</p>
                                <p><strong>Status:</strong> Sale</p>
                                <p><strong>Garage:</strong> 2</p>
                            </div>
                        </div>
                    </div>

                    <div className="property-features">
                        <span>Features</span>
                        <hr style={{ marginTop: '20px' }} />
                        <div className="features-container">
                            <div className="feature-item">
                                <input type="checkbox" id="feature1" checked />
                                <label htmlFor="feature1">Swimming Pool</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature2" checked />
                                <label htmlFor="feature2">Balcony</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature3" checked />
                                <label htmlFor="feature3">Undercover Parking</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature4" checked />
                                <label htmlFor="feature4">Tennis Court</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature5" checked />
                                <label htmlFor="feature5">Garage</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature6" checked />
                                <label htmlFor="feature6">Ensuite</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature7" checked />
                                <label htmlFor="feature7">Study</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature8" checked />
                                <label htmlFor="feature8">Alarm System</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature9" checked />
                                <label htmlFor="feature9">Dishwasher</label>
                            </div>
                            <div className="feature-item">
                                <input type="checkbox" id="feature10" checked />
                                <label htmlFor="feature10">Built-in Robes</label>
                            </div>
                        </div>
                    </div>

                    <div className="map-location">
                        <span className="heading">Map Location</span>
                        <hr style={{ marginTop: '20px' }} />
                        <div className="location-content">
                            <div className="left-content">
                                <p><strong>Name:</strong> Elm Road</p>
                                <p><strong>Country:</strong> US</p>
                                <p><strong>City:</strong> Cedarville</p>
                            </div>
                            <div className="right-content">
                                <p><strong>Zip Code:</strong> 62</p>
                                <p><strong>Landmark:</strong> Cedarville Mall</p>
                                <p><strong>Accessibility:</strong> schools</p>
                            </div>
                        </div>
                        <div className="map-image">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7773966120913!2d-83.81244062530716!3d39.7446508962722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840a688aaf865bf%3A0xd9dadfbb6c9e18c3!2sW%20Elm%20St%2C%20Cedarville%2C%20OH%2045314%2C%20USA!5e0!3m2!1sen!2sin!4v1724592643144!5m2!1sen!2sin"
                                width="700" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="floor-plan">
                        <span className="heading">Floor Plan</span>
                        <hr style={{ marginTop: '20px' }} />
                        <div className="floor-plan-image">
                            <img src="src/assets/images/property detail/floor plan.jpg" alt="Floor Plan" className="main-floor-plan" />
                        </div>
                        <div className="floor-plan-description">
                            <p>
                                This floor plan features a spacious layout with 6 bedrooms, 5 bathrooms, and an open living area
                                that seamlessly connects to the kitchen. The design emphasizes functionality with easy access to
                                all rooms and includes a large garage and a garden view from the living room.
                            </p>
                        </div>
                    </div>

                    <div className="house-review">
                        <span className="heading">House Reviews</span>
                        <hr style={{ marginTop: '20px' }} />
                        <div className="review-form">
                            <form action="https://api.web3forms.com/submit" method="post">
                                <input type="hidden" name="access_key" value="ed34cf72-cc5e-4834-b184-bd45821cd618" />

                                <label htmlFor="name">Name:</label><br />
                                <input type="text" id="name" name="name" required placeholder="Your Name" /><br /><br />

                                <div className="contact-info">
                                    <div className="contact-field">
                                        <label htmlFor="email">Email:</label><br />
                                        <input type="email" id="email" name="email" required placeholder="Your Email" />
                                    </div>
                                    <div className="contact-field">
                                        <label htmlFor="phone">Phone Number:</label><br />
                                        <input type="tel" id="phone" name="phone" required placeholder="Your Phone" />
                                    </div>
                                </div><br /><br />

                                <label htmlFor="rating">Rating:</label><br />
                                <select id="rating" name="rating" required>
                                    <option value="6">Select</option>
                                    <option value="5">5 - Excellent</option>
                                    <option value="4">4 - Very Good</option>
                                    <option value="3">3 - Good</option>
                                    <option value="2">2 - Fair</option>
                                    <option value="1">1 - Poor</option>
                                </select><br /><br />

                                <label htmlFor="review">Review:</label><br />
                                <textarea id="review" name="review" rows="4" required placeholder="Your Message"></textarea><br /><br />

                                <button type="submit" className="submit-btn">Submit Review</button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Right container */}
                <div className="right-container">
                    <div className="tour-form">
                        <span className="heading"><b>Schedule a tour</b></span>
                        <hr style={{ marginTop: '20px' }} />
                        <form action="https://api.web3forms.com/submit" method="post" style={{ marginTop: '10px' }}>
                            <input type="hidden" name="access_key" value="ed34cf72-cc5e-4834-b184-bd45821cd618" />

                            <input type="text" id="tour-name" name="tour-name" placeholder="Full Name" required /><br /><br />

                            <input type="email" id="tour-email" name="tour-email" placeholder="Email Address" required /><br /><br />

                            <input type="tel" id="tour-phone" name="tour-phone" placeholder="Contact Number" required /><br /><br />

                            <input type="date" id="tour-date" name="tour-date" required /><br /><br />

                            <input type="time" id="tour-time" name="tour-time" required /><br /><br />

                            <textarea id="tour-message" name="tour-message" rows="4" placeholder="Your Message"></textarea><br /><br />

                            <button type="submit" className="submit-btn">Submit Request</button>
                        </form>
                    </div>

                    
                    <div className="another-properties">
                        <span>Another Properties</span>
                        <hr style={{ marginTop: '20px' }} />
                        <div className="property-item">
                            <img src="src/assets/images/house/featured-12.jpg" alt="Property 1" />
                            <a href="property1.html" className="property-link">Luxury Villa in Beverly Hills</a>
                        </div>
                        <div className="property-item">
                            <img src="src/assets/images/house/featured-13.jpg" alt="Property 2" />
                            <a href="property2.html" className="property-link">Modern Apartment in New York</a>
                        </div>
                        <div className="property-item">
                            <img src="src/assets/images/house/featured-19.jpg" alt="Property 3" />
                            <a href="property2.html" className="property-link">Modern Apartment in New York</a>
                        </div>
                        <div className="property-item">
                            <img src="src/assets/images/house/featured-15.jpg" alt="Property 4" />
                            <a href="property2.html" className="property-link">Modern Apartment in New York</a>
                        </div>
                        <div className="property-item">
                            <img src="src/assets/images/house/featured-16.jpg" alt="Property 5" />
                            <a href="property2.html" className="property-link">Modern Apartment in New York</a>
                        </div>
                        <div className="property-item">
                            <img src="src/assets/images/house/featured-17.jpg" alt="Property 6" />
                            <a href="property2.html" className="property-link">Modern Apartment in New York</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BirchwoodMansion;
