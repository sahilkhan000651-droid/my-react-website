import React from "react";
import { Link } from "react-router-dom";
import { getProductUrl, PRODUCTS } from "./ProductList";

const COLLECTIONS = {
  "todays-deals": {
    title: "Today’s deals",
    description: "Browse products currently featured in our deals collection.",
    emptyMessage: "There are no deal products yet.",
  },
  "new-arrivals": {
    title: "New arrivals",
    description: "Discover the latest products added to the store.",
    emptyMessage: "There are no new arrivals yet.",
  },
  "best-sellers": {
    title: "Best sellers",
    description: "Browse the products featured in our best-sellers collection.",
    emptyMessage: "There are no best sellers yet.",
  },
  "gift-ideas": {
    title: "Gift ideas",
    description: "Find products selected as gift ideas.",
    emptyMessage: "There are no gift ideas yet.",
  },
};

function StoreProductCard({ product }) {
  return (
    <article className="store-page-product">
      {product.image && <img src={product.image} alt="" />}
      <div>
        <p>{product.category || product.department}</p>
        <h2>{product.name}</h2>
        {product.price != null && (
          <strong>
            {product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 2,
            })}
          </strong>
        )}
        <a href={getProductUrl(product)} rel="sponsored noopener noreferrer">
          View product
        </a>
      </div>
    </article>
  );
}

export default function StorePages({ page }) {
  if (page === "returns-orders") {
    return (
      <section className="store-page">
        <section className="store-page-panel" aria-labelledby="store-page-title">
          <p className="store-page-eyebrow">YOUR ACCOUNT</p>
          <h1 id="store-page-title">Returns &amp; Orders</h1>
          <p>
            Products on this site link to Amazon for checkout. Orders and returns are
            managed by Amazon and are not available to view here.
          </p>
          <a
            className="store-page-action"
            href="https://www.amazon.in/gp/your-account/order-history"
            rel="noopener noreferrer"
          >
            View Amazon orders
          </a>
        </section>
      </section>
    );
  }

  const collection = COLLECTIONS[page];
  if (!collection) {
    return (
      <section className="store-page">
        <section className="store-page-panel">
          <h1>Page not found</h1>
          <p>This page does not exist.</p>
          <Link className="store-page-action" to="/">
            Back to the store
          </Link>
        </section>
      </section>
    );
  }

  const products = PRODUCTS.filter((product) => product.collections?.includes(page));

  return (
    <section className="store-page">
      <section className="store-page-panel" aria-labelledby="store-page-title">
        <p className="store-page-eyebrow">QUICKER COLLECTION</p>
        <h1 id="store-page-title">{collection.title}</h1>
        <p>{collection.description}</p>
      </section>
      {products.length > 0 ? (
        <div className="store-page-products">
          {products.map((product) => (
            <StoreProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <section className="store-page-empty" role="status">
          <h2>{collection.emptyMessage}</h2>
          <p>
            To add products, include this collection key in the product’s{" "}
            <code>collections</code> array in <code>ProductList.jsx</code>:{" "}
            <code>{page}</code>.
          </p>
          <Link className="store-page-action" to="/">
            Browse all products
          </Link>
        </section>
      )}
    </section>
  );
}
