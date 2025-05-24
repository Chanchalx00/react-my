import "./CartView.css";

function CartView({ cart }) {
  return (
    <div className="cart-view">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name || item.title} />
            <div>
              <h4>{item.name || item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartView;
