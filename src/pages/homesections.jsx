/*import '../styles/homesection.css';*/
import { FaPalette, FaShippingFast, FaCertificate, FaHeart, FaUsers } from "react-icons/fa";


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
      <style jsx>
        {`.stats-section {
          padding:  2rem;
          background: linear-gradient(135deg, #f8e6c3, #fff5e6);
          position: relative;
          overflow: hidden;
        }

        .stats-section::before,
        .stats-section::after {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23d4af37' fill-opacity='0.1' d='M95,50 L80,20 L50,5 L20,20 L5,50 L20,80 L50,95 L80,80 L95,50z'/%3E%3C/svg%3E") no-repeat center/contain;
          opacity: 0.2;
        }

        .stats-section::before {
          top: -50px;
          left: -50px;
          transform: rotate(-45deg);
        }

        .stats-section::after {
          bottom: -50px;
          right: -50px;
          transform: rotate(135deg);
        }

        .section-title {
          text-align: center;
          font-size: 2.8rem;
          color: #4a3000;
          font-family: 'Figtree', serif;
          position: relative;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .stats-grid {
          display: flex;
          flex-wrap: nowrap; /* Changed to nowrap to keep all items in one line */
          justify-content: space-between; /* Changed to space-between for even spacing */
          gap: 2rem;
          max-width: 1400px; /* Increased max-width to accommodate all cards */
          margin: 0 auto;
          padding: 0 1rem;
          overflow-x: auto; /* Added for mobile responsiveness */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
          -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
        }
        
        .stats-grid::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome/Safari */
        }

        .stat-card {
          background: linear-gradient(145deg, #ffffff, #fff9e6);
          padding: 2rem;
          width: clamp(200px, 25vw, 280px);
          height: auto;
          border-radius: 20px;
          text-align: center;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1),
                      -5px -5px 15px rgba(255, 255, 255, 0.8);
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .stat-card:hover::before {
          transform: translateX(100%);
        }

        .stat-card.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15),
                      -8px -8px 20px rgba(255, 255, 255, 0.9);
        }

        .stat-icon {
          font-size: 3.5rem;
          color: #d4af37;
          margin-bottom: 1.5rem;
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
          transition: transform 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .stat-number {
          font-size: clamp(2rem, 3vw, 3rem);
          font-weight: bold;
          background: linear-gradient(45deg, #4a3000, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.8rem;
          font-family: 'Figtree', serif;
        }

        .stat-label {
          font-size: clamp(1rem, 1.8vw, 1.3rem);
          color: #5c4000;
          font-weight: 500;
          font-family: 'Figtree', sans-serif;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .stat-label::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          opacity: 0.5;
        }
`}
      </style>
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

                
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="collection-cta">
          <button className="btn btn-outline">
            View All Paintings ➺ <i className="fa fa-arrow-right" />
          </button>
        </div>
      </div>
      <style jsx>
        {`/* Featured Collection */
                .btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: bold;
          font-size: 1rem;
          border: none;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #b8860b, #d4af37);
          color: white;
          box-shadow: 0 8px 25px rgba(184, 134, 11, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(184, 134, 11, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.9);
          color: #5c3d00;
          border: 2px solid #b8860b;
        }

        .btn-secondary:hover {
          background: #b8860b;
          color: white;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #5c3d00;
          border: 2px solid #b8860b;
        }

        .btn-outline:hover {
          background: #b8860b;
          color: white;
        }

        .btn.large {
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
        }
        .featured-collection {
          padding: 6rem 0;
          background: linear-gradient(135deg, #fff6e6, #fff);
          position: relative;
          overflow: hidden;
        }

        .featured-collection::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8860b55, transparent);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .section-header::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #b8860b, #d4af37);
          margin: 1.5rem auto 0;
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #8b6b1f;
          max-width: 700px;
          margin: 1.5rem auto 0;
          line-height: 1.8;
          letter-spacing: 0.02em;
        }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin: 0 auto 4rem;
          max-width: 1400px;
          padding: 0 2rem;
        }

        .collection-card {
          background: linear-gradient(145deg, #fff, #fff8eb);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(184, 134, 11, 0.08);
          transition: all 0.4s ease;
          transform: translateY(30px);
          opacity: 0;
          width: 100%;
          height: 550px; /* Fixed height for all cards */
          margin: 0 auto;
          border: 1px solid rgba(184, 134, 11, 0.1);
          display: flex;
          flex-direction: column;
        }

        .collection-card.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .collection-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(184, 134, 11, 0.12);
        }

        .card-image {
          position: relative;
          height: 320px; /* Fixed height for image container */
          min-height: 320px; /* Ensure minimum height */
          overflow: hidden;
          flex: 0 0 auto; /* Prevent image container from growing/shrinking */
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          transform-origin: center;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;

        }

        .collection-card:hover .card-overlay {
          opacity: 1;
        }

        .collection-card:hover .card-image img {
          transform: scale(1.08);
        }

        .quick-view {
          background: rgba(255, 255, 255, 0.95);
          color: #5c3d00;
          padding: 1rem 2rem;
          border-radius: 30px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          transform: translateY(20px);
          opacity: 0;
        }

        .collection-card:hover .quick-view {
          transform: translateY(0);
          opacity: 1;
        }

        .quick-view:hover {
          background: #b8860b;
          color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .card-info {
          padding: 2rem;
          background: linear-gradient(180deg, 
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 246, 230, 0.5) 100%
          );
          flex: 1; /* Allow card info to take remaining space */
          display: flex;
          flex-direction: column;
          overflow: hidden; /* Handle content overflow */
        }

        .card-info h3 {
          font-size: 1.4rem;
          color: #4a3000;
          margin: 0.5rem 0;
          font-weight: 600;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* Limit to 2 lines */
          -webkit-box-orient: vertical;
        }

        .card-info .category {
          color: #b8860b;
          font-size: 0.95rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: rgba(184, 134, 11, 0.1);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 0.8rem;
          white-space: nowrap;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-info p {
          color: #6d4c00;
          line-height: 1.6;
          margin: 0.8rem 0;
          font-size: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Limit to 3 lines */
          -webkit-box-orient: vertical;
          flex: 1; /* Take up remaining space */
        }

        .card-info h3 {
          margin-bottom: 0.5rem;
          color: #5c3d00;
        }

        .card-info p {
          color: #6d4c00;
          margin-bottom: 1rem;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 1.3rem;
          font-weight: bold;
          color: #b8860b;
        }



        .collection-cta {
              display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
        }`}
      </style>
    </section>
  );
}

