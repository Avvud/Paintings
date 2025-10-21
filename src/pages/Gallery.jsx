import { useState } from 'react';
import paintings from '../data/pantings';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleView = (painting) => {
    setSelectedImage(painting);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {paintings.map(p => (
          <div key={p.id} className="gallery-card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <button onClick={() => handleView(p)} className="view-button">
              View
            </button>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedImage.img} alt={selectedImage.title} />
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
