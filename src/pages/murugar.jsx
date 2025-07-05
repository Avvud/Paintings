import paintings from '../data/murugar';

function Gallery() {
  return (
    <div className="page">
  <h1>Gallery</h1>
  <div className="gallery-grid">
    {paintings.map(p => (
      <div key={p.id} className="gallery-card">
        <img src={p.img} alt={p.title} />
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <p>₹{p.price}</p>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
</div>

  );
}

export default Gallery;
