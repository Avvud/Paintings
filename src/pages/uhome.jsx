import { FaPalette, FaShippingFast, FaCertificate, FaHeart, FaUsers } from "react-icons/fa";
import { useState } from 'react';
import InfiniteMenu from '../components/Reactbits/InfiniteMenu/InfiniteMenu';
import { useNavigate } from 'react-router-dom';
import RollingGallery from '../components/Reactbits/RollingGallery/RollingGallery';
import CircularGallery from '../components/Reactbits/CircularGallery/CircularGallery';

function Home() {
  const navigate = useNavigate();
  const [hoveredStat, setHoveredStat] = useState(null);

  const items = [
    {
      image: "/images/eraiva.jpg",
      link: 'https://google.com/',
      title: 'Item 1',
      description: '🖐️ Drag to Rotate'
    },
    {
      image: '/images/ganesha.jpg',
      link: 'https://google.com/',
      title: 'Item 2',
      description: '🖐️ Drag to Rotate'
    },
    {
      image: '/images/krishna.jpg',
      link: 'https://google.com/',
      title: 'Item 3',
      description: '🖐️ Drag to Rotate'
    },
    {
      image: '/images/murugar.jpg',
      link: '/Murugar',
      title: 'Item 4',
      description: '🖐️ Drag to Rotate'
    },
    {
      image: '/images/venkatacham.jpg',
      link: 'https://google.com/',
      title: 'Item 5',
      description: '🖐️ Drag to Rotate'
    }
  ];

  const stats = [
    {
      number: "35+",
      label: "Years",
      description: "Our artists have had decades of experience in traditional Tanjore painting",
      icon: <FaCertificate />
    },
    {
      number: "500+",
      label: "Paintings",
      description: "Handcrafted divine artworks available for your home and temple",
      icon: <FaPalette />
    },
    {
      number: "1,000+",
      label: "Happy Customers",
      description: "Satisfied customers who treasure our authentic Tanjore paintings",
      icon: <FaUsers />
    },
    {
      number: "50+",
      label: "Designs",
      description: "Unique traditional and contemporary Tanjore painting collections",
      icon: <FaHeart />
    }
  ];

  const features = [
    {
      icon: "🎨",
      title: "Tradition",
      description: "Authentic Tanjore paintings following centuries-old techniques and traditional methods"
    },
    {
      icon: "✨",
      title: "Quality",
      description: "Premium materials including 22k gold foil, precious stones, and finest canvas"
    },
    {
      icon: "🏆",
      title: "Craftsmanship",
      description: "Each painting is meticulously handcrafted by skilled artisans with decades of experience"
    },
    {
      icon: "💖",
      title: "Divine Beauty",
      description: "Bringing spiritual elegance and divine presence to your home and sacred spaces"
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Discover Divine Tanjore Paintings</h1>
            <p>Our Tanjore painting collection has been curated to bring the divine beauty of traditional art to your home.</p>
            <div className="hero-features">
              <span>We offer both <strong>Ready Paintings</strong> and <strong>Custom Orders</strong>, crafted with authentic techniques to preserve this sacred art form.</span>
            </div>
            <p className="hero-subtitle">Transform your space with these timeless masterpieces that have adorned temples and palaces for centuries.</p>
            <button className="cta-button" onClick={() => navigate('/gallery')}>
              Explore Collection
              <FaPalette style={{ marginLeft: '8px' }} />
            </button>
          </div>
          <div className="hero-image">
            <div className="painting-showcase">
              <img src="/images/ganesha.jpg" alt="Ganesha Tanjore Painting" className="featured-painting" />
              <img src="/images/krishna.jpg" alt="Krishna Tanjore Painting" className="featured-painting-small" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`stat-card ${hoveredStat === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Original Learn Section - Updated */}
      <div className="learn-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/guru.jpg"
              alt="Learn Tanjore"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="learn-heading">Experience Divine Art From Anywhere</h2>
            <p className="learn-desc">
              Our Tanjore paintings are crafted to bring the divine presence to any space.
            </p>
            <p className="learn-desc">
              We offer both <strong>Ready-to-Ship Paintings</strong> and <strong>Custom Commissions</strong>, ensuring
              you find the perfect piece for your home or temple!
            </p>
            <p className="learn-desc">
              Whether you're decorating your home or seeking a meaningful gift, our authentic Tanjore art speaks to the soul.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Gallery Section */}
      <h2 className="banner-text" style={{ marginTop: '3rem' }}>
        Choose to view more 
      </h2>
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} navigate={navigate} />
      </div>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <blockquote>
            "For over 30 years, we've dedicated ourselves to preserving the sacred art of Tanjore painting, ensuring each piece carries the divine essence and traditional beauty that has blessed homes for generations"
          </blockquote>
          <cite>Rtn. SV. RM. Avudayappan, Master Artist</cite>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Tanjore Paintings</h2>
        <p className="features-subtitle">Experience the divine beauty of authentic Tanjore art, handcrafted with traditional techniques and premium materials for your home or temple.</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <button className="contact-button" onClick={() => navigate('/gallery')}>
          <FaShippingFast style={{ marginRight: '8px' }} />
          Order Your Divine Art
        </button>
      </section>

      {/* Circular Gallery */}
      <div style={{ height: '600px', width:'100%', position: 'relative', marginTop: '3rem' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>

      <style jsx>{`
        .hero-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #fff9ec 0%, #fdf2d5 100%);
          border-radius: 20px;
          margin: 2rem 0;
          box-shadow: 0 20px 40px rgba(186, 134, 11, 0.1);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: bold;
          color: #5c3d00;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #7a5200, #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text p {
          font-size: 1.3rem;
          color: #6d4c00;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .hero-features {
          background: rgba(184, 134, 11, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid #b8860b;
          margin: 2rem 0;
        }

        .hero-subtitle {
          font-style: italic;
          color: #8b6500;
        }

        .cta-button {
          background: linear-gradient(135deg, #b8860b, #d4af37);
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(184, 134, 11, 0.3);
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(184, 134, 11, 0.4);
        }

        .hero-image {
          position: relative;
          height: 500px;
        }

        .painting-showcase {
          position: relative;
          height: 100%;
        }

        .featured-painting {
          width: 300px;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border: 3px solid #d4af37;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
        }

        .featured-painting-small {
          width: 200px;
          height: 250px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          border: 3px solid #b8860b;
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
        }

        .stats-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #f5e1a4, #fffaf0);
          margin: 2rem 0;
          border-radius: 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(184, 134, 11, 0.2);
          box-shadow: 0 10px 30px rgba(184, 134, 11, 0.1);
          cursor: pointer;
        }

        .stat-card:hover, .stat-card.hovered {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(184, 134, 11, 0.2);
          background: linear-gradient(135deg, #fff9ec, #ffffff);
        }

        .stat-icon {
          font-size: 2.5rem;
          color: #b8860b;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #5c3d00;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.2rem;
          font-weight: bold;
          color: #7a5200;
          margin-bottom: 1rem;
        }

        .stat-description {
          font-size: 1rem;
          color: #6d4c00;
          line-height: 1.5;
        }`}
    </style>
    </div>