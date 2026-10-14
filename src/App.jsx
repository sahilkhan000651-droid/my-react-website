import React, { useState } from "react";
import Navbar from "./navbar";
import ProductList, { PRODUCT } from "./ProductList";
import "./App.css";

export default function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const subtotal = PRODUCT.price * cartQuantity;

  return (
    <main className="search-page">
      <Navbar
        cartQuantity={cartQuantity}
        cartOpen={cartOpen}
        onCartClick={() => setCartOpen((open) => !open)}
      />
      {cartOpen && (
        <section className="shopping-cart-panel" aria-labelledby="shopping-cart-title">
          <h1 id="shopping-cart-title">Your cart</h1>
          {cartQuantity === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="shopping-cart-item">
                <img src={PRODUCT.image} alt="" />
                <div className="shopping-cart-item-details">
                  <h2>{PRODUCT.name}</h2>
                  <p>
                    {PRODUCT.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </p>
                  <div className="shopping-cart-quantity">
                    <button
                      type="button"
                      aria-label="Remove one from cart"
                      onClick={() => setCartQuantity((quantity) => Math.max(0, quantity - 1))}
                    >
                      −
                    </button>
                    <span>Quantity: {cartQuantity}</span>
                    <button
                      type="button"
                      aria-label="Add one to cart"
                      onClick={() => setCartQuantity((quantity) => quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="shopping-cart-remove"
                      type="button"
                      onClick={() => setCartQuantity(0)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <p className="shopping-cart-subtotal">
                Subtotal ({cartQuantity} {cartQuantity === 1 ? "item" : "items"}):{" "}
                <strong>
                  {subtotal.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </strong>
              </p>
              <p className="shopping-cart-note">
                This is your website cart. Price may change; confirm the current price on Amazon.
              </p>
              <a
                className="shopping-cart-buy"
                href={PRODUCT.url}
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                Buy on Amazon
              </a>
            </>
          )}
        </section>
      )}
      <ProductList onAddToCart={() => setCartQuantity((quantity) => quantity + 1)} />
    </main>
  );
}
