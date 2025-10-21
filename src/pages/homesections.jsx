import React, { useEffect } from 'react';
import { FaPalette, FaShippingFast, FaCertificate, FaHeart, FaUsers } from "react-icons/fa";
import '../styles/HomeSection.css';

// ✅ STATS SECTION
export function StatsSection({ stats, isVisible }) {
  return (
    <section className="stats-section" data-animate id="stats">
      <div className="container">
        <h2 className="section-title">Our Legacy in Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${isVisible.stats ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ FEATURED COLLECTION
export function FeaturedCollection({ featuredPaintings, isVisible }) {
  return (
    <section className="featured-collection" data-animate id="featured">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Divine Collection</h2>
          <p className="section-subtitle">
            Each painting is a masterpiece, carefully crafted with traditional techniques 
            and blessed with divine presence.
          </p>
        </div>
        <div className="collection-grid">
          {featuredPaintings.map((painting, index) => (
            <div
              key={painting.id}
              className={`collection-card ${isVisible.featured ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-image">
                <img src={painting.image} alt={painting.title} />
                <div className="card-overlay">
                  <button className="quick-view">Quick View</button>
                </div>
              </div>
              <div className="card-info">
                <span className="category">{painting.category}</span>
                <h3>{painting.title}</h3>
                <p>{painting.description}</p>
                <div className="card-footer">
                  {/* Add any footer content here */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="collection-cta">
          <button className="btn btn-outline">
            View All Paintings ➺
          </button>
        </div>
      </div>
    </section>
  );
}

// ✅ TESTIMONIALS
export function Testimonials({ testimonials, currentSlide, setCurrentSlide }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, setCurrentSlide]);

  return (
    <section className="testimonials" data-animate id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <i className="fa fa-quote-left quote-icon" />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa fa-star star" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ CALL TO ACTION
export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Bring Divine Art to Your Home?</h2>
          <p>
            Experience the spiritual elegance of authentic Tanjore paintings, handcrafted with love and tradition.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary large">
              <FaShippingFast /> Shop Now
            </button>
            <button className="btn btn-secondary large">
              <FaPalette /> Custom Commission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}