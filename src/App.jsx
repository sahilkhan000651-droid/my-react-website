import React, { useState } from "react";
import Navbar from "./navbar";
import ProductList, { getProductUrl, PRODUCT } from "./ProductList";
import { ALL_DEPARTMENTS } from "./categories";
import StorePages from "./StorePages";
import "./App.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [cartItems, setCartItems] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [category, setCategory] = useState(ALL_DEPARTMENTS);
  const [searchTerm, setSearchTerm] = useState("");
  const cartEntries = Object.values(cartItems);
  const cartQuantity = cartEntries.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartEntries.reduce(
    (total, item) => total + (item.product.price || 0) * item.quantity,
    0
  );
  const hasUnknownPrices = cartEntries.some((item) => item.product.price == null);

  function addToCart(product) {
    setCartItems((items) => ({
      ...items,
      [product.id]: {
        product,
        quantity: (items[product.id]?.quantity || 0) + 1,
      },
    }));
    setCartOpen(true);
  }

  function updateCartQuantity(productId, change) {
    setCartItems((items) => {
      const item = items[productId];
      if (!item) return items;

      const quantity = item.quantity + change;
      if (quantity < 1) return items;

      return { ...items, [productId]: { ...item, quantity } };
    });
  }

  function removeFromCart(productId) {
    setCartItems((items) => {
      const nextItems = { ...items };
      delete nextItems[productId];
      return nextItems;
    });
  }

  return (
    <main className="search-page">
      <Navbar
        cartQuantity={cartQuantity}
        cartOpen={cartOpen}
        category={category}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onCategoryChange={setCategory}
        onCartClick={() => setCartOpen((open) => !open)}
      />
      {cartOpen && (
        <div className="shopping-cart-overlay">
          <button
            className="shopping-cart-backdrop"
            type="button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
          />
          <aside
            className="shopping-cart-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="shopping-cart-title"
          >
            <div className="shopping-cart-heading">
              <h1 id="shopping-cart-title">Your cart</h1>
              <span>
                {cartQuantity} {cartQuantity === 1 ? "item" : "items"}
              </span>
              <button
                className="shopping-cart-close"
                type="button"
                aria-label="Close cart"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>
            {cartQuantity === 0 ? (
              <div className="shopping-cart-empty">
                <p>Your cart is empty.</p>
                <button type="button" onClick={() => setCartOpen(false)}>
                  Continue shopping
                </button>
              </div>
            ) : (
              <div className="shopping-cart-layout">
                <div className="shopping-cart-items">
                  {cartEntries.map(({ product, quantity }) => (
                    <div className="shopping-cart-item" key={product.id}>
                      {product.image && <img src={product.image} alt="" />}
                      <div className="shopping-cart-item-details">
                        <p className="shopping-cart-item-category">
                          {product.category || product.department}
                        </p>
                        <h2>{product.name}</h2>
                        <p className="shopping-cart-unit-price">
                          {product.price != null
                            ? product.price.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                              })
                            : "Price shown on Amazon"}
                        </p>
                        <div className="shopping-cart-quantity">
                          <button
                            type="button"
                            aria-label={`Decrease ${product.name} quantity`}
                            disabled={quantity === 1}
                            onClick={() => updateCartQuantity(product.id, -1)}
                          >
                            −
                          </button>
                          <span aria-live="polite">Qty: {quantity}</span>
                          <button
                            type="button"
                            aria-label={`Add one ${product.name} to cart`}
                            onClick={() => updateCartQuantity(product.id, 1)}
                          >
                            +
                          </button>
                          <button
                            className="shopping-cart-remove"
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <strong className="shopping-cart-line-total">
                        {product.price != null
                          ? (product.price * quantity).toLocaleString("en-IN", {
                              style: "currency",
                              currency: "INR",
                            })
                          : "—"}
                      </strong>
                    </div>
                  ))}
                </div>

                <aside className="shopping-cart-summary" aria-label="Order summary">
                  <h2>Order summary</h2>
                  <p className="shopping-cart-subtotal">
                    <span>
                      {hasUnknownPrices ? "Subtotal (priced items)" : "Subtotal"}
                    </span>
                    <strong>
                      {subtotal.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </strong>
                  </p>
                  <p className="shopping-cart-note">
                    {hasUnknownPrices
                      ? "The subtotal excludes items without a listed price. Confirm each product price on Amazon."
                      : "Price and availability may change. Confirm the final total on Amazon."}
                  </p>
                  <div className="shopping-cart-buy-links">
                    {cartEntries.map(({ product }) => (
                      <a
                        className="shopping-cart-buy"
                        href={getProductUrl(product)}
                        key={product.id}
                        rel="sponsored noopener noreferrer"
                      >
                        Buy {product.name} on Amazon
                      </a>
                    ))}
                  </div>
                </aside>
              </div>
            )}
          </aside>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              category={category}
              searchTerm={searchTerm}
              onCategoryChange={setCategory}
              onAddToCart={addToCart}
            />
          }
        />
        <Route path="/returns-orders" element={<StorePages page="returns-orders" />} />
        <Route path="/todays-deals" element={<StorePages page="todays-deals" />} />
        <Route path="/new-arrivals" element={<StorePages page="new-arrivals" />} />
        <Route path="/best-sellers" element={<StorePages page="best-sellers" />} />
        <Route path="/gift-ideas" element={<StorePages page="gift-ideas" />} />
        <Route path="*" element={<StorePages page="not-found" />} />
      </Routes>
    </main>
  );
}
