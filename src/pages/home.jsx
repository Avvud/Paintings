import InfiniteMenu from '../components/Reactbits/InfiniteMenu/InfiniteMenu';
import { useNavigate } from 'react-router-dom';
import CircularGallery from '../components/Reactbits/CircularGallery/CircularGallery'
import { FaPalette, FaShippingFast, FaCertificate, FaHeart, FaUsers } from "react-icons/fa";
import { useState } from 'react';



function Home() {
  const navigate = useNavigate();
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

  return (
    <div className="page">
          <div className="banner">
      <div className="banner-text">
        <h2>Discover Divine Art</h2>
        <p>Bringing Tanjore’s rich painting legacy to your doorstep.</p>
      </div>
    </div>
      {/* segments*/}
    <div className="learn-section container py-5">
  <div className="row align-items-center">
    {/* IMAGE SECTION */}
    <div className="col-md-6 mb-4 mb-md-0">
      
    </div>

    {/* TEXT SECTION */}
    <div className="col-md-6">
      <h2 className="learn-heading">Learn Tanjore Painting From Anywhere</h2>
      <p className="learn-desc">
        Our Tanjore painting classes have been designed so that you can learn from anywhere.
      </p>
      <p className="learn-desc">
        We offer both <strong>Studio Classes</strong> and <strong>Online Classes</strong>, and take great care to ensure
        you have the best learning experience!
      </p>
      <p className="learn-desc">
        So, regardless of where you are, we will be able to teach you this lovely art.
      </p>
    </div>
  </div>
</div>


      <h1 style={{ fontSize: "3rem", color: "#5c3d00" }}>
        Welcome to Tanjore Treasure <FaPalette style={{ color: "#d47f00", marginLeft: "10px" }} />
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem", maxWidth: "700px" }}>
        Explore our collection of divine Tanjore paintings handcrafted with love and tradition.
      </p>
      <br></br>
      <h2 className="banner-text">
        Choose to view more 
      </h2>
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} navigate={navigate} />
      </div>

      <div style={{ height: '600px',width:'100%', position: 'relative' }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      


    </div>
  );
}

export default Home;
