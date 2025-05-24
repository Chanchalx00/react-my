import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import "./HomeView.css";

function HomeView({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading products...</p>;
  if (error) return <p className="error-text">Error: {error}</p>;

  return (
    <div className="home-view">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title || product.name} />
            <h3>{product.title || product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-actions">
              <button className="details" onClick={() => setSelectedProduct(product)}>
                Details
              </button>
              <button className="buy" onClick={() => addToCart(product)}>Buy</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default HomeView;
