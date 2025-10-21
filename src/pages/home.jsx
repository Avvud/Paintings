import InfiniteMenu from '../components/Reactbits/InfiniteMenu/InfiniteMenu';
import { useNavigate } from 'react-router-dom';
import CircularGallery from '../components/Reactbits/CircularGallery/CircularGallery'
import { FaPalette, FaShippingFast, FaCertificate, FaHeart, FaUsers } from "react-icons/fa";
import { useState } from 'react';
import { StatsSection, FeaturedCollection, Testimonials, CallToAction } from './homesections';

// ✅ MOVE ALL STATIC DATA OUTSIDE THE COMPONENT
const STATS = [
  {
    number: "60+",
    label: "Years",
    description: "Our artists have had decades of experience in traditional Tanjore painting",
    icon: <FaCertificate />
  },
  {
    number: "10000+",
    label: "Paintings",
    description: "Handcrafted divine artworks available for your home and temple",
    icon: <FaPalette />
  },
  {
    number: "5,000+",
    label: "Active Clients",
    description: "Satisfied customers who treasure our authentic Tanjore paintings",
    icon: <FaUsers />
  },
  {
    number: "500+",
    label: "Designs",
    description: "Unique traditional and contemporary Tanjore painting collections",
    icon: <FaHeart />
  }
];

const FEATURED_PAINTINGS = [
  {
    id: 1,
    title: "Sri Krishna Tanjore",
    price: 12000,
    image: "/images/baby krishna.jpg",
    description: "Divine Krishna with gold foil detailing",
    category: "Divine"
  },
  {
    id: 2,
    title: "Ganesha Tanjore",
    price: 10000,
    image: "/images/pillayar2.jpg",
    description: "Blessed Ganesha in traditional style",
    category: "Sacred"
  },
  {
    id: 3,
    title: "Murugar",
    price: 10000,
    image: "/images/mugur.jpg",
    description: "Lord Murugan with divine aura",
    category: "Divine"
  },
  {
    id: 4,
    title: "Lachumi",
    price: 12000,
    image: "/images/lachumi.jpg",
    description: "Divine lachumi with gold foil detailing",
    category: "Divine"
  },
  {
    id: 5,
    title: "Venkatachalapathy",
    price: 12000,
    image: "/images/venkatacham.jpg",
    description: "Divine Venkatachalapathy with gold foil detailing",
    category: "Divine"
  },
  {
    id: 6,
    title: "Shiva family ",
    price: 12000,
    image: "/images/shiva.jpg",
    description: "Divine Krishna with gold foil detailing",
    category: "Divine"
  },
];

const MENU_ITEMS = [
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

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    text: "The intricate gold work and divine presence in every painting is breathtaking. A true masterpiece!",
    rating: 5,
    location: "Chennai"
  },
  {
    name: "Rajesh Kumar",
    text: "30 years of tradition shines through every brushstroke. Our temple feels more sacred with these paintings.",
    rating: 5,
    location: "Bangalore"
  },
  {
    name: "Meera Patel",
    text: "The attention to detail and spiritual energy in these Tanjore paintings is unmatched.",
    rating: 5,
    location: "Mumbai"
  }
];

const IS_VISIBLE = { stats: true, featured: true, testimonials: true };

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="page">
      <div className="banner"></div>
      
      <h1 style={{ fontSize: "3rem", color: "#5c3d00" }}>
        Welcome to Tanjore Treasure <FaPalette style={{ color: "#d47f00", marginLeft: "10px" }} />
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem", maxWidth: "700px" }}>
        Explore our collection of divine Tanjore paintings handcrafted with love and tradition.
      </p>
      
      <StatsSection stats={STATS} isVisible={IS_VISIBLE} />

      <h2 className="banner-text">
        Choose to view more 
      </h2>
      
      {/* ✅ NOW THIS WON'T RE-INITIALIZE */}
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={MENU_ITEMS} navigate={navigate} />
      </div>
      
      <FeaturedCollection featuredPaintings={FEATURED_PAINTINGS} isVisible={IS_VISIBLE} />

      <div style={{ height: '500px', width:'100%', position: 'relative', margin: '4rem 0',padding: '2rem 0' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      
      <Testimonials
        testimonials={TESTIMONIALS}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      
      <CallToAction />
    </div>
  );
}

export default Home;