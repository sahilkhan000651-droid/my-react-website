import React from "react";
import "./product-list.css";

export const PRODUCT = {
  id: "featured-amazon",
  name: "The Derma Co Sali-Cinamide Anti-Acne Face Wash & Serum Combo",
  category: "Beauty & personal care",
  description:
    "A face wash and serum combo featuring salicylic acid. The face wash also contains niacinamide.",
  details: ["2% Salicylic Acid", "2% Niacinamide in the face wash", "Face wash + serum combo"],
  image: "https://m.media-amazon.com/images/I/51mCQhdHNDL._SX355_.jpg",
  price: 162,
  url: "https://link.amazon/A0hqft9JR",
};

export default function ProductList({ onAddToCart }) {
  return (
    <section className="product-list" aria-labelledby="product-list-title">
      <h1 id="product-list-title">Featured products</h1>
      <ul className="product-list-items">
        <li className="product-card" key={PRODUCT.id}>
            <a
              className="product-card-image-link"
              href={PRODUCT.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              aria-label={`View ${PRODUCT.name} on Amazon`}
            >
              <img className="product-card-image" src={PRODUCT.image} alt={PRODUCT.name} />
            </a>
            <div className="product-card-content">
              <p className="product-card-category">{PRODUCT.category}</p>
              <h2>{PRODUCT.name}</h2>
              <p className="product-card-description">{PRODUCT.description}</p>
              <ul className="product-card-details">
                {PRODUCT.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="product-card-price">{PRODUCT.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 2,
              })}</p>
              <p className="product-card-price-note">Price may change. Confirm the current price on Amazon.</p>
              <button className="product-card-add" type="button" onClick={onAddToCart}>
                Add to cart
              </button>
              <a
                className="product-card-link"
                href={PRODUCT.url}
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                Buy on Amazon
              </a>
            </div>
        </li>
      </ul>
      <p className="product-list-disclosure">
        As an Amazon Associate I earn from qualifying purchases.
      </p>
    </section>
  );
}