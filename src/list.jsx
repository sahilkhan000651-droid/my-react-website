
import React, { useMemo, useState } from "react";
import "./list.css";

const categories = [
  {
    name: "Shoes",
    icon: "👟",
    subs: ["All Shoes", "Sneakers", "Running", "Formal", "Sandals", "Boots"],
  },
  {
    name: "Shirts",
    icon: "👕",
    subs: ["All Shirts", "T-Shirts", "Casual", "Formal", "Polo", "Oversized"],
  },
  {
    name: "Pants",
    icon: "👖",
    subs: ["All Pants", "Jeans", "Cargo", "Trousers", "Joggers", "Shorts"],
  },
  {
    name: "Digital & Tech",
    icon: "💻",
    subs: ["All Tech", "Headphones", "Smartwatches", "Keyboards", "Software"],
  },
  {
    name: "Skincare",
    icon: "🧴",
    subs: ["All Skincare", "Face Wash", "Moisturizers", "Serums", "Sunscreen"],
  },
  {
    name: "Accessories",
    icon: "🎒",
    subs: ["All Accessories", "Bags", "Watches", "Wallets", "Sunglasses"],
  },
];

const products = [
  { id: 1, name: "Everyday Sneakers", category: "Shoes", sub: "Sneakers", price: 1499, oldPrice: 2299, rating: 4.5, icon: "👟", color: "#e9eaff" },
  { id: 2, name: "Running Pro Shoes", category: "Shoes", sub: "Running", price: 2199, oldPrice: 2999, rating: 4.7, icon: "🏃", color: "#e0f5ec" },
  { id: 3, name: "Classic Formal Shoes", category: "Shoes", sub: "Formal", price: 1899, oldPrice: 2499, rating: 4.3, icon: "👞", color: "#f4e8db" },
  { id: 4, name: "Premium Cotton Tee", category: "Shirts", sub: "T-Shirts", price: 499, oldPrice: 799, rating: 4.4, icon: "👕", color: "#e8f0ff" },
  { id: 5, name: "Oxford Formal Shirt", category: "Shirts", sub: "Formal", price: 999, oldPrice: 1499, rating: 4.6, icon: "👔", color: "#f6e9f1" },
  { id: 6, name: "Oversized Street Tee", category: "Shirts", sub: "Oversized", price: 699, oldPrice: 999, rating: 4.2, icon: "👕", color: "#ece7ff" },
  { id: 7, name: "Classic Blue Jeans", category: "Pants", sub: "Jeans", price: 1199, oldPrice: 1799, rating: 4.5, icon: "👖", color: "#e3edff" },
  { id: 8, name: "Utility Cargo Pants", category: "Pants", sub: "Cargo", price: 1399, oldPrice: 1999, rating: 4.6, icon: "🩳", color: "#e6f0df" },
  { id: 9, name: "Wireless Headphones", category: "Digital & Tech", sub: "Headphones", price: 2499, oldPrice: 3499, rating: 4.7, icon: "🎧", color: "#eee9ff" },
  { id: 10, name: "Smart Watch", category: "Digital & Tech", sub: "Smartwatches", price: 2999, oldPrice: 3999, rating: 4.4, icon: "⌚", color: "#e5f1f5" },
  { id: 11, name: "Hydrating Face Serum", category: "Skincare", sub: "Serums", price: 599, oldPrice: 899, rating: 4.5, icon: "🧴", color: "#f9e9e3" },
  { id: 12, name: "Daily Face Cleanser", category: "Skincare", sub: "Face Wash", price: 349, oldPrice: 499, rating: 4.3, icon: "🫧", color: "#e3f5ef" },
  { id: 13, name: "Everyday Backpack", category: "Accessories", sub: "Bags", price: 899, oldPrice: 1299, rating: 4.4, icon: "🎒", color: "#f2e9de" },
  { id: 14, name: "Minimal Wrist Watch", category: "Accessories", sub: "Watches", price: 1599, oldPrice: 2199, rating: 4.6, icon: "⌚", color: "#e9e9f4" },
];

