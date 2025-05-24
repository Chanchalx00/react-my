import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthForm from "./components/AuthForm";
import HomeView from "./components/HomeView";
import CartView from "./components/CartView";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setCart([]);
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <Router>
      {isLoggedIn && (
        <Navbar cartItemCount={cart.length} onLogout={handleLogout} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <AuthForm onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <HomeView addToCart={addToCart} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <CartView cart={cart} /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