// ✅ TESTIMONIALS
import React, { useEffect } from 'react';

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
            />
          ))}
        </div>
      </div>
      <style jsx>
        {`        .testimonials {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f5e1a4, #fffaf0);
        }

        .testimonial-slider {
          overflow: hidden;
          border-radius: 25px;
          margin-bottom: 2rem;
        }

        .testimonial-track {
          display: flex;
          transition: transform 0.5s ease;
        }

        .testimonial-card {
          min-width: 100%;
          background: white;
          padding: 3rem;
          text-align: center;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .quote-icon {
          font-size: 2rem;
          color: #b8860b;
          margin-bottom: 1.5rem;
        }

        .testimonial-text {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: #5c3d00;
          font-style: italic;
        }

        .testimonial-rating {
          margin-bottom: 1.5rem;
        }

        .star {
          color: #d4af37;
          margin: 0 0.2rem;
        }

        .testimonial-author strong {
          color: #5c3d00;
          display: block;
          margin-bottom: 0.5rem;
        }

        .testimonial-author span {
          color: #7a5200;
        }

        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(184, 134, 11, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #b8860b;
          transform: scale(1.2);
        }

        /* Call to Action */
        .cta-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #5c3d00, #7a5200);
          color: white;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: white;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-section .btn-primary {
          background: linear-gradient(135deg, #d4af37, #b8860b);
        }

        .cta-section .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-section .btn-secondary:hover {
          background: white;
          color: #5c3d00;
        }
`}
      </style>
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
              <i className="fa fa-shipping-fast" /> Shop Now
            </button>
            <button className="btn btn-secondary large">
              <i className="fa fa-palette" /> Custom Commission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

