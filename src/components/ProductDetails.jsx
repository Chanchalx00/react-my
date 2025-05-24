import "./ProductDetails.css";

function ProductDetails({ product, onClose }) {
  return (
    <div className="product-details" onClick={onClose}>
      <div className="details-content" onClick={(e) => e.stopPropagation()}>
        <h3>{product.title || product.name}</h3>
        <img src={product.image} alt={product.title || product.name} />
        <p>{product.description}</p>
        <p>
          <strong>${product.price.toFixed(2)}</strong>
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ProductDetails;