const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSub, setActiveSub] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const currentCategory = categories.find(
    (category) => category.name === activeCategory
  );

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSub =
        activeSub === "All" ||
        activeSub.startsWith("All ") ||
        product.sub === activeSub;

      const matchesSearch =
        `${product.name} ${product.category} ${product.sub}`
          .toLowerCase()
          .includes(search.toLowerCase().trim());

      return matchesCategory &&
        matchesSub &&
        matchesSearch &&
        product.price <= maxPrice;
    });

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activeSub, search, sort, maxPrice]);

  function chooseCategory(name) {
    setActiveCategory(name);
    setActiveSub("All");
    setMaxPrice(5000);
  }

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function addToCart(product) {
    setCart((previous) => [...previous, product]);
  }

  return (
    <div className="quicker">
      <header className="topbar">
        <button
          className="brand"
          onClick={() => chooseCategory("All")}
          aria-label="Go to all products"
        >
          <span className="brand-mark">Q</span>
          quicker<span className="brand-dot">.</span>
        </button>

        <div className="searchbox">
          <span>⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search shoes, shirts, skincare..."
            aria-label="Search products"
          />
          {search && (
            <button className="clear-search" onClick={() => setSearch("")}>
              ✕
            </button>
          )}
        </div>

        <button className="cart-button" onClick={() =>
          window.alert(
            cart.length
              ? `Your cart has ${cart.length} demo item(s).`
              : "Your cart is empty."
          )
        }>
          🛒 <span>Cart</span>
          <b>{cart.length}</b>
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">YOUR WORLD. ONE PLACE.</span>
            <h1>Find your next<br />favorite thing.</h1>
            <p>
              Explore fashion, technology, skincare and more.
              Discover products that match your style.
            </p>
            <button className="hero-button" onClick={() => {
              chooseCategory("All");
              document.getElementById("catalog")?.scrollIntoView({
                behavior: "smooth",
              });
            }}>
              Explore products <span>↗</span>
            </button>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <span className="art-item art-shoe">👟</span>
            <span className="art-item art-shirt">👕</span>
            <span className="art-item art-tech">🎧</span>
            <span className="art-item art-skin">🧴</span>
            <span className="art-spark spark-one">✦</span>
            <span className="art-spark spark-two">✳</span>
          </div>
        </section>

        <section className="category-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">BROWSE YOUR WAY</span>
              <h2>Shop by category</h2>
            </div>
            <span className="muted">Choose a world to explore ↗</span>
          </div>

          <div className="category-grid">
            <button
              className={`category-card all-card ${
                activeCategory === "All" ? "selected" : ""
              }`}
              onClick={() => chooseCategory("All")}
            >
              <span className="category-icon">✳</span>
              <span className="category-name">Everything</span>
              <span className="category-arrow">↗</span>
              <small>Explore all products</small>
            </button>

            {categories.map((category, index) => (
              <button
                key={category.name}
                className={`category-card ${
                  activeCategory === category.name ? "selected" : ""
                } category-tone-${index}`}
                onClick={() => chooseCategory(category.name)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                <span className="category-arrow">↗</span>
                <small>{category.subs.slice(1, 4).join(" · ")}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="catalog-section" id="catalog">
          <div className="section-heading catalog-heading">
            <div>
              <span className="eyebrow">THE COLLECTION</span>
              <h2>
                {activeCategory === "All"
                  ? "Explore products"
                  : activeCategory}
              </h2>
              <p className="muted">
                {filteredProducts.length} products to discover
              </p>
            </div>

            <label className="sort-control">
              <span>Sort by</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>

          {currentCategory && (
            <div className="subcategory-list">
              {currentCategory.subs.map((sub) => (
                <button
                  key={sub}
                  className={`sub-chip ${
                    activeSub === sub ||
                    (activeSub === "All" && sub === currentCategory.subs[0])
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setActiveSub(
                    sub === currentCategory.subs[0] ? "All" : sub
                  )}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          <div className="catalog-layout">
            <aside className="filters">
              <h3>Filters</h3>
              <div className="filter-block">
                <strong>Category</strong>
                <button
                  className={activeCategory === "All" ? "filter-active" : ""}
                  onClick={() => chooseCategory("All")}
                >
                  All products
                </button>
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={activeCategory === category.name ? "filter-active" : ""}
                    onClick={() => chooseCategory(category.name)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="filter-block price-filter">
                <strong>Maximum price</strong>
                <div className="price-value">{money(maxPrice)}</div>
                <input
                  type="range"
                  min="300"
                  max="5000"
                  step="100"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
                  aria-label="Maximum price"
                />
                <div className="range-labels">
                  <span>₹300</span><span>₹5,000</span>
                </div>
              </div>

              <button className="reset-button" onClick={() => {
                chooseCategory("All");
                setSearch("");
                setSort("featured");
                setMaxPrice(5000);
              }}>
                Reset all filters ↺
              </button>
            </aside>

            <div className="product-area">
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <article className="product-card" key={product.id}>
                    <div
                      className="product-image"
                      style={{ "--product-bg": product.color }}
                    >
                      <span className="product-emoji">{product.icon}</span>
                      <span className="discount-tag">
                        {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                      </span>
                      <button
                        className={`favorite-button ${
                          favorites.includes(product.id) ? "favorited" : ""
                        }`}
                        onClick={() => toggleFavorite(product.id)}
                        aria-label={
                          favorites.includes(product.id)
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                      >
                        {favorites.includes(product.id) ? "♥" : "♡"}
                      </button>
                    </div>

                    <div className="product-info">
                      <span className="product-category">
                        {product.category} / {product.sub}
                      </span>
                      <h3>{product.name}</h3>
                      <div className="rating">
                        <span>★</span> {product.rating}
                        <span className="rating-label">· Demo rating</span>
                      </div>
                      <div className="price-row">
                        <strong>{money(product.price)}</strong>
                        <del>{money(product.oldPrice)}</del>
                      </div>
                      <button
                        className="add-button"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart <span>+</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="empty-state">
                  <span>🔎</span>
                  <h3>No products found</h3>
                  <p>Try another search or change your filters.</p>
                  <button className="hero-button" onClick={() => {
                    chooseCategory("All");
                    setSearch("");
                    setMaxPrice(5000);
                  }}>
                    Show all products
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="footer-brand">quicker.</span>
        <span>Discover more. Shop smarter.</span>
        <span>© {new Date().getFullYear()} Quicker</span>
      </footer>
    </div>
  );
}
