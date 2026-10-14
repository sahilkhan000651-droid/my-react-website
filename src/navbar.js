import React, { useRef, useState } from "react";
import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import LocationSelector from "./locationselector";
import Logo from "./logo";
import "./navbar.css";

const CATEGORIES = [
  "All departments",
  "Electronics",
  "Home & Kitchen",
  "Fashion",
  "Beauty",
  "Books",
  "Toys & Games",
];

const NAV_LINKS = ["Today’s deals", "New arrivals", "Best sellers", "Gift ideas"];

export default function Navbar({ cartQuantity, cartOpen, onCartClick }) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const searchInputRef = useRef(null);

  function submitSearch(event) {
    event.preventDefault();
    searchInputRef.current?.focus();
  }

  return (
    <header className="quicker-header">
      <div className="quicker-header-main">
        <Logo />

        <LocationSelector />

        <form className="quicker-search" role="search" onSubmit={submitSearch}>
          <label className="quicker-search-category">
            <span className="sr-only">Search department</span>
            <select
              aria-label="Search department"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown size={14} aria-hidden="true" />
          </label>
          <input
            ref={searchInputRef}
            className="quicker-search-input"
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Search Quicker"
            aria-label="Search products"
          />
          <button className="quicker-search-submit" type="submit" aria-label="Search">
            <Search size={21} aria-hidden="true" />
          </button>
        </form>

        <button className="quicker-account" type="button" aria-label="Your account">
          <UserRound className="quicker-account-icon" size={21} aria-hidden="true" />
          <span className="quicker-action-copy">
            <span>Hello, sign in</span>
            <strong>Account <ChevronDown size={13} aria-hidden="true" /></strong>
          </span>
        </button>

        <button className="quicker-orders" type="button">
          <span>Returns</span>
          <strong>&amp; Orders</strong>
        </button>

        <button
          className="quicker-cart"
          type="button"
          aria-label={`Shopping cart, ${cartQuantity} items`}
          aria-expanded={cartOpen}
          onClick={onCartClick}
        >
          <span className="quicker-cart-icon">
            <ShoppingCart size={27} strokeWidth={2} aria-hidden="true" />
            <span className="quicker-cart-count">{cartQuantity}</span>
          </span>
          <strong>Cart</strong>
        </button>
      </div>

      <nav className="quicker-subnav" aria-label="Shop navigation">
        <button
          className="quicker-all-button"
          type="button"
          aria-expanded={categoriesOpen}
          aria-controls="quicker-categories"
          onClick={() => setCategoriesOpen((open) => !open)}
        >
          <Menu size={19} aria-hidden="true" />
          <span>All</span>
        </button>
        <div className="quicker-subnav-links">
          {NAV_LINKS.map((link) => (
            <a href="#shop" key={link}>
              {link}
            </a>
          ))}
        </div>
      </nav>

      {categoriesOpen && (
        <nav className="quicker-category-menu" id="quicker-categories" aria-label="Departments">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setCategoriesOpen(false);
                searchInputRef.current?.focus();
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
